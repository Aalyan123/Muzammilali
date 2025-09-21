import React from "react";
import { Mail, Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { FaBehance } from "react-icons/fa"; 

const ContactInfo = () => {
  // Function to open Gmail compose with pre-filled recipient
  const handleEmailClick = () => {
    const email = "contact@muzammilali.site";
    const subject = "Let's Connect";
    const body = "Hi Muzammil,\n\nI’d like to get in touch with you...";
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank");
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-20 px-6 md:px-12 lg:px-20 flex items-center justify-center">
      <div className="max-w-4xl mx-auto">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4"
            style={{ fontFamily: "Poppins" }}
          >
            Let's Connect
          </h1>
          <p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "Outfit" }}
          >
            Ready to bring your vision to life? Get in touch and let's create
            something amazing together.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -10, scale: 1.05 }}
            className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white/50 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 cursor-pointer"
            onClick={handleEmailClick}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-500 group-hover:rotate-6">
                <Mail className="text-blue-600 w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h3
                  className="text-lg font-bold text-gray-800 mb-2"
                  style={{ fontFamily: "Poppins" }}
                >
                  Email Me
                </h3>
                <p
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  style={{ fontFamily: "Outfit" }}
                >
                  contact@muzammilali.site
                </p>
              </div>
            </div>
          </motion.div>

          {/* Phone / WhatsApp Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10, scale: 1.05 }}
            className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white/50 hover:shadow-2xl hover:border-green-200 transition-all duration-500 cursor-pointer"
          >
            <a
              href="https://wa.me/message/LXBCVIMNFETKH1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="p-4 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl group-hover:from-green-200 group-hover:to-green-300 transition-all duration-500 group-hover:rotate-6">
                <Phone className="text-green-600 w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h3
                  className="text-lg font-bold text-gray-800 mb-2"
                  style={{ fontFamily: "Poppins" }}
                >
                  WhatsApp
                </h3>
                <p
                  className="text-gray-600 hover:text-green-600 transition-colors duration-300"
                  style={{ fontFamily: "Outfit" }}
                >
                  +92 3458038415
                </p>
                <p
                  className="text-sm text-gray-600 mt-1"
                  style={{ fontFamily: "Outfit" }}
                >
                  (WhatsApp for Faster response)
                </p>
              </div>
            </a>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -10, scale: 1.05 }}
            className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white/50 hover:shadow-2xl hover:border-purple-200 transition-all duration-500 cursor-pointer md:col-span-2 lg:col-span-1"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-500 group-hover:rotate-6">
                <MapPin className="text-purple-600 w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h3
                  className="text-lg font-bold text-gray-800 mb-2"
                  style={{ fontFamily: "Poppins" }}
                >
                  Location
                </h3>
                <p
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
                  style={{ fontFamily: "Outfit" }}
                >
                  Pakistan
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Business Hours & Response Time */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white/50 hover:shadow-xl hover:border-orange-200 transition-all duration-500"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-500">
                <Clock className="text-orange-600 w-6 h-6" />
              </div>
              <h3
                className="text-xl font-bold text-gray-800"
                style={{ fontFamily: "Poppins" }}
              >
                Business Hours
              </h3>
            </div>
            <div className="space-y-2 ml-14" style={{ fontFamily: "Outfit" }}>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                Mon - Sat: 5:00 PM to 11:30 PM (GST)
              </p>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                Sunday: Closed
              </p>
            </div>
          </motion.div>

          {/* Response Time */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white/50 hover:shadow-xl hover:border-blue-200 transition-all duration-500"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-500">
                <Clock className="text-blue-600 w-6 h-6" />
              </div>
              <h3
                className="text-xl font-bold text-gray-800"
                style={{ fontFamily: "Poppins" }}
              >
                Quick Response
              </h3>
            </div>
            <p
              className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 ml-14"
              style={{ fontFamily: "Outfit" }}
            >
              Response within 24 hours <br />
              (WhatsApp for Faster response)
            </p>
          </motion.div>
        </div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-500"
        >
          <h3
            className="text-2xl font-bold text-gray-800 text-center mb-8"
            style={{ fontFamily: "Poppins" }}
          >
            Connect Online
          </h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            {/* Facebook */}
            <motion.a
              href="https://www.facebook.com/GraphixGoo"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center space-x-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              <span
                className="font-semibold"
                style={{ fontFamily: "Outfit" }}
              >
                Facebook
              </span>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/GraphixGoo"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center space-x-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              <span
                className="font-semibold"
                style={{ fontFamily: "Outfit" }}
              >
                Instagram
              </span>
            </motion.a>

            {/* Behance */}
            <motion.a
              href="https://www.behance.net/muzammilali46"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center space-x-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <FaBehance className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              <span
                className="font-semibold"
                style={{ fontFamily: "Outfit" }}
              >
                Behance
              </span>
            </motion.a>
          </div>
          <div className="text-center mt-6 space-y-2" style={{ fontFamily: "Outfit" }}>
            <p className="text-gray-500 text-sm">
              Follow for professional updates and behind-the-scenes content
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
