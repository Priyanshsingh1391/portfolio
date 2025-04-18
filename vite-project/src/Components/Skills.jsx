import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiFigma, SiPython } from 'react-icons/si';

const Skills = () => {
  return (
    <section className="py-10 bg-black" id="Skills">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">My Skills</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center py-5">

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 shadow-md hover:scale-110 transition">
              <FaHtml5 className="text-orange-600 text-3xl" />
            </div>
            <p className='text-white mt-2 font-thin'>HTML</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 shadow-md hover:scale-110 transition">
              <FaCss3Alt className="text-blue-600 text-3xl" />
            </div>
            <p className='text-white mt-2 font-thin'>CSS</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 shadow-md hover:scale-110 transition">
              <FaJs className="text-yellow-400 text-3xl" />
            </div>
            <p className='text-white mt-2 font-thin'>Javascript</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 shadow-md hover:scale-110 transition">
              <FaReact className="text-cyan-400 text-3xl" />
            </div>
            <p className='text-white mt-2 font-thin'>React</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 shadow-md hover:scale-110 transition">
              <SiTailwindcss className="text-sky-400 text-3xl" />
            </div>
            <p className='text-white mt-2 font-thin'>Tailwind</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 shadow-md hover:scale-110 transition">
              <FaNodeJs className="text-green-600 text-3xl" />
            </div>
            <p className='text-white mt-2 font-thin'>NodeJS</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 shadow-md hover:scale-110 transition">
              <SiMongodb className="text-green-700 text-3xl" />
            </div>
            <p className='text-white mt-2 font-thin'>MongoDB</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 shadow-md hover:scale-110 transition">
              <FaGithub className="text-white text-3xl" />
            </div>
            <p className='text-white mt-2 font-thin'>Github</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 shadow-md hover:scale-110 transition">
              <SiFigma className="text-pink-500 text-3xl" />
            </div>
            <p className='text-white mt-2 font-thin'>Figma</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 shadow-md hover:scale-110 transition">
              <SiPython className="text-blue-500 text-3xl" />
            </div>
            <p className='text-white mt-2 font-thin'>Python</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills;
