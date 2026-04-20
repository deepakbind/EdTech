import React, { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "How does InterviewPrep Edu help?",
      answer:
        "It provides structured interview courses, mock tests, and personalized feedback to boost job readiness.",
    },
    {
      question: "Are courses suitable for beginners?",
      answer: "Yes, courses are designed for beginners to advanced learners.",
    },
    {
      question: "Do I get placement support?",
      answer: "Yes, we provide full placement support with mentorship.",
    },
    {
      question: "Can I learn at my pace?",
      answer: "Yes, all courses are self-paced with lifetime access.",
    },
    {
      question: "Are mentors industry professionals?",
      answer: "Yes, all mentors are working professionals.",
    },
    {
      question: "Do you provide certification?",
      answer: "Yes, you will get industry-recognized certificates.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="px-6 md:px-16 py-16 bg-white">
      <div className="grid md:grid-cols-2 gap-10 items-start">

        {/* LEFT SIDE */}
        <div>
          <p className="text-blue-600 text-sm font-semibold">
            QUESTIONS & ANSWERS
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-500 mt-4 max-w-md">
            We’ve answered the most common questions about our courses,
            placement support, and learning experience to help you get started.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b pb-3 cursor-pointer"
              onClick={() =>
                setOpenIndex(openIndex === i ? null : i)
              }
            >
              <div className="flex justify-between items-center">
                <h4 className="font-medium">{faq.question}</h4>
                <span className="text-xl">
                  {openIndex === i ? "×" : "+"}
                </span>
              </div>

              {openIndex === i && (
                <p className="text-gray-500 mt-2 text-sm">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}