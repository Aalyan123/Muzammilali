import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Initial Consultation",
    desc: "We'll start with a detailed discussion about your project goals, target audience, timeline, and budget.",
    icon: "💬",
    gradient: "from-emerald-400 to-teal-600"
  },
  {
    id: "02",
    title: "Proposal & Agreement",
    desc: "I'll provide a detailed project proposal outlining scope, timeline, deliverables, and investment.",
    icon: "📋",
    gradient: "from-blue-400 to-indigo-600"
  },
  {
    id: "03",
    title: "Discovery & Research",
    desc: "I'll dive deep into understanding your brand, audience, and competitive landscape.",
    icon: "🔍",
    gradient: "from-purple-400 to-pink-600"
  },
  {
    id: "04",
    title: "Design Development",
    desc: "I'll create initial design concepts for your review and feedback, then refine the chosen direction.",
    icon: "🎨",
    gradient: "from-orange-400 to-red-600"
  },
  {
    id: "05",
    title: "Final Delivery",
    desc: "You'll receive all final files in the formats you need, along with necessary documentation.",
    icon: "🚀",
    gradient: "from-cyan-400 to-blue-600"
  },
  {
    id: "06",
    title: "Ongoing Support",
    desc: "I'm available for questions, minor revisions, and future projects as your business grows.",
    icon: "🤝",
    gradient: "from-violet-400 to-purple-600"
  },
];

const Expect = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-24 px-6 lg:px-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-pink-200/30 to-orange-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-emerald-200/30 to-teal-200/30 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-16">
          <h2
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4"
            style={{ fontFamily: "Poppins" }}
          >
            What to Expect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "Outfit" }}
          >
            A transparent, collaborative process designed to deliver exceptional
            results that exceed your expectations
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 1 : -1 }}
            className={`group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 text-left relative overflow-hidden border border-white/50 hover:border-white/80 hover:-translate-y-2`}
          >
            {/* Animated background gradient on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
            
            {/* Glowing border effect */}
            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>

            <div className="relative z-10">
              {/* Icon */}
              <div className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 bg-gradient-to-br ${step.gradient} text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}>
                <span className="text-3xl">
                  {step.icon}
                </span>
              </div>

              {/* Number badge in corner */}
              <div className="absolute top-4 right-6 text-6xl font-black text-gray-100 group-hover:text-gray-50 transition-colors duration-300 select-none">
                {step.id}
              </div>

              {/* Content */}
              <h3
                className="text-2xl font-bold text-gray-900 mt-4 mb-4 group-hover:text-gray-800 transition-colors duration-300"
                style={{ fontFamily: "Poppins" }}
              >
                {step.title}
              </h3>
              <p 
                className="text-gray-600 group-hover:text-gray-700 leading-relaxed text-lg transition-colors duration-300" 
                style={{ fontFamily: "Outfit" }}
              >
                {step.desc}
              </p>
            </div>

            {/* Animated dots */}
            <div className="absolute bottom-6 right-6 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.gradient} animate-pulse`}></div>
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.gradient} animate-pulse`} style={{animationDelay: '0.2s'}}></div>
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.gradient} animate-pulse`} style={{animationDelay: '0.4s'}}></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Expect;