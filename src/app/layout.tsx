import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Theme } from '@radix-ui/themes';
import { SessionWrapper } from "@/utils/SessionWrapper"; 
import Navbar from "@/component/layout/Navbar";
import { StoreProvider } from "@/store/StoreProvider";
import { ToastContainer } from "react-toastify";
import LoadingScreen from "@/component/base/LoadingScreen";
import Sidebar from "@/component/layout/Sidebar";

const inter = Inter({ subsets: ["latin"] });

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
        <body className="bg-l-bg">
          <Theme>
            <SessionWrapper>
              <LoadingScreen />
              <Navbar />
              <div className="mt-[3rem]">
                <Sidebar />
                <ToastContainer position="top-center"/>
                <div className="p-4 sm:ml-64">
                  <div className="m-5 p-5">
                    {children}
                  </div>
                </div>
              </div>
            </SessionWrapper>
          </Theme>
        </body>
      </html>
    </StoreProvider>
  );
}
