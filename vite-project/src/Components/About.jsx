import React from 'react'
import MyImage from '../assets/MyImage.png'


const About = () => {
  return (
    <div id='About-Me' className='bg-black text-white py-20'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
        <img src = {MyImage} alt='' className='w-72 h-80 rounded object-cover mb-8 md:mb-0'/>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Quod, rem! Vel ea porro tempore perferendis fugit corporis est veritatis dicta et perspiciatis voluptates illum eligendi
            numquam architecto, consequuntur doloremque neque.
        </p>
        </div>
      </div>
    </div>
  )
}

export default About
