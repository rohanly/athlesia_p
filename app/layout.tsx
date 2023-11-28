import type { Metadata } from "next";
import { Inter, Oxanium } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { Toaster } from "@/components/ui/toaster";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });
const oxanium = Oxanium({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressContentEditableWarning suppressHydrationWarning lang="en">
      <body className={oxanium.className}>
        <div className="flex flex-col justify-between h-[100dvh]">
          <NavBar />
          <div className="flex flex-col flex-2">
            <Providers>{children}</Providers>
            <Toaster />
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
