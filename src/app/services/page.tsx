export default function Services() {
  const tasks = [
    { name: "Master", task: "Setup Next.js, Routing, Navbar" },
    { name: "Anggota 2", task: "Desain UI & Tailwind Styling" },
    { name: "Anggota 3", task: "Konten dan Struktur Halaman" },
    { name: "Anggota 4", task: "Integrasi & Testing" },
  ];

  return (
    <main className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-8 text-[var(--color-green)]">
        Pembagian Tugas
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tasks.map((t) => (
          <div
            key={t.name}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition"
          >
            <h2 className="text-xl font-semibold text-[var(--color-blue)]">
              {t.name}
            </h2>
            <p className="text-gray-600 mt-2">{t.task}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
