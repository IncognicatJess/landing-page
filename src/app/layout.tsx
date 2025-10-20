import "./globals.css";
import Navbar from "../components/Navbar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Kelompok 1 - Proyek Next.js",
  description:
    "Landing Page Tugas Next.js oleh Kelompok 1 TRPL 2A Politeknik Astra",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-gradient-to-br from-blue-50 to-pink-50 text-gray-800`}
      >
        <Navbar />
        <main className="min-h-screen px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
