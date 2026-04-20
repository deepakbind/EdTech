import React from "react";

export default function Hero() {
  return (
    <section className="w-full px-8 md:px-16 py-16 grid md:grid-cols-2 items-center gap-10 bg-gray-50">
      
      {/* LEFT CONTENT */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
          Upskill for the Future <br />
          with{" "}
          <span className="text-blue-600">
            Industry-Ready
          </span>{" "}
          Courses
        </h1>

        <p className="mt-5 text-gray-600 max-w-lg">
          Learn Data Science, AI, and Development with expert mentors.
          Build real projects, gain industry skills, and become job-ready.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
            Apply Now
          </button>
          <button className="border px-6 py-3 rounded-lg text-gray-700 hover:bg-gray-100">
            Download Syllabus
          </button>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-3 mt-6">
          <div className="flex -space-x-2">
            <img src="https://i.pravatar.cc/40?img=1" className="w-8 h-8 rounded-full border-2 border-white"/>
            <img src="https://i.pravatar.cc/40?img=2" className="w-8 h-8 rounded-full border-2 border-white"/>
            <img src="https://i.pravatar.cc/40?img=3" className="w-8 h-8 rounded-full border-2 border-white"/>
          </div>
          <span className="text-sm text-gray-600">⭐ 4.9 (1k+ reviews)</span>
        </div>
      </div>

      {/* RIGHT IMAGE + FLOATING CARDS */}
      <div className="relative flex justify-center">
        
        {/* Main Image */}
        <img
          src="https://i.pravatar.cc/400"
          alt="student"
          className="w-80 md:w-96 rounded-xl"
        />

        {/* Floating Card 1 */}
        <div className="absolute top-10 left-0 bg-white shadow-lg px-4 py-2 rounded-lg text-sm">
          🎥 Live Interactive Classes
        </div>

        {/* Floating Card 2 */}
        <div className="absolute bottom-10 right-0 bg-white shadow-lg px-4 py-2 rounded-lg text-sm">
          🏆 Recognized Learning Platform
        </div>

        {/* Floating Card 3 */}
        <div className="absolute top-1/2 right-[-20px] bg-white shadow-lg px-4 py-2 rounded-lg text-sm">
          👥 1000+ Learners
        </div>

        {/* Shapes */}
        <div className="absolute -z-10 w-32 h-32 bg-blue-100 rounded-full top-0 right-10"></div>
        <div className="absolute -z-10 w-20 h-20 bg-yellow-400 rotate-45 bottom-0 left-10"></div>
      </div>
    </section>
  );
}