import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 backdrop-blur-lg bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex items-center justify-between'>
        
        {/* Name and Social Icons Group */}
        <div className='flex items-center space-x-4'>
          <div className='text-2xl font-bold'>Priyansh</div>
          <div className='hidden md:flex space-x-2'>
            <a href="https://www.linkedin.com/in/priyansh-singh-9607102a8/" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-blue-400 transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Priyanshsingh1391" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-gray-400 transition-colors">
              <FaGithub />
            </a>
          </div>
        </div>
        
        {/* Navigation Links */}
        <div className='hidden md:flex space-x-6'>
          <a href='#Home' className='hover:text-gray-400'>Home</a>
          <a href='#About-Me' className='hover:text-gray-400'>About Me</a>
          <a href='#Skills' className='hover:text-gray-400'>Skills</a>
          <a href='#Projects' className='hover:text-gray-400'>Projects</a>
          <a href='#Contact' className='hover:text-gray-400'>Contact</a>
        </div>

        {/* Connect Me Button - Aligned to the far right on medium screens and up */}
        <button 
          onClick={() => {
            const element = document.getElementById('Contact');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          Connect Me
        </button>

        {/* Hamburger menu or mobile navigation links could go here */}
      </div>
    </nav>
  );
};

export default Navbar;