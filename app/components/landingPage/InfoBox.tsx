import React from "react";

type InfoBoxProps = {
  title: string;
  message: React.ReactNode;
};

export default function InfoBox({ title, message }: InfoBoxProps) {
  return (
    <div className="border rounded bg-white ">
      {/* Header */}
      <div className="border-b bg-[#F5F5F5] px-4 py-2">
        <h2 className="text-lg font-bold text-[#7B1113]">{title}</h2>
      </div>

      {/* Body */}
      <div className="p-4 bg-white text-sm text-gray-800 leading-relaxed whitespace-pre-line">
        {message}
      </div>
    </div>
  );
}
