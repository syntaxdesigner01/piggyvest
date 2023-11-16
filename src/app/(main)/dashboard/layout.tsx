import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PiggyVest | Dashboard",
  description: "save & invest",
};

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex ">
          <aside className="w-[20%] bg-black text-white h-screen">
            <p>
              <Link href={'/dashboard/home'}>Home</Link>
            </p>
            <p>
            <Link href={'/dashboard/about'}>About</Link>
            </p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
          </aside>

          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
