import React from "react";

export default function Stats() {
  return (
    <section className="bg-blue-800 text-white py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-6">
        
        <div>
          <h2 className="text-2xl font-bold">80+</h2>
          <p className="text-sm text-gray-200">Transformative Courses</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">40K+</h2>
          <p className="text-sm text-gray-200">Learners Empowered</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">30K+</h2>
          <p className="text-sm text-gray-200">Lessons Completed</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">65+</h2>
          <p className="text-sm text-gray-200">Expert Mentors</p>
        </div>

      </div>
    </section>
  );
}