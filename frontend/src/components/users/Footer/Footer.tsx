import React from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react"; // Social media icons

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-600 to-green-500 text-white py-6 border-t border-green-400/50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        {/* Copyright */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Foundation. All rights reserved.
        </p>

        {/* Social Icons (Optional) */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-200 transition">
            <Facebook size={20} />
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            <Twitter size={20} />
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
