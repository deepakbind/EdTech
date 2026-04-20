export default function About() {
  return (
    <section className="px-6 md:px-16 py-16 bg-gray-50 min-h-screen">

      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          About <span className="text-blue-600">InterviewPrep Edu</span>
        </h1>

        <p className="mt-6 text-gray-600">
          We are dedicated to helping learners upskill and transition into top
          product-based companies through structured programs, mentorship, and
          real-world projects.
        </p>
      </div>

      {/* FEATURES */}
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="font-semibold text-lg">Expert Mentors</h3>
          <p className="text-gray-500 mt-2 text-sm">
            Learn directly from industry professionals.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="font-semibold text-lg">Real Projects</h3>
          <p className="text-gray-500 mt-2 text-sm">
            Work on real-world projects to gain experience.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="font-semibold text-lg">Placement Support</h3>
          <p className="text-gray-500 mt-2 text-sm">
            Get job-ready with interview preparation.
          </p>
        </div>
      </div>

    </section>
  );
}