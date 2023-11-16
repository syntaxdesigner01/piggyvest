import type { Metadata } from "next";
import './style.css'
import '@/app/globals.css'
import { UiProviders } from "@/utils/chakraProviders";



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
        <UiProviders>
            {children}
        </UiProviders>
      </body>
    </html>
  );
}
