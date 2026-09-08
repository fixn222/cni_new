import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import NavBar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const romana = localFont({
src : '../public/fonts/romana.ttf' ,
variable : '--font-romana' ,
display : 'swap'
});



const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cni Global",
  description: "Enjoy you'r next destination",
  icons : "/cni.png"
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      
      className={`${geistSans.variable} ${geistMono.variable} ${romana.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
      <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-md">
          <div className="mx-auto w-full max-w-7xl">
            <NavBar />
          </div>
        </header>
        {children}
        </body>
    </html>
  );
}
