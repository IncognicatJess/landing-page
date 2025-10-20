import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/services">Services</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
