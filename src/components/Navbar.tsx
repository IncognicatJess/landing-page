"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // ikon bawaan Next.js (via lucide-react)

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 shadow-sm border-b border-gray-100">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo / Title */}
        <Link href="/" className="text-2xl font-bold text-[var(--color-blue)]">
          Kelompok<span className="text-[var(--color-pink)]">1</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-[var(--color-blue)] font-medium">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-[var(--color-pink)] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[var(--color-blue)]"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col md:hidden bg-white/90 backdrop-blur-md border-t border-gray-100 shadow-md p-4 space-y-3">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[var(--color-blue)] hover:text-[var(--color-pink)] text-lg font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
