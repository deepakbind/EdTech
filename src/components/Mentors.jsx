import React from "react";

export default function Mentors() {
  const mentors = [
    {
      name: "Rahul Kumar",
      role: "Senior Data Analyst",
      company: "Meta",
      img: "https://i.pravatar.cc/200?img=11",
    },
    {
      name: "Mentor 2",
      img: "https://i.pravatar.cc/200?img=12",
    },
    {
      name: "Mentor 3",
      img: "https://i.pravatar.cc/200?img=13",
    },
    {
      name: "Mentor 4",
      img: "https://i.pravatar.cc/200?img=14",
    },
    {
      name: "Mentor 5",
      img: "https://i.pravatar.cc/200?img=15",
    },
  ];

  return (
    <section className="w-full">

      {/* 🔥 ENROLL BANNER */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400 text-white px-6 md:px-16 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          <h2 className="text-3xl md:text-5xl font-extrabold">
            ENROLL <span className="text-yellow-400">TODAY</span>
          </h2>

          <div className="mt-6 md:mt-0 bg-black/40 px-6 py-3 rounded-xl text-lg font-semibold">
            Save Upto <span className="text-yellow-400 text-2xl">30%</span>
          </div>
        </div>

        <p className="text-sm mt-4 text-blue-100">
          Limited-period enrollment offer.
        </p>
      </div>

      {/* 🔹 MENTORS */}
      <div className="px-6 md:px-16 py-16 bg-gray-50">

        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Our <span className="text-blue-600">Instructors & Mentors</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mt-10">

          {/* Featured */}
          <div className="bg-white rounded-xl shadow p-6 flex items-center gap-6 max-w-md">
            <img src={mentors[0].img} className="w-28 h-28 rounded-lg" />

            <div>
              <h3 className="font-bold">{mentors[0].name}</h3>
              <p className="text-sm text-gray-500">{mentors[0].role}</p>
              <p className="text-blue-600 text-sm">{mentors[0].company}</p>
            </div>
          </div>

          {/* Small cards */}
          {mentors.slice(1).map((m, i) => (
            <div key={i} className="w-32 h-40 bg-white rounded-xl shadow overflow-hidden">
              <img src={m.img} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}