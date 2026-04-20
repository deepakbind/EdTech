import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white px-6 md:px-16 py-12">

      <div className="grid md:grid-cols-3 gap-10">

        {/* LEFT */}
        <div>
          <h2 className="text-xl font-bold">INTERVIEW PREP EDU</h2>

          <p className="text-blue-200 mt-4 text-sm">
            Helping ambitious learners upskill themselves & shift to top product-based companies.
          </p>

          {/* Social */}
          <div className="flex gap-3 mt-6">
            <div className="w-8 h-8 bg-white/20 flex items-center justify-center rounded">
              in
            </div>
            <div className="w-8 h-8 bg-white/20 flex items-center justify-center rounded">
              ▶
            </div>
            <div className="w-8 h-8 bg-white/20 flex items-center justify-center rounded">
              ⧉
            </div>
            <div className="w-8 h-8 bg-white/20 flex items-center justify-center rounded">
              🔍
            </div>
          </div>
        </div>

        {/* MIDDLE */}
        <div>
          <h3 className="font-semibold mb-4">Who are we</h3>
          <ul className="space-y-2 text-sm text-blue-200">
            <li>About us</li>
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
            <li>Pricing and Refund Policy</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm text-blue-200">
            <li>Email: support@interviewprep.com</li>
            <li>
              E-401, Dwaraka Tower, Noida Sector 75, India 201301
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-blue-700 mt-10 pt-4 text-center text-sm text-blue-300">
        Copyright 2025 InterviewPrep Edu Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}