import type { Metadata } from "next";
import "@/utils/font.css";
import "./globals.css";
import { UiProviders } from "@/utils/chakraProviders";

export const metadata: Metadata = {
  title: "The better way to save & invest online -PiggVest",
  description: "save & invest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
