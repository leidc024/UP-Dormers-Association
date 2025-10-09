import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // service role required for role fetch
);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  if (!userId) return NextResponse.next(); // not signed in yet

  // Fetch user role
  let { data, error } = await supabase
    .from("users")
    .select("role")
    .eq("clerk_id", userId)
    .single();

  // If user not found, create minimal user record immediately
  if (error || !data) {
    console.log("User not found in Supabase, creating minimal record for:", userId);
    
    // Create minimal user record with default role
    const { error: insertError } = await supabase
      .from("users")
      .insert({
        clerk_id: userId,
        role: "applicant", // default role
        email: "", // will be updated by webhook later
        full_name: "" // will be updated by webhook later
      });

    if (insertError) {
      console.error("Failed to create minimal user record:", insertError);
      // Redirect to invalid page instead of error for new users
      return NextResponse.redirect(new URL("/invalid", req.url));
    }

    // Set default role for new user
    data = { role: "applicant" };
  }

  const role = data.role;
  const url = req.nextUrl.clone();

  // Redirect root `/` based on role
  if (url.pathname === "/") {
    if (role === "admin") {
      url.pathname = "/dashboard";
    } else {
      url.pathname = "/invalid";
    }
    return NextResponse.redirect(url);
  }

  // 🔒 Role-based protection
  if (url.pathname.startsWith("/dashboard") && role !== "admin") {
    // applicant tried to enter admin
    url.pathname = "/apply";
    return NextResponse.redirect(url);
  }

  if (url.pathname.startsWith("/form") && role !== "applicant") {
    // admin tried to enter applicant form
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Run middleware on all routes except static assets
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
