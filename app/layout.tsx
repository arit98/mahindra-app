import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "./store/ReduxProvider";
import NavBar from "./components/NavBar";
import Footer from "./components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mahindra Blossom | Premium Homes in Whitefield",
  description: "Experience positive energy at Mahindra Blossom, premium 2, 3 & 4BHK homes in Whitefield.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <ReduxProvider>
          <NavBar />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
