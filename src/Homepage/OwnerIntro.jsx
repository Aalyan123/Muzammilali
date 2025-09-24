import React, { useEffect, useRef, useState } from "react";

const stats = [
  { id: 1, value: "25+", label: "Projects Completed" },
  { id: 2, value: "96%", label: "Client Satisfaction" },
  { id: 3, value: "1.5+", label: "Years Experience" },
  { id: 4, value: "8+", label: "Happy Clients" },
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
      className="w-full bg-gradient-to-b from-white to-gray-100 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-gray-800"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="about-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-2"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          About Me
        </h2>

        <p
          className="text-center text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 lg:mb-10"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          Graphic Designer creating impactful visuals that help brands stand out.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Left text */}
          <div
            className={`transform transition-all duration-700 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "0.35s" }}
          >
            <p
              className="text-base sm:text-lg lg:text-xl leading-relaxed text-left"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              I help brands and businesses go from concept to polished visuals without
              the stress. From logos and social media posts to ad creatives and product
              designs, I make sure everything is consistent, engaging, and tailored to
              your audience. I focus on practical design solutions, quick turnarounds,
              and yes — a good cup of chai + music keeps me going while I work.
            </p>
          </div>

          {/* Stats */}
          <div
            className={`transform transition-all duration-700 ease-out ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
            style={{ transitionDelay: "0.55s" }}
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {stats.map((s) => (
                <div
                  key={s.id}
                  className="relative overflow-hidden rounded-2xl p-4 sm:p-5 shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-transparent flex items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100"
                >
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-none text-gray-900">
                      {s.value}
                    </span>
                    <span className="mt-1 sm:mt-2 text-xs sm:text-sm lg:text-base text-gray-600 break-words">
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