import React from 'react'
import Image from 'next/image'
import upFooter from '@/assets/image.png'

const Header = () => {
  return (
    <div className="bg-white">
            <div className="max-w-[75rem] mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center sm:items-start py-4 text-center sm:text-left">
              {/* Logo */}
              <Image
                src={upFooter}
                alt="UP Seal"
                className="h-25 w-auto mb-3 sm:mb-0 sm:mr-0"
              />
    
              {/* Titles */}
              <div className="leading-tight">
                <h1
                  className="font-semibold mt-3 text-[#7B1113] text-2xl sm:text-[36px] "
                  style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                >
                  UPDA Online Application
                </h1>
                <h2
                  className="font-normal text-[#014421] text-sm sm:text-lg "
                  style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                >
                  UNIVERSITY OF THE PHILIPPINES CEBU <br />
                  
                </h2>
              </div>
            </div>
          </div>
  )
}

export default Header