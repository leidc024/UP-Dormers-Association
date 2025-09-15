import React from "react";
import Image from "next/image";
import qrCode from "@/assets/qr.png";

export default function SurveyBox() {
  return (
    <div className="border rounded bg-white shadow-sm w-full">

      {/* Survey Body */}
      <div className="p-4 bg-white leading-relaxed text-justify">
        <p className="mb-2 text-xs text-[#333333] text-justify">
          Please spare a few minutes as we request that you answer this brief
          survey about your experience with the University Dormitory. You may
          access the survey at{" "}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#337AB7] "
          >
           bit.ly/3IcAKFT
          </a>
          . We look forward to hearing from you. Thank you!
        </p>

        <div className="flex flex-col items-center">
          <p className="text-xs text-gray-600 mb-2 text-center">
            UP Dormitory Unit <br />
            Client Satisfaction Instrument (CSI) Survey
          </p>
          <Image
            src={qrCode}
            alt="QR Code"
            width={188}
            height={158}
            
          />
        </div>
      </div>
    </div>
  );
}
