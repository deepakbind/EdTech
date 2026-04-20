import React from "react";
import { useNavigate } from "react-router-dom";

export default function Courses() {
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: "Data Science Learning Program",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
      duration: "6 Months",
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
      duration: "7 Months",
    },
    {
      id: 3,
      title: "AI & Machine Learning",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      duration: "8 Months",
    },
    {
      id: 4,
      title: "Data & BI",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      duration: "5 Months",
    },
    {
      id: 5,
      title: "Cloud Computing & DevOps",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      duration: "7 Months",
    },
    {
      id: 6,
      title: "Cybersecurity & Ethical Hacking",
      image:
        "https://images.unsplash.com/photo-1510511459019-5dda7724fd87",
      duration: "6 Months",
    },
  ];

  return (
    <section className="px-6 md:px-16 py-16 bg-gray-50">
      
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">
          <span className="text-blue-600">Learning Paths</span> for Every Goal
        </h2>
        <p className="text-gray-500 mt-2">
          Whether you're a student, professional, or lifelong learner
        </p>
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            {/* IMAGE */}
            <img
              src={`${course.image}?auto=format&fit=crop&w=800&q=80`}
              alt={course.title}
              className="w-full h-44 object-cover"
            />

            {/* CONTENT */}
            <div className="p-5">
              <h3 className="font-semibold text-lg">
                {course.title}
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Duration: {course.duration}
              </p>

              {/* BUTTONS */}
              <div className="mt-5 space-y-2">
                <button
                  onClick={() => navigate(`/course/${course.id}`)}
                  className="w-full border border-gray-300 py-2 rounded hover:bg-gray-100"
                >
                  Explore Program
                </button>

                <a
                  href="/brochure.pdf"
                  download
                  className="block text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                  Download Brochure
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}