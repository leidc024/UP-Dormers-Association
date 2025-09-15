import Banner from "../components/landingPage/Banner";


export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Banner />
      
      {children}
    </>
  );
}