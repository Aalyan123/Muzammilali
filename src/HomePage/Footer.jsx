import React from 'react';
import { Mail, Phone, Linkedin, Instagram, Heart, Copyright, Facebook } from 'lucide-react';
import {Link} from "react-router-dom"

// Main Footer component replicating the design from the provided image.
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-8 lg:px-12 font-sans">
      <div className="container mx-auto">
        
        {/* Top Section: Four Columns */}
        <div className="flex flex-col lg:flex-row lg:justify-between space-y-10 lg:space-y-0 lg:space-x-12 pb-12">
          
          {/* Column 1: Alex Chen Info */}
          <div className="flex flex-col space-y-6 lg:w-1/4">
            <div className="flex items-center space-x-3">
              {/* Logo Placeholder */}
              
              <h2 className="text-2xl font-bold text-white">Muzammil  Ali</h2>
            </div>
            <p className="text-sm leading-relaxed">
              Professional graphic designer creating stunning visual solutions that captivate audiences and drive results. Let's bring your vision to life.
            </p>
            <div className="flex space-x-4">
              
               <a href="https://www.facebook.com/GraphixGoo" target='blank' aria-label="LinkedIn" className="p-3 border border-slate-700 rounded-full hover:bg-slate-800 transition-colors">
                <Facebook className="w-5 h-5 text-slate-400 hover:text-blue-600 hover:scale-110" />
              </a>
              <a href="https://www.instagram.com/GraphixGoo" target='blank' aria-label="Instagram" className="p-3 border border-slate-700 rounded-full hover:bg-slate-800 transition-colors">
                <Instagram className="w-5 h-5 text-slate-400 hover:text-pink-400 hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col space-y-4 lg:w-1/6">
            <h3 className="text-xl font-bold text-white mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to='/' ><a  className="hover:text-white transition-colors">Home</a>     </Link>   </li>
              <li><Link to='/about'><a  className="hover:text-white transition-colors">About</a>    </Link> </li>
              <li><Link to='/services'><a  className="hover:text-white transition-colors">Services</a> </Link>   </li>
              <li><Link to='/portfolio'><a  className="hover:text-white transition-colors">Portfollio</a>   </Link>  </li>
              <li><Link to='/contact'><a  className="hover:text-white transition-colors">Contact</a>  </Link>  </li>
            </ul>
          </div>
          
          {/* Column 3: Services */}
          <div className="flex flex-col space-y-4 lg:w-1/4">
            <h3 className="text-xl font-bold text-white mb-2">Services</h3>
            <ul className="space-y-2">
              <li><p className="hover:text-white transition-colors">Brand Identity Design</p></li>
              <li><p className="hover:text-white transition-colors">Web Design</p></li>
              <li><p className="hover:text-white transition-colors">Social Media Design</p></li>
              <li><p className="hover:text-white transition-colors">Print Materials</p></li>
              <li><p className="hover:text-white transition-colors">Product Design</p></li>
              <li><p className="hover:text-white transition-colors">Consultation</p></li>
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div className="flex flex-col space-y-4 lg:w-1/4">
            <h3 className="text-xl font-bold text-white mb-2">Get In Touch</h3>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-slate-400" />
              <a href="mailto:contact@muzammilali.site" className="hover:text-white transition-colors">contact@muzammilali.site</a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-slate-400" />
              <a href="https://wa.me/message/LXBCVIMNFETKH1" target='blank' className="hover:text-white transition-colors">+92 3458038415</a>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold text-white text-sm">Business Hours:</h4>
              <p className="text-sm mt-1">Mon-Saturday : 6 PM to 11:30 PM GST</p>
            </div>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row md:justify-between items-center text-sm text-slate-500 space-y-2 md:space-y-0">
          <p className="flex items-center space-x-2">
            <Copyright className="w-4 h-4" />
            <span>2025 Muzammil Ali Design. All rights reserved.</span>
          </p>
          <p className="flex items-center space-x-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>by</span>
            <a href='https://www.linkedin.com/in/aalyan-kashif-11bb93377/' target='blank'>
            <span className='text-white'> Aalyan Kashif</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
