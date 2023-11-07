import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UiProviders } from "@/utils/chakraProviders";
import { Provider } from "react-redux";
import { store } from "@/redux/store/store";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        {/* <Provider store={store}> */}
          <UiProviders>
            {children}
            </UiProviders>
        {/* </Provider> */}
      </body>
    </html>
  );
}
