import Navbar from "@/app/components/Navbar";

export default function WelcomePageLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}