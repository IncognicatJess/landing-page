export default function Contact() {
  const contacts = [
    {
      name: "Master",
      phone: "0812-xxxx-xxxx",
      ig: "@master.dev",
      color: "from-[var(--color-blue)] to-[var(--color-green)]",
    },
    {
      name: "Anggota 2",
      phone: "0813-xxxx-xxxx",
      ig: "@anggota2_ui",
      color: "from-[var(--color-orange)] to-[var(--color-purple)]",
    },
    {
      name: "Anggota 3",
      phone: "0814-xxxx-xxxx",
      ig: "@anggota3_code",
      color: "from-[var(--color-green)] to-[var(--color-blue)]",
    },
    {
      name: "Anggota 4",
      phone: "0815-xxxx-xxxx",
      ig: "@anggota4_art",
      color: "from-[var(--color-purple)] to-[var(--color-orange)]",
    },
  ];

  return (
    <main className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-10 text-[var(--color-orange)]">
        Kontak Kami
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {contacts.map((c) => (
          <div
            key={c.name}
            className={`p-6 rounded-2xl text-white shadow-lg bg-gradient-to-br ${c.color} hover:scale-105 transition-transform`}
          >
            <img
              src="/profile-default.png"
              alt={c.name}
              className="w-24 h-24 mx-auto rounded-full border-4 border-white mb-4 object-cover"
            />
            <h2 className="text-2xl font-bold">{c.name}</h2>
            <p>{c.phone}</p>
            <p>{c.ig}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
