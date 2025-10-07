import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

import imageBW from "@/assets/UPC.png"
import ApplicationForm from "../components/applicationForm/FormField"
import BackToTopButton from "@/components/ui/BacktoTopButton"

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-150">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/apply" className="flex items-center gap-3">
              <Image src={imageBW} alt="UP Cebu Logo" className="h-15 w-15 object-contain" />
              <div>
                <h1 className="text-xl font-bold text-foreground">UP Cebu Dormitory</h1>
                <p className="text-sm text-muted-foreground">Application System</p>
              </div>
            </Link>
            <Link href="/">
              <Button variant="outline" size="sm">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-foreground">Dormitory Application Form</h2>
            <p className="text-muted-foreground">Please fill out all required fields accurately</p>
          </div>

          <ApplicationForm />
          <BackToTopButton />
        </div>
      </main>
    </div>
  )
}
