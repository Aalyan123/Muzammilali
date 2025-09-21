import React, { useState } from 'react';

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How soon can I expect a reply?",
      answer: "I usually reply within <strong>24 hours</strong>. If it's urgent, use <strong>WhatsApp for a faster response</strong>."
    },
    {
      question: "What if I just want to ask a question, not start a project yet?",
      answer: "That's completely fine. I'm happy to <strong>answer questions and share advice—no strings attached</strong>."
    },
    {
      question: "What kind of projects do you usually work on?",
      answer: "I specialize in <strong>graphic design, product design, posters, banner ads, and creative visuals with an AI touch</strong>. If your project fits these areas, or others, feel free to reach out."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes. I offer a <strong>quick discussion (by email or chat) to understand your needs</strong> before we start. This helps both of us see if it's a good fit."
    },
    {
      question: "There are many designers out there. Why should I choose you?",
      answer: "I don't just design visuals—I <strong>design with purpose</strong>. Every project is tailored to <strong>increase engagement, boost brand identity, and create a real impact</strong>. My clients often see <strong>up to 20% improvement in engagement</strong> after using my designs."
    },
    {
      question: "What makes your design style different from others?",
      answer: "I mix <strong>creativity with strategy</strong>. My designs are not only eye-catching but also <strong>conversion-focused</strong>—whether it's a poster, banner ad, or product design. And with my <strong>AI touch</strong>, I can bring fresh, innovative ideas that stand out."
    },
    {
      question: "Will I get something unique, or just a template-style design?",
      answer: "You'll always get <strong>original, customized work</strong>. I don't rely on generic templates. Every design is crafted to <strong>match your brand's tone, colors, and goals</strong>, making it unique and memorable."
    },
    {
      question: "Can you handle urgent or last-minute projects?",
      answer: "Yes. If you're on a tight deadline, I can <strong>adjust and deliver high-quality work quickly</strong> without compromising design standards."
    },
    {
      question: "Do you give suggestions if my idea can be improved?",
      answer: "Definitely. I'm here to <strong>make your project stronger</strong>. If I see a way to make your idea more effective, I'll share it—while always respecting your vision."
    },
    {
      question: "Will I get value for my investment?",
      answer: "Yes. My designs aren't just attractive; they're made to <strong>deliver results</strong>—whether that's more engagement, stronger branding, or better visibility for your business."
    }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8" style={{ fontFamily: "Poppins" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-xl mt-4 max-w-2xl mx-auto">
            Common questions about my design services
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl shadow-md transition-all duration-300 overflow-hidden ${
                activeIndex === index 
                  ? 'ring-2 ring-blue-500 shadow-lg' 
                  : 'hover:shadow-lg hover:-translate-y-1'
              }`}
            >
              <button
                className="w-full px-6 py-5 text-left focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <span className="ml-2 flex-shrink-0">
                    {activeIndex === index ? (
                      <svg className="h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </span>
                </div>
              </button>
              
              <div 
                className={`px-6 pb-5 pt-0 transition-all duration-300 ${
                  activeIndex === index ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'
                }`}
              >
                <p 
                  className="text-gray-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default Faqs;