// lib/syncUser.ts
import { supabase } from  './supabase'

interface ClerkUser {
  id: string
  email_addresses?: { email_address: string }[]
  first_name?: string
  last_name?: string
}

export async function syncUser(clerkUser: ClerkUser) {
  const clerkId = clerkUser.id
  const email = clerkUser.email_addresses?.[0]?.email_address || ''
  const firstName = clerkUser.first_name || ''
  const lastName = clerkUser.last_name || ''
  const fullName = `${firstName} ${lastName}`.trim()

  if (!clerkId || !email) {
    console.error('Missing clerk_id or email from Clerk payload:', { clerkId, email })
    return { error: 'Missing required user fields' }
  }

  const { error } = await supabase.from('users').insert([
    {
      clerk_id: clerkId,
      email,
      full_name: fullName,
      role: 'applicant', // default role
    },
  ])

  if (error) {
    console.error('Supabase insert error:', error)
    return { error: error.message }
  }

  return { success: true }
}
// This function syncs a Clerk user to the Supabase database, inserting their details if they don't already exist.