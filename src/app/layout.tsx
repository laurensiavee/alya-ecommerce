import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Theme } from '@radix-ui/themes';
import { SessionWrapper } from "@/utils/SessionWrapper"; 
import Navbar from "@/component/layout/Navbar";
import { StoreProvider } from "@/store/StoreProvider";
import { ToastContainer } from "react-toastify";
import LoadingScreen from "@/component/base/LoadingScreen";
import Sidebar from "@/component/layout/Sidebar";
import ContentContainer from "@/component/layout/ContentContainer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"], // Customize the weights you want to use
});

export const metadata: Metadata = {
  title: "Alya store",
  description: "ecommerce app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={`bg-l-bg ${poppins.className}`}>
          <Theme>
            <SessionWrapper>
              <LoadingScreen />
              <Navbar />
              <div className="font-sans mt-[3rem] bg-gray-100">
                <Sidebar />
                <ToastContainer position="top-center"/>
                <ContentContainer>
                  {children}
                </ContentContainer>
              </div>
            </SessionWrapper>
          </Theme>
        </body>
      </html>
    </StoreProvider>
  );
}
