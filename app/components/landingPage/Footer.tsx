import Image from "next/image";
import Link from "next/link";

// Import all images from app/assets
import upFooter from "@/assets/image-bw.png";
import seals from "@/assets/seals.png";
import seals1 from "@/assets/seals-1.png";
import seals2 from "@/assets/seals-2.png";

export default function Footer() {
  return (
    <footer className="bg-gray py-10 text-black">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">
    {/* Logo and Address Section */}
    <div className="flex flex-col items-start">
      <Image
        src={upFooter}
        alt="UP Logo"
        className="w-32 md:w-40 mb-4"
        priority
      />
      <h3 className="text-lg md:text-xl font-bold mt-2 md:mt-4">
        University of the Philippines Cebu
      </h3>
      <p className="text-sm md:text-base">Lahug: Gorordo Avenue, Cebu City 6000</p>
      <p className="text-sm md:text-base">SRP: South Road Properties, Cebu City 6000</p>
      <p className="text-sm md:text-base">pio.upcebu@edu.ph</p>
      <p className="text-sm md:text-base">(032) 232 8187</p>
    </div>

    {/* Resources Section */}
    <div>
      <h3 className="text-lg md:text-xl font-bold mb-4">Resources</h3>
      <ul className="space-y-3 md:space-y-5 text-sm md:text-base">
        <li><a href="https://up.edu.ph/" className="hover:underline">University of the Philippines System</a></li>
        <li><a href="https://upcat.up.edu.ph/" className="hover:underline">UP College Admission Test</a></li>
        <li><a href="https://www.upcebu.edu.ph/eduroam-2-2/" className="hover:underline">UP Cebu Eduroam</a></li>
        <li><a href="https://uvec.upcebu.edu.ph/" className="hover:underline">University Virtual Education Commons</a></li>
        <li><a href="https://library.upcebu.edu.ph/" className="hover:underline">University Library</a></li>
      </ul>
    </div>

    {/* Policy Section */}
    <div>
      <h3 className="text-lg md:text-xl font-bold mb-4">Policy</h3>
      <ul className="space-y-3 md:space-y-5 text-sm md:text-base">
        <li><a href="https://www.upcebu.edu.ph/wp-content/uploads/2025/07/UP-Cebu-Citizens-Charter-5th-edition_2025-1-copy.pdf" className="hover:underline">UP Cebu Citizen&apos;s Charter</a></li>
        <li><a href="https://www.upcebu.edu.ph/transaparency-seal-2-0/" className="hover:underline">NPC Registration</a></li>
        <li><a href="https://privacy.up.edu.ph/" className="hover:underline">Data Privacy</a></li>
        <li><a href="https://up.edu.ph/wp-content/uploads/2017/03/VIG-layout-Jan-2017B-compressed.pdf" className="hover:underline">Branding & Trademark Guide</a></li>
      </ul>
    </div>

    {/* Other Links Section */}
    <div>
      <h3 className="text-lg md:text-xl font-bold mb-4">Other Links</h3>
      <ul className="space-y-3 md:space-y-6 text-sm md:text-base">
        <li><a href="https://www.upcebu.edu.ph/bid-opportunities/" className="hover:underline">Bid Opportunities</a></li>
        <li><a href="https://www.upcebu.edu.ph/jobs/" className="hover:underline">Careers</a></li>
      </ul>

      {/* Seals */}
      <div className="flex flex-wrap md:flex-nowrap mt-6 gap-6">
        <Link href="https://www.foi.gov.ph/agencies/upc/">
          <Image src={seals} alt="Freedom of Information" className="w-20 md:w-24" />
        </Link>
        <Link href="https://www.upcebu.edu.ph/transaparency-seal-2-0/">
          <Image src={seals1} alt="Transparency Seal" className="w-20 md:w-24" />
        </Link>
        <Link href="https://privacy.gov.ph/data-privacy-act/">
          <Image src={seals2} alt="DPO/DPS" className="w-20 md:w-24" />
        </Link>
      </div>
    </div>
  </div>

  {/* Copyright */}
  <div className="flex flex-col md:flex-row justify-center items-center mt-10 text-xs md:text-sm">
    <h3>Copyright All Rights Reserved &copy; 2025</h3>
  </div>
</footer>

  );
}
