import React from "react";

const steps = [
  {
    id: "01",
    title: "Initial Consultation",
    desc: "We'll start with a detailed discussion about your project goals, target audience, timeline, and budget.",
  },
  {
    id: "02",
    title: "Proposal & Agreement",
    desc: "I'll provide a detailed project proposal outlining scope, timeline, deliverables, and investment.",
  },
  {
    id: "03",
    title: "Discovery & Research",
    desc: "I'll dive deep into understanding your brand, audience, and competitive landscape.",
  },
  {
    id: "04",
    title: "Design Development",
    desc: "I'll create initial design concepts for your review and feedback, then refine the chosen direction.",
  },
  {
    id: "05",
    title: "Final Delivery",
    desc: "You'll receive all final files in the formats you need, along with necessary documentation.",
  },
  {
    id: "06",
    title: "Ongoing Support",
    desc: "I'm available for questions, minor revisions, and future projects as your business grows.",
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-4xl font-extrabold text-gray-800 mb-4"
          style={{ fontFamily: "Poppins" }}
        >
          What to Expect When Working With Me
        </h2>
        <p
          className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto"
          style={{ fontFamily: "Outfit" }}
        >
          A transparent, collaborative process designed to deliver exceptional
          results
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-left relative"
          >
            {/* Number badge */}
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm absolute -top-6 left-6 shadow-md">
              {step.id}
            </div>

            <h3
              className="text-xl font-bold text-gray-900 mt-8 mb-3"
              style={{ fontFamily: "Poppins" }}
            >
              {step.title}
            </h3>
            <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "Outfit" }}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
