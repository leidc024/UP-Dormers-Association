'use client'

import { useEffect, useState } from 'react'
import { useClerk } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { ShieldAlert, Loader2, Home } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const InvalidAccess = () => {
  const { signOut } = useClerk()
  const router = useRouter()
  const [countdown, setCountdown] = useState(5)
  const [isRedirecting, setIsRedirecting] = useState(false)

  useEffect(() => {
    // Countdown timer
    if (countdown > 0) {
      const countdownTimer = setInterval(() => {
        setCountdown((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(countdownTimer)
    }

    // When countdown reaches 0, sign out and redirect
    if (countdown === 0) {
      handleSignOut()
    }
  }, [countdown])

  const handleSignOut = async () => {
    setIsRedirecting(true)
    try {
      await signOut()
      router.push('/')
    } catch (error) {
      console.error('Error signing out:', error)
      router.push('/')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white">
      <Card className="w-full max-w-lg shadow-2xl border-2" style={{ borderColor: '#7B1113' }}>
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <div className="rounded-full p-6" style={{ backgroundColor: '#7B111320' }}>
              <ShieldAlert className="h-16 w-16" style={{ color: '#7B1113' }} />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold mb-2" style={{ color: '#7B1113' }}>
            Access Denied
          </CardTitle>
          <CardDescription className="text-base text-gray-600">
            You don't have the required permissions to access this area
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          

          <div className="text-center space-y-4">
            {!isRedirecting ? (
              <>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600 mb-2">
                    Automatically Kick you out in:
                  </p>
                  <div className="text-4xl font-bold tabular-nums" style={{ color: '#7B1113' }}>
                    {countdown}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">seconds</p>
                </div>

                <Button 
                  onClick={handleSignOut}
                  className="w-full text-white"
                  style={{ backgroundColor: '#7B1113' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5A0D0E'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#7B1113'}
                  size="lg"
                >
                  <Home className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center gap-3 py-8">
                <Loader2 className="h-12 w-12 animate-spin" style={{ color: '#7B1113' }} />
                <p className="text-gray-600 font-medium">Redirecting...</p>
              </div>
            )}
          </div>

          <div className="text-center pt-2 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              UP Dormers Association
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default InvalidAccess
