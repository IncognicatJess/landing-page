export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center py-20 text-center space-y-6">
      <h1 className="text-5xl font-extrabold text-[var(--color-blue)]">
        Proyek Next.js Kelompok 1
      </h1>
      <p className="text-lg max-w-2xl text-gray-600">
        Website ini dibuat sebagai bagian dari tugas eksplorasi framework{" "}
        <strong>Next.js</strong>. Kami mempelajari konsep SSR, routing, dan
        styling modern berbasis Tailwind CSS.
      </p>
      <p className="text-md text-gray-500">TRPL 1A • Politeknik Astra • 2025</p>
    </main>
  );
}
