import React from "react";

export default function MentorStrip() {
  const mentors = [
    {
      name: "Ananya Sharma",
      img: "https://i.pravatar.cc/200?img=31",
      company: "Microsoft",
    },
    {
      name: "Rahul Mehta",
      img: "https://i.pravatar.cc/200?img=32",
      company: "Google",
    },
    {
      name: "Priya Nair",
      img: "https://i.pravatar.cc/200?img=33",
      company: "Microsoft",
    },
    {
      name: "Arjun Patel",
      img: "https://i.pravatar.cc/200?img=34",
      company: "Microsoft",
    },
    {
      name: "Sanjay Jaiswa",
      img: "https://i.pravatar.cc/200?img=35",
      company: "Google",
    },
  ];

  return (
    <section className="px-4 md:px-10 lg:px-16 py-12 bg-white">
      
      {/* MOBILE: SCROLL */}
      <div className="flex gap-4 overflow-x-auto md:hidden justify-center">
        {mentors.map((m, i) => (
          <div
            key={i}
            className="min-w-[220px] bg-white rounded-xl shadow p-4 text-center"
          >
            <img
              src={m.img}
              className="w-full h-32 object-cover rounded-lg"
            />

            <h3 className="mt-3 font-semibold text-sm">{m.name}</h3>
            <p className="text-xs text-gray-500 mt-1">Software Engineer</p>

            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span>{m.company}</span>
              <span>★ 4.9</span>
            </div>
          </div>
        ))}
      </div>

      {/* TABLET + DESKTOP: GRID CENTER */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-6 justify-items-center">
        {mentors.map((m, i) => (
          <div
            key={i}
            className="w-full max-w-[220px] bg-white rounded-xl shadow p-4 text-center"
          >
            <img
              src={m.img}
              className="w-full h-32 object-cover rounded-lg"
            />

            <h3 className="mt-3 font-semibold text-sm">{m.name}</h3>
            <p className="text-xs text-gray-500 mt-1">Software Engineer</p>

            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span>{m.company}</span>
              <span>★ 4.9</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}