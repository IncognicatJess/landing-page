import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 space-y-6">
      <h1 className="text-5xl md:text-6xl font-extrabold text-[var(--color-blue)]">
        Halo dari Kami{" "}
        <span className="text-[var(--color-pink)]">Kelompok 1</span>
      </h1>
      <p className="text-lg md:text-xl max-w-2xl text-gray-600">
        Website ini dibuat sebagai bagian dari tugas eksplorasi framework{" "}
        <strong>Next.js</strong>. Kami berkolaborasi untuk menciptakan tampilan
        yang modern, interaktif, dan menyenangkan!
      </p>
      <Link
        href="/services"
        className="mt-6 px-6 py-3 bg-[var(--color-green)] text-white font-semibold rounded-full shadow-md hover:scale-105 hover:bg-[var(--color-yellow)] transition-transform"
      >
        Lihat Proyek Kami{" "}
      </Link>
    </section>
  );
}
