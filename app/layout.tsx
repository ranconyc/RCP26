import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rancode",
  description: "Ranco's portfolio website.",
};

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-4 lg:px-40 flex justify-between items-center bg-zinc-800 text-white">
      <h1 className="text-2xl font-bold">R</h1>
      <div className="grid gap-1 cursor-pointer md:hidden">
        <div className="h-0.75 w-6 bg-white rounded-full" />
        <div className="h-0.75 w-6 bg-white rounded-full" />
        <div className="h-0.75 w-6 bg-white rounded-full" />
      </div>
      <ul className="hidden md:flex md:space-x-8 md:text-base">
        <li>
          <a href="/projects" className="hover:underline">
            Projects
          </a>
        </li>
        <li>
          <a href="/about" className="hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
