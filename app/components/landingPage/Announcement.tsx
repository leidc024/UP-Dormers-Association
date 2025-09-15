import Image from "next/image";

interface AnnouncementProps {
  title: string;
  message: string;
  image?: string; // optional image
}

export default function Announcement({ title, message, image }: AnnouncementProps) {
  return (
    <div className="border border-[#7B1113] rounded-md bg-white shadow-sm p-6">
      {/* Title + optional image */}
      <div className="flex items-start gap-4">
        {image && (
          <Image
            src={image}
            alt={title}
            width={64}
            height={64}
            className="w-16 h-16 object-contain"
          />
        )}
        <h2
          className="text-lg sm:text-xl font-semibold text-[#014421]"
          style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
        >
          {title}
        </h2>
      </div>

      {/* Message */}
      <p
        className="mt-3 text-gray-800 text-sm sm:text-base leading-relaxed"
        style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
        dangerouslySetInnerHTML={{ __html: message }}
      />
    </div>
  );
}
