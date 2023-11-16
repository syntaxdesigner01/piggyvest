import type { Metadata } from "next";
import "@/app/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";





export const metadata: Metadata = {
  title: "The better way to save & invest online -PiggVest",
  description: "save & invest",
};

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className="bg-[#F2F7F8]">
           <NavBar/>
            {children}
            <Footer/>
      </body>
    </html>
  );
}
