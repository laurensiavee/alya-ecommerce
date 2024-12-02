import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Theme } from '@radix-ui/themes';
import { SessionWrapper } from "@/utils/SessionWrapper"; 
import Navbar from "@/component/layout/Navbar";
import { StoreProvider } from "@/store/StoreProvider";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
            <Navbar />
            <SessionWrapper>
              <ToastContainer position="top-center"/>
              <div className="m-5 p-5">
                {children}
              </div>
            </SessionWrapper>
          </Theme>
          {/* <script src="../path/to/flowbite/dist/flowbite.min.js"></script> */}
        </body>
      </html>
    </StoreProvider>
  );
}
