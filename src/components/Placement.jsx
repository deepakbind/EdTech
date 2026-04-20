import React from "react";

export default function Placement() {
  return (
    <section className="px-6 md:px-16 py-16 bg-white">
      
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
            alt="placement"
            className="rounded-xl shadow-md"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Our Placement Support <br />
            Features We Build For You
          </h2>

          <p className="text-gray-500 mb-6">
            Interview Prep helps students achieve their dream jobs with personalized guidance,
            mock interviews, resume building, and exclusive placement assistance.
          </p>

          {/* Features */}
          <div className="space-y-5">

            <div className="flex gap-4">
              <div className="text-blue-600 text-xl">📘</div>
              <div>
                <h4 className="font-semibold">Career Mentorship 1:1</h4>
                <p className="text-sm text-gray-500">
                  Get direct mentorship sessions with industry experts.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-blue-600 text-xl">💻</div>
              <div>
                <h4 className="font-semibold">Mock Interviews</h4>
                <p className="text-sm text-gray-500">
                  Practice real interview scenarios with feedback.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-blue-600 text-xl">📄</div>
              <div>
                <h4 className="font-semibold">Resume Building</h4>
                <p className="text-sm text-gray-500">
                  Build industry-ready resumes that stand out.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}