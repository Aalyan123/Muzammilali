import React from "react";
import img from "../assets/philosophyimg.jpg";

const Designphilosophy = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-16 bg-[#F9FAFB] py-12">
      {/* Heading */}
      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center"
        style={{ fontFamily: "Poppins" }}
      >
        My Design{" "}
        <span
          className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          style={{ fontFamily: "Poppins" }}
        >
          Philosophy
        </span>
      </h2>
      <p
        className="text-center mt-3 text-base sm:text-lg lg:text-xl text-[#4c4d54]"
        style={{ fontFamily: "Outfit" }}
      >
        The principles that guide every design decision I make
      </p>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start mt-12 gap-10 md:gap-16">
        {/* Text Section */}
        <div className="max-w-lg">
          <h4
            className="font-bold text-xl sm:text-2xl"
            style={{ fontFamily: "Poppins" }}
          >
            Clarity
          </h4>
          <p
            className="mt-2 text-base sm:text-lg lg:text-xl text-[#4c4d54]"
            style={{ fontFamily: "Outfit" }}
          >
            Ensuring that the message is communicated clearly and efficiently.
            Whether it's a logo that instantly conveys a brand's personality or
            a website layout that guides users intuitively through their
            journey, clarity is paramount.
          </p>

          <h4
            className="mt-8 font-bold text-xl sm:text-2xl"
            style={{ fontFamily: "Poppins" }}
          >
            Impact
          </h4>
          <p
            className="mt-2 text-base sm:text-lg lg:text-xl text-[#4c4d54]"
            style={{ fontFamily: "Outfit" }}
          >
            The emotional and psychological effect of the design. Great design
            doesn't just inform – it inspires, motivates, and creates lasting
            impressions. I strive to create designs that not only catch the eye
            but also touch the heart and mind.
          </p>

          <h4
            className="mt-8 font-bold text-xl sm:text-2xl"
            style={{ fontFamily: "Poppins" }}
          >
            Authenticity
          </h4>
          <p
            className="mt-2 text-base sm:text-lg lg:text-xl text-[#4c4d54]"
            style={{ fontFamily: "Outfit" }}
          >
            Every design truly represents the client's unique identity and
            values. I don't believe in one-size-fits-all solutions. Instead, I
            take the time to understand each client's story, goals, and
            audience.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-xl shadow-md shadow-black"
            src={img}
            alt="Design philosophy"
          />
        </div>
      </div>
    </div>
  );
};

export default Designphilosophy;
