import React, { useRef, useState } from "react";
import { Mail, Phone, MapPin, Clock, Linkedin, Instagram, Send } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    emailjs
      .sendForm(
        'service_b2flm6b',        // Replace with your EmailJS Service ID
        'template_0h3kmwp',       // Replace with your EmailJS Template ID
        form.current,
        'YOUR_PUBLIC_KEY'         // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          console.log('SUCCESS!');
          setSubmitStatus('success');
          setIsSubmitting(false);
          form.current.reset(); // Reset form after successful submission
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSubmitStatus('error');
          setIsSubmitting(false);
        },
      );
  };

  return (
    <section className="py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 lg:col-span-2"
        >
          <h2
            className="text-3xl font-extrabold text-gray-800 mb-6"
            style={{ fontFamily: "Poppins" }}
          >
            Tell Me About Your Project
          </h2>

          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-100 border border-green-300 text-green-700 rounded-xl">
              Thank you! Your message has been sent successfully. I'll get back to you within 24 hours.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-100 border border-red-300 text-red-700 rounded-xl">
              Sorry, there was an error sending your message. Please try again or contact me directly.
            </div>
          )}

          <form ref={form} onSubmit={sendEmail} className="space-y-6" style={{fontFamily:"Poppins"}}>
            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="user_name"
                placeholder="Full Name *"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email Address *"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                required
              />
            </div>

            {/* Company + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="company"
                placeholder="Company / Organization"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>

            {/* Project Type + Budget */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <select 
                name="project_type"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                required
              >
                <option value="">Select project type *</option>
                <option value="Brand Identity Design">Brand Identity Design</option>
                <option value="Web Design">Web Design</option>
                <option value="Print Materials">Print Materials</option>
                <option value="Social Media Design">Social Media Design</option>
                <option value="Product Design">Product Design</option>
                <option value="Consultation">Consultation</option>
                <option value="Others">Others(Specify in Description)</option>
              </select>
              <select 
                name="budget"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                required
              >
                <option value="">Select budget range *</option>
                <option value="Under $1000">Under $1000</option>
                <option value="$1000 - $2500">$1000 - $2500</option>
                <option value="$2500 - $5000">$2500 - $5000</option>
                <option value="$5000 - $10000">$5000 - $10000</option>
                <option value="$10000+">$10000+</option>
                <option value="Not Sure yet">Not Sure yet</option>
              </select>
            </div>

            {/* Timeline */}
            <select 
              name="timeline"
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
            >
              <option value="">Select timeline</option>
              <option value="ASAP (Rush job)">ASAP (Rush job)</option>
              <option value="Within 2 Weeks">Within 2 Weeks</option>
              <option value="Within 1 Month">Within 1 Month</option>
              <option value="Within 2-3 Month">Within 2-3 Month</option>
              <option value="Flexible">Flexible</option>
            </select>

            {/* Description */}
            <textarea
              name="message"
              placeholder="Project Description *"
              rows="5"
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
              required
            ></textarea>

            {/* How did you hear */}
            <input
              type="text"
              name="referral"
              placeholder="How did you hear about me?"
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
            />

            {/* Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              className={`w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 shadow-md transition-opacity ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Sending...
                </>
              ) : (
                <>
                  Send My Project Details <Send size={18} />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Right Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Contact Info */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100" >
            <h3 className="text-lg font-bold text-gray-800 mb-4" style={{fontFamily:"Poppins"}}>Get In Touch Directly</h3>
            <ul className="space-y-4 text-gray-600" style={{fontFamily:"Outfit"}}>
              <li className="flex items-center gap-3">
                <Mail className="text-blue-600" /> contact@muzammilali.site
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-green-600" /> +92 3458038415
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="text-purple-600" /> Rahim Yar Khan
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-orange-600" /> Response within 24 hours
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Business Hours</h3>
            <p className="text-gray-600">Mon - Sat:  6 PM to 11:30 PM (GST)</p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>

          {/* Connect Online */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Connect Online</h3>
            <ul className="space-y-3 text-gray-600">
               <a href="https://www.facebook.com/GraphixGoo" target='blank' >
              <li className="flex items-center gap-3">
                <Linkedin className="text-blue-700" /> LinkedIn - Professional updates
              </li>
                </a>
                 <a href="https://www.instagram.com/GraphixGoo" target='blank' >
              <li className="flex items-center gap-3 mt-3">
                <Instagram className="text-pink-600" /> Instagram - Behind the scenes
              </li>
              </a>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;