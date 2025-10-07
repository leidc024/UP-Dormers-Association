'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { RefreshCw, Home, AlertCircle } from "lucide-react"

export default function ErrorPage() {
  const handleRefresh = () => {
    window.location.reload()
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Something went wrong
          </h1>
          <p className="text-gray-600">
            We encountered an error while setting up your account. This is usually temporary and should resolve shortly.
          </p>
        </div>

        <div className="space-y-3">
          <Button
            onClick={handleRefresh}
            className="w-full flex items-center justify-center gap-2"
            variant="default"
          >
            <RefreshCw className="h-4 w-4" />
            Try Again
          </Button>

          <Link href="/" className="block">
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
            >
              <Home className="h-4 w-4" />
              Go Home
            </Button>
          </Link>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            If this problem persists, please contact support.
          </p>
        </div>
      </div>
    </div>
  )
}