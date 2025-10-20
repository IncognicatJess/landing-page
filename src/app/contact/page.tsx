export default function Contact() {
  const contacts = [
    {
      name: "Jaisyu Nur Muhammadi",
      phone: "0851-8475-3922",
      ig: "@jeizoo",
      img: "/jes2.png",
      color: "from-[var(--color-blue)] to-[var(--color-green)]",
    },
    {
      name: "Kesya Noventa Salsabila",
      phone: "0813-xxxx-xxxx",
      ig: "@anggota2_ui",
      img: "/anggota2.png",
      color: "from-[var(--color-orange)] to-[var(--color-purple)]",
    },
    {
      name: "Evan Wahyu Ezra Manurung",
      phone: "0814-xxxx-xxxx",
      ig: "@anggota3_code",
      img: "/anggota3.png",
      color: "from-[var(--color-green)] to-[var(--color-blue)]",
    },
    {
      name: "Nayla Raissa Putri",
      phone: "0815-xxxx-xxxx",
      ig: "@anggota4_art",
      img: "/anggota4.png",
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
              src={c.img}
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
