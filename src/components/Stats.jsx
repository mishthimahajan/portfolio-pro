export default function Stats() {
  const stats = [
    {
      title: "DSA Problems",
      value: 500,
    },
    {
      title: "Projects",
      value: 3,
    },
    {
      title: "Certificates",
      value: 4,
    },
    {
      title: "Internships",
      value: 2,
    },
  ];

  return (
    <section className="py-20 px-6">
      <h1 className="text-4xl md:text-5xl text-center font-bold mb-12">
        Achievements
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, index) => (
          <div
            key={index}
            className="
              bg-gray-900
              p-8
              rounded-3xl
              text-center
              shadow-lg
              hover:scale-105
              duration-300
            "
          >
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">
              {s.value}+
            </h1>

            <p className="mt-3 text-gray-300">{s.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}