import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
<Navbar/>
        <main>{children}</main>
        
      </body>
    </html>
  );
}
