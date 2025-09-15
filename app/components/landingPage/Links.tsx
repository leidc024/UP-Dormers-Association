import React from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link";

const ImportantLinks = () => {
  return (
    <div>
      <Link href="/apply" passHref>
        <div>
          <Button className="w-full bg-[#7B1113] text-sm text-white hover:bg-[#8c1a20]">
            UPDA 2026 ONLINE APPLICATION
          </Button>
        </div>
      </Link>

      <div className='py-6'>
        <Button className="w-full bg-[#014421] text-sm text-white hover:bg-[#026d32]">
          UPDA 2026 APPLICATION STATUS
        </Button>
      </div>

      <Link
        href="https://www.upcebu.edu.ph/wp-content/uploads/2025/04/DORMITORY-APPLICATION-FORM.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <Button className="w-full bg-[#F5AB2C] text-sm text-white font-medium hover:bg-[#D9961F]">
            UPDA APPLICATION FORM
          </Button>
        </div>
      </Link>
    </div>
  )
}

export default ImportantLinks
