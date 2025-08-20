import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub} from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Priyansh Singh</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "About-Me" },
            { name: "Skills", id: "Skills" },
            { name: "Contact", id: "Contact" },
            { name: "Projects", id: "Projects" },
            
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/priyansh.singh.102" },
            { icon: <FaGithub />, link: "https://github.com/Priyanshsingh1391" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/priyansh-singh-9607102a8/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/_priyanshsingh/" },
         
            
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Priyansh Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;