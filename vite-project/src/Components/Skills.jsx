import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMongodb,
  SiFigma,
  SiPython,
  SiExpress,
} from 'react-icons/si';
import { DiJava } from 'react-icons/di'; // ✅ Correct Java icon

const Skills = () => {
  return (
    <section className="py-10 bg-black" id="Skills">
      <div className="max-w-4xl mx-auto text-center mt-6">
        <h2 className="text-4xl font-bold mb-6 text-white">My Skills</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mt-4 mb-12"></div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-lg grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center py-5">

          <Skill icon={<FaHtml5 className="text-orange-600 text-3xl" />} label="HTML" />
          <Skill icon={<FaCss3Alt className="text-blue-600 text-3xl" />} label="CSS" />
          <Skill icon={<FaJs className="text-yellow-400 text-3xl" />} label="Javascript" />
          <Skill icon={<FaReact className="text-cyan-400 text-3xl" />} label="React" />
          <Skill icon={<SiTailwindcss className="text-sky-400 text-3xl" />} label="Tailwind" />
          <Skill icon={<FaNodeJs className="text-green-600 text-3xl" />} label="NodeJS" />
          <Skill icon={<SiMongodb className="text-green-700 text-3xl" />} label="MongoDB" />
          <Skill icon={<SiExpress className="text-gray-400 text-3xl" />} label="Express" />
          <Skill icon={<DiJava className="text-red-600 text-3xl" />} label="Java" />
          <Skill icon={<FaGithub className="text-white text-3xl" />} label="Github" />
          <Skill icon={<SiFigma className="text-pink-500 text-3xl" />} label="Figma" />
          <Skill icon={<SiPython className="text-blue-500 text-3xl" />} label="Python" />

        </div>
      </div>
    </section>
  );
};

const Skill = ({ icon, label }) => (
  <div className="flex flex-col items-center">
    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 shadow-md hover:scale-110 transition">
      {icon}
    </div>
    <p className="text-white mt-2 font-thin">{label}</p>
  </div>
);

export default Skills;
