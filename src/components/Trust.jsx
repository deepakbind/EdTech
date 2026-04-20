import React from "react";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaChartLine,
  FaLaptop,
  FaUsers,
} from "react-icons/fa";

export default function Trust() {
  const features = [
    {
      icon: <FaUserGraduate />,
      title: "Personalized Learning",
      desc: "Adaptive learning paths tailored to your goals."
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Expert Mentorship",
      desc: "Learn from industry professionals."
    },
    {
      icon: <FaChartLine />,
      title: "Real-Time Progress",
      desc: "Track your performance with analytics."
    },
    {
      icon: <FaLaptop />,
      title: "Interactive Classes",
      desc: "Live + recorded sessions anytime."
    },
    {
      icon: <FaUsers />,
      title: "Community Support",
      desc: "Join thousands of learners."
    },
    {
      icon: <FaLaptop />,
      title: "Multi-Device Access",
      desc: "Learn anytime, anywhere."
    },
  ];

  return (
    <section className="px-6 md:px-16 py-20 bg-gray-50">

      {/* 🔥 GREEN CERTIFICATE CARD */}
      <div className="bg-green-500 text-white rounded-2xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        
        {/* Left Content */}
        <div className="max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold">
            Earn Industry Recognized Certificates
          </h2>

          <p className="mt-4 text-green-100">
            Showcase your skills with certificates that are valued by top companies.
          </p>

          <button className="mt-6 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold">
            View Certificates
          </button>
        </div>

        {/* Right Image */}
        <div className="mt-8 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da"
            alt="certificate"
            className="w-64 md:w-80 rounded-lg shadow-lg"
          />
        </div>

        {/* Background Shapes */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-400 rounded-full opacity-30"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-green-300 rounded-full opacity-30"></div>
      </div>

      {/* 🔹 HEADING */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold">
          Why Learners Trust{" "}
          <span className="text-blue-600">Our Platform</span>
        </h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          We provide everything you need to grow your skills.
        </p>
      </div>

      {/* 🔹 CARDS */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
          >
            <div className="text-blue-600 text-3xl mb-4">
              {item.icon}
            </div>

            <h3 className="text-lg font-semibold">
              {item.title}
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}