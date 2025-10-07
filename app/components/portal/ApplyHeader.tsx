import React from 'react'
import Image from 'next/image'
import upFooter from '@/assets/image.png'

const ApplyHeader = () => {
  return (
    <div className="bg-white">
      <div
        className="
          max-w-[75rem] 
          mx-4 sm:mx-12 md:mx-20 lg:mx-40 xl:mx-[25rem] 
          px-6 sm:px-8 
          flex flex-col sm:flex-row 
          items-center 
          justify-center sm:justify-start 
          py-4 
          text-center sm:text-left
        "
      >
        {/* Logo */}
        <Image
          src={upFooter}
          alt="UP Seal"
          width={175}
          height={90}
          className="mb-3 sm:mb-0 sm:mr-4"
        />

        {/* Titles */}
        <div className="leading-tight flex flex-col justify-center">
          <h1
            className="font-normal text-[#7B1113] text-[30px]"
            style={{
              fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            }}
          >
            UPDA Admin Management
          </h1>
          <h2
            className="font-normal text-[#014421] text-[18px]"
            style={{
              fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            }}
          >
            UNIVERSITY OF THE PHILIPPINES CEBU
          </h2>
        </div>
      </div>
    </div>
  )
}

export default ApplyHeader
