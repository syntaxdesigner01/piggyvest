import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "PiggVest | Dashboard",
  description: "save & invest",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <p>Hello</p>
            {children}
      </body>
    </html>
  );
}
