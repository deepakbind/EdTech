import React from "react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Your Name",
      role: "Design Graphic",
      img: "https://i.pravatar.cc/100?img=21",
    },
    {
      name: "Your Name",
      role: "Design Graphic",
      img: "https://i.pravatar.cc/100?img=22",
    },
    {
      name: "Your Name",
      role: "Design Graphic",
      img: "https://i.pravatar.cc/100?img=23",
    },
  ];

  return (
    <section className="px-6 md:px-16 py-16 bg-gray-50 relative">

      {/* Heading */}
      <h2 className="text-center text-2xl md:text-3xl font-bold">
        What People Say About{" "}
        <span className="text-blue-600">InterviewPrep Edu</span>
      </h2>

      <p className="text-center text-gray-500 mt-2 mb-10">
        We simplify education with innovation, quality, and results.
      </p>

      {/* LEFT ARROW */}
      <button className="hidden md:block absolute left-10 top-1/2 transform -translate-y-1/2 bg-white shadow rounded-full w-10 h-10">
        ←
      </button>

      {/* RIGHT ARROW */}
      <button className="hidden md:block absolute right-10 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white rounded-full w-10 h-10">
        →
      </button>

      {/* Cards */}
      <div className="flex justify-center gap-6 flex-wrap">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow w-[300px]"
          >
            <div className="flex items-center gap-3 mb-3">
              <img
                src={r.img}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h4 className="font-semibold">{r.name}</h4>
                <p className="text-xs text-gray-500">{r.role}</p>
              </div>
            </div>

            <div className="text-yellow-400 mb-2">★★★★★</div>

            <p className="text-sm text-gray-600">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete account.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}