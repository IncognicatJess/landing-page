export default function About() {
  const members = [
    { name: "Master", role: "Koordinator", color: "bg-[var(--color-blue)]" },
    {
      name: "Anggota 2",
      role: "Frontend Developer",
      color: "bg-[var(--color-orange)]",
    },
    {
      name: "Anggota 3",
      role: "Backend Developer",
      color: "bg-[var(--color-green)]",
    },
    {
      name: "Anggota 4",
      role: "UI/UX Designer",
      color: "bg-[var(--color-purple)]",
    },
  ];

  return (
    <main className="p-10 text-center animate-fade-in">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[var(--color-blue)] to-[var(--color-pink)] bg-clip-text text-transparent">
        Tentang Kami
      </h1>
      <p className="max-w-2xl mx-auto text-gray-600 mb-10">
        Kami adalah kelompok mahasiswa Software Engineering Politeknik Astra
        yang berkolaborasi dalam proyek Next.js ini untuk memahami konsep
        fullstack modern.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((m) => (
          <div
            key={m.name}
            className={`rounded-2xl shadow-md text-white p-6 ${m.color}`}
          >
            <h2 className="text-2xl font-bold">{m.name}</h2>
            <p>{m.role}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
