import React from 'react'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'
import { SignOutButton } from '@clerk/nextjs'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const Dashboard = async () => {
  // Get the current user from Clerk
  const { userId } = await auth()

  // If no user is logged in, redirect to admin sign-in
  if (!userId) {
    redirect('/admin')
  }

  // Check user role from Supabase
  const { data, error } = await supabase
    .from('users')
    .select('role')
    .eq('clerk_id', userId)
    .single()

  // If user doesn't exist or is not an admin, redirect them
  if (error || !data || data.role !== 'admin') {
    redirect('/invalid')
  }

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-xl font-semibold mb-4">You are the Admin</h1>

      {/* Your actual form content here */}
      <div className="mb-6">This is for Admin Dashboard</div>

      {/* Sign out button */}
      <SignOutButton>
        <button className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition">
          Sign Out
        </button>
      </SignOutButton>
    </div>
  )
}

export default Dashboard