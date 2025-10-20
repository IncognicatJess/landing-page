import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Kelompok 1 - Proyek Next.js",
  description:
    "Landing Page Tugas Next.js oleh Kelompok 1 TRPL 1A Politeknik Astra",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
