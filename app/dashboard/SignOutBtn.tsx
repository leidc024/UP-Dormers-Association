'use client'

import { SignOutButton } from '@clerk/nextjs'

export default function SignOutBtn() {
  return (
    <SignOutButton>
      <button className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition">
        Sign Out
      </button>
    </SignOutButton>
  )
}
