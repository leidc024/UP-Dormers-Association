import PortalFooter from "@/app/components/portal/PortalFooter"
import ApplyHeader from "@/app/components/portal/ApplyHeader"

export default function ApplyLayout ({ children }: { children: React.ReactNode }) {
    return(
        <>
        
        <ApplyHeader />
        <div className="flex flex-col min-h-screen">
         <main className="flex-grow">
            {children}
         </main>
         </div>
        
        <PortalFooter />
        
        </>
    )
}
    