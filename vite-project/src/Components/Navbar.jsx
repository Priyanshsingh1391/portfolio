import React from 'react'

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 background-blur-lg bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex md:justify-between items-center'>
        <div className='text-2xl font-bold hidden md:inline'>Priyansh</div>
        <div className='space-x-6'>
            <a href='#Home' className='hover:text-gray-400'>Home</a>
            <a href='#About-Me'className='hover:text-gray-400'>About Me</a>
            <a href='#Skills'className='hover:text-gray-400'>Skills</a>
            <a href='#Projects'className='hover:text-gray-400'>Projects</a>
            <a href='#Contact'className='hover:text-gray-400'>Contact</a>
        </div>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect Me</button>
      </div>
    </nav>
  )
}

export default Navbar
