'use client'

import { useEffect } from 'react'
import { useClerk } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'

const InvalidAccess = () => {
  const { signOut } = useClerk()
  const router = useRouter()

  useEffect(() => {
    const handleSignOut = async () => {
      try {
        await signOut()
        // Redirect to root after sign out
        router.push('/')
      } catch (error) {
        console.error('Error signing out:', error)
        // Still redirect even if there's an error
        router.push('/')
      }
    }

    // Add a small delay to show the message briefly
    const timer = setTimeout(handleSignOut, 2000)
    
    return () => clearTimeout(timer)
  }, [signOut, router])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="text-center">
        <h1 className="text-xl font-semibold mb-4 text-red-600">Access Denied</h1>
        <p className="mb-6 text-gray-700">You don't have permission to access this area.</p>
        
        <div className="flex items-center justify-center gap-2 text-gray-600">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Kicking you out and redirecting...</span>
        </div>
      </div>
    </div>
  )
}

export default InvalidAccess
