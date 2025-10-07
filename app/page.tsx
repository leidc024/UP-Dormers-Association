
import Footer from "./components/landingPage/Footer";
import InfoBox from "./components/landingPage/InfoBox";
import Announcement from "./components/landingPage/Announcement";
import Header from "./components/landingPage/Header";
import Banner from "./components/landingPage/Banner";
import { Button } from "@/components/ui/button"
import SurveyBox from "./components/landingPage/Survey";
import BackToTopButton from "@/components/ui/BacktoTopButton";
import DormInfo from "./components/landingPage/DormInfo";
import DormRequirements from "./components/landingPage/DormRequirements";
import ImportantLinks from "./components/landingPage/Links";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header Banner */}
      <Banner />

      {/* Header Top: Logo + Titles */}
      <Header />

      {/* Content Container */}
      <div className="flex-1 w-full">
        {/* Row 1: Announcements */}
        <section className="py-1">
          <div className="max-w-[75rem] mx-auto px-6 sm:px-8">
            <Announcement
                title="10 August 2026 - UPDA 2026 RESULTS"
                message={`
                  The UPDA 2026 results are now available for incoming new first-year students 
                  for AY 2026-2027. Please click on the 'UPCAT 2025 APPLICATION STATUS' button 
                  to view the results. Login using the application portal credentials.<br /><br />
                  For qualifiers, please reply to the offer on or before 
                  <strong>31 AUG 2026</strong>.<br /><br />
                  For inquiries and further announcements, please visit the UP Cebu Office of 
                  Student Affairs Facebook page at 
                  <a href="https://www.facebook.com/osa.upcebu" class="text-[#014421] underline">
                    UP Cebu OSA
                  </a>.
                `}
              />
          </div>
        </section>

        {/* Row 2: Two-column layout */}
        <main className="max-w-[75rem] mx-auto flex flex-col lg:flex-row flex-1 py-8 gap-8 px-6 sm:px-8">
          {/* Left Column */}
          <div className="flex-1 space-y-6">
            <InfoBox
              title="ADMISSION TO THE DORMITORY "
              message={ <DormRequirements /> }
            />
            
            <InfoBox
              title="Important Reminders"
              message={
                <ol className="list-decimal list-inside space-y-2">
                  <li>Complete the form truthfully.</li>
                  <li>Note that not all applicants can be accommodated in the dormitory.</li>
                  <li>Only fully completed requirements will be considered for processing.</li>
                </ol>
              }
            />

            <InfoBox
              title="DORMITORY CAPACITY AND RATES"
              message={ <DormInfo /> }
            />
          </div>

            {/* Add more InfoBoxes or content here */}
          

          {/* Right Column */}
          <aside className="w-full lg:w-80 space-y-6">
            <InfoBox
              title="Important Links"
              message= {<ImportantLinks />}
            />
            
            <InfoBox
                title="Contact Information"
                message={
                  <div className="space-y-2">
                    <p>
                      For questions, concerns, and other information, you may contact the
                      following:
                    </p>
                    <p>
                      <b>Dormitory Manager:<br /></b>{" "}
                      <a
                        href="mailto:dorm.upcebu@up.edu.ph"
                        style={{ color: "#337AB7" }}
                      >
                        dorm.upcebu@up.edu.ph
                      </a>
                    </p>
                    <p>
                      <b>UP Dormers’ Association:</b>{" "}
                      <a
                        href="mailto:upcebu.upda@gmail.com"
                        style={{ color: "#337AB7" }}
                      >
                        upcebu.upda@gmail.com
                      </a>
                    </p>
                  </div>
                }
              />

                <Button asChild variant="outline" className="w-full font-bold text-sm text-[#7B1113] hover:bg-gray-300">
                      <a 
                        href="https://privacy.up.edu.ph/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        PRIVACY NOTICE
                      </a>
                    </Button>

                <Button asChild variant="outline" className="w-full text-sm font-bold text-[#7B1113] hover:bg-gray-300">
                      <a 
                        href="https://www.upcebu.edu.ph/wp-content/uploads/2025/07/UP-Cebu-Citizens-Charter-5th-edition_2025-1-copy.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        CITIZEN'S CHARTER
                      </a>
                    </Button>
             {/* QR Survey */}
            <SurveyBox />
            {/* Add more right-side boxes if needed */}
          </aside>
        </main>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 mt-8">
        <div className="max-w-[75rem] mx-auto px-6 sm:px-8">
          <Footer />
        </div>
      </div>

      {/* Floating Back to Top button */}
      <BackToTopButton />
    </div>
  );
}
