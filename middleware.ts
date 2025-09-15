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
  const { data, error } = await supabase
    .from("users")
    .select("role")
    .eq("clerk_id", userId)
    .single();

  if (error || !data) {
    console.error("Middleware Supabase error:", error);
    return NextResponse.redirect(new URL("/error", req.url));
  }

  const role = data.role;
  const url = req.nextUrl.clone();

  // Redirect root `/` based on role
  if (url.pathname === "/") {
    if (role === "admin") {
      url.pathname = "/dashboard";
    } else {
      url.pathname = "/form";
    }
    return NextResponse.redirect(url);
  }

  // 🔒 Role-based protection
  if (url.pathname.startsWith("/dashboard") && role !== "admin") {
    // applicant tried to enter admin
    url.pathname = "/form";
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
