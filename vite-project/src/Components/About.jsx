import React from 'react'
import MyImage from '../assets/MyImage.png'


const About = () => {
  return (
    <div id='About-Me' className='bg-black text-white py-20'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center'>About Me</h2>
         <div className="w-36 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mt-4 mb-12"></div>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
        <img src = {MyImage} alt='' className='w-72 h-80 rounded object-cover mb-8 md:mb-0 shadow-xl hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300'/>
        <p className='text-gray-400 mt-4 text-lg font-semibold'>
          <p>class 10th - 95.4%</p>
          <p>class 12th - 93.6%</p>
          
          I am currently pursuing my Btech in computer science and engineering (2027)

          <p>Current GPA - 8.0</p>
          

        </p>

        </div>
      </div>
    </div>
  )
}

export default About
