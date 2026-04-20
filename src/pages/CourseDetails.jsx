import React from "react";
import { useParams } from "react-router-dom";
import { courses } from "../data/courses";

export default function CourseDetails() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === Number(id));

  if (!course) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-semibold">Course not found</h1>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 min-h-screen">

      {/* 🔥 HERO SECTION */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-white px-6 md:px-16 py-16">
        <div className="max-w-5xl mx-auto">

          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            {course.title}
          </h1>

          <p className="mt-4 text-blue-100 max-w-2xl">
            {course.description ||
              "Master industry-relevant skills with hands-on projects and expert mentorship."}
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">
              Duration: {course.duration}
            </span>
            <span className="bg-white/20 px-3 py-1 rounded">
              Level: Beginner to Advanced
            </span>
            <span className="bg-white/20 px-3 py-1 rounded">
              Mode: Online
            </span>
          </div>

          <button className="mt-8 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold">
            Apply Now
          </button>
        </div>
      </div>

      {/* 📦 MAIN CONTENT */}
      <div className="px-6 md:px-16 py-16 max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* LEFT CONTENT */}
        <div className="md:col-span-2">

          {/* IMAGE */}
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-64 md:h-80 object-cover rounded-xl shadow"
          />

          {/* ABOUT */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold">About this program</h2>

            <p className="text-gray-600 mt-4">
              This program is designed to help you build real-world skills with
              hands-on learning, live sessions, and expert mentorship.
            </p>
          </div>

          {/* FEATURES */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold">What you will get</h2>

            <ul className="mt-4 space-y-3 text-gray-600">
              <li>✔ Live classes & recorded sessions</li>
              <li>✔ Real-world projects</li>
              <li>✔ Resume & interview preparation</li>
              <li>✔ Placement assistance</li>
            </ul>
          </div>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="bg-white p-6 rounded-xl shadow h-fit">

          <h3 className="text-xl font-semibold">Course Highlights</h3>

          <div className="mt-4 space-y-3 text-sm text-gray-600">
            <p>📅 Duration: {course.duration}</p>
            <p>🎓 Certification Included</p>
            <p>👨‍🏫 Expert Mentors</p>
            <p>💼 Placement Support</p>
          </div>

          <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg">
            Enroll Now
          </button>

          <button className="mt-3 w-full border py-3 rounded-lg">
            Download Brochure
          </button>
        </div>

      </div>
    </section>
  );
}