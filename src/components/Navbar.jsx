import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);

  const navigate = useNavigate();

  const programs = [
    "Data Science Learning Program",
    "Full Stack Web Development",
    "AI & Machine Learning",
    "Data & BI",
    "Cloud Computing & DevOps",
    "Cybersecurity & Ethical Hacking",
  ];

  return (
    <nav className="bg-white shadow-md px-6 md:px-16 py-4 relative z-50">
      <div className="flex justify-between items-center">
        
        {/* LOGO */}
        <h1
          className="text-xl font-bold text-blue-600 cursor-pointer"
          onClick={() => navigate("/")}
        >
          InterviewPrep Edu
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 items-center font-medium">

          <li>
            <Link to="/" className="hover:text-blue-600">Home</Link>
          </li>

          {/* PROGRAMS */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setProgramOpen(true)}
            onMouseLeave={() => setProgramOpen(false)}
          >
            <span onClick={() => navigate("/programs")}>
              Programs ▾
            </span>

            {programOpen && (
              <div className="absolute left-0 top-8 w-[600px] bg-white shadow-xl rounded-xl p-6 grid grid-cols-2 gap-4">
                {programs.map((item, i) => (
                  <Link
                    key={i}
                    to={`/course/${i + 1}`}
                    className="p-3 rounded-lg hover:bg-gray-100 text-sm"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </li>

          <li>
            <Link to="/about" className="hover:text-blue-600">
              About Us
            </Link>
          </li>

          <li>
            <Link to="/alumni" className="hover:text-blue-600">
              Alumni
            </Link>
          </li>
        </ul>

        {/* CONTACT BUTTON */}
        <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded">
          Contact Us
        </button>

        {/* MOBILE MENU BUTTON */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-white border rounded-lg shadow p-4 space-y-4">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block"
          >
            Home
          </Link>

          {/* PROGRAMS MOBILE */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setProgramOpen(!programOpen)}
            >
              <span>Programs</span>
              <span>{programOpen ? "−" : "+"}</span>
            </div>

            {programOpen && (
              <div className="mt-2 ml-3 space-y-2">
                {programs.map((item, i) => (
                  <Link
                    key={i}
                    to={`/course/${i + 1}`}
                    onClick={() => setMenuOpen(false)}
                    className="block text-sm text-gray-600"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="block"
          >
            About Us
          </Link>

          <Link
            to="/alumni"
            onClick={() => setMenuOpen(false)}
            className="block"
          >
            Alumni
          </Link>

          <button className="w-full bg-blue-600 text-white py-2 rounded">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}