// app/form/page.tsx 
import React from 'react'
import { SignOutButton } from '@clerk/nextjs'

const ApplicationForm = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-xl font-semibold mb-4">You're an Applicant</h1>

      {/* Your actual form content here */}
      <div className="mb-6">This is for Application Form</div>

      {/* Sign out button */}
      <SignOutButton>
        <button className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition">
          Sign Out
        </button>
      </SignOutButton>
    </div>
  )
}

export default ApplicationForm
