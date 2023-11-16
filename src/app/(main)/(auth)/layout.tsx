import type { Metadata } from "next";
import './style.css'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: "PiggyVest | Dashboard",
  description: "save & invest",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#062863] layout_bg">
            {children}
      </body>
    </html>
  );
}
