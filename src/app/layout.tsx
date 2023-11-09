import type { Metadata } from "next";
import '@/utils/font.css'
import "./globals.css";
import { UiProviders } from "@/utils/chakraProviders";
import { Provider } from "react-redux";
import { store } from "@/redux/store/store";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";




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
      
      <body className="bg-[#F2F7F8]">
        {/* <Provider store={store}> */}
          <UiProviders>
            <NavBar/>
            {children}
            <Footer/>
            </UiProviders>
        {/* </Provider> */}
      </body>
    </html>
  );
}
