import React, { useEffect, useRef, useState } from "react";

const stats = [
  { id: 1, value: "25+", label: "Projects Completed", gradient: "from-indigo-50 via-white to-indigo-100", accent: "from-indigo-300 to-indigo-500" },
  { id: 2, value: "96%", label: "Client Satisfaction", gradient: "from-emerald-50 via-white to-emerald-100", accent: "from-emerald-300 to-emerald-500" },
  { id: 3, value: "1.5+", label: "Years Experience", gradient: "from-amber-50 via-white to-amber-100", accent: "from-amber-300 to-amber-500" },
  { id: 4, value: "8+", label: "Happy Clients", gradient: "from-pink-50 via-white to-pink-100", accent: "from-pink-300 to-pink-500" },
];

const OwnerIntro = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-gradient-to-b from-white to-gray-100 px-6 md:px-12 lg:px-24 py-12 text-gray-800"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto">
        <h2 id="about-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
          About Me
        </h2>

        <p className="text-center text-base md:text-xl text-gray-600 mb-10" style={{ fontFamily: "Outfit, sans-serif" }}>
          Graphic Designer creating impactful visuals that help brands stand out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left text: spans 2 cols on md+ and pushed left */}
          <div
            className={`md: col-span-2 transform transition-all duration-700 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} md:-ml-16`}
            style={{ transitionDelay: "0.35s" }}
          >
            <h3 className="text-2xl md:text-4xl font-semibold mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
              Meet Muzammil Ali
            </h3>

            <p className=" text-xl leading-relaxed mb-4 text-left" style={{ fontFamily: "Outfit, sans-serif" }}>
              I help brands and businesses go from concept to polished visuals without the stress.
              From logos and social media posts to ad creatives and product designs, I make sure
              everything is consistent, engaging, and tailored to your audience. I focus on
              practical design solutions, quick turnarounds, and yes — a good cup of chai + music
              keeps me going while I work.
            </p>

            <p className="text-xl leading-relaxed" style={{ fontFamily: "Outfit, sans-serif" }}>
              Outside design, I enjoy traveling, trying new flavors, and reflecting on the wonders
              of creation that inspire my creativity.
            </p>
          </div>

          {/* Stats: centered numbers with labels directly underneath */}
          <div
            className={`transform transition-all duration-700 ease-out ${isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
            style={{ transitionDelay: "0.55s" }}
          >
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              {stats.map((s) => (
                <div
                  key={s.id}
                  className="relative overflow-hidden rounded-2xl p-4 md:p-5 shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-transparent flex items-center justify-center"
                >
                  {/* subtle gradient background */}
                  <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${s.gradient} opacity-90`} aria-hidden="true" />
                  {/* soft accent blur */}
                  <div className={`absolute -right-6 -top-6 w-28 h-28 rounded-full blur-3xl ${s.accent} opacity-25`} aria-hidden="true" />

                  {/* Centered column: number on top, label right under it (same center line) */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <span className="text-3xl md:text-4xl font-extrabold leading-none text-gray-900">
                      {s.value}
                    </span>
                    <span className="mt-2 text-sm md:text-base text-gray-600 whitespace-nowrap">
                      {s.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnerIntro;
