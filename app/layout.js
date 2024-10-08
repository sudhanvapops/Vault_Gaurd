import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar/page";
import Script from 'next/script';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Password Manager",
  description: "Your Own Personalized Password Manager",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}antialiased`}>
      <Script src="https://cdn.lordicon.com/lordicon.js" strategy="afterInteractive" />
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
