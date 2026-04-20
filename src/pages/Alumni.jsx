export default function Alumni() {
  const alumni = [
    {
      name: "Ananya Sharma",
      role: "Software Engineer",
      img: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Rahul Mehta",
      role: "Frontend Developer",
      img: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Priya Nair",
      role: "Data Scientist",
      img: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      name: "Arjun Patel",
      role: "Backend Developer",
      img: "https://randomuser.me/api/portraits/men/4.jpg",
    },
  ];

  return (
    <section className="px-6 md:px-16 py-16 bg-gray-50 min-h-screen">

      <h1 className="text-3xl md:text-4xl font-bold text-center">
        Our <span className="text-blue-600">Alumni</span>
      </h1>

      <p className="text-center text-gray-500 mt-3">
        Meet our successful learners working in top companies
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
        {alumni.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow p-4 text-center hover:shadow-lg transition"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-24 h-24 mx-auto rounded-full object-cover"
            />

            <h3 className="mt-4 font-semibold">{item.name}</h3>
            <p className="text-gray-500 text-sm">{item.role}</p>
          </div>
        ))}
      </div>

    </section>
  );
}