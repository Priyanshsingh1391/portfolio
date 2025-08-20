import React from 'react';
import MyImage from '../assets/MyImage.png';
import ReactTypingEffect from 'react-typing-effect';
import Particles from 'react-tsparticles';
import { loadStarsPreset } from 'tsparticles-preset-stars';

const Hero = () => {
  const particlesInit = async (engine) => {
    // Load the "stars" preset into the engine
    await loadStarsPreset(engine);
    await engine.loadPreset('stars');
  };

  return (
    <div
      id="Home"
      className="relative bg-black text-white text-center py-20 min-h-screen overflow-hidden"
    >
      {/* Stars Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          preset: 'stars',
          background: {
            color: { value: '#000000' },
          },
          fullScreen: { enable: false },
        }}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      {/* Content */}
      <img
        src={MyImage}
        alt="Priyansh"
        className="mx-auto mb-6 w-44 h-44 rounded-full object-cover border-4 border-white shadow-xl hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
      />
      <h1 className="text-4xl sm:text-5xl font-bold relative z-10">
        I'm{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Priyansh Singh
        </span>
        <br />
        <ReactTypingEffect
          text={['Fullstack Developer', 'Coder']}
          speed={100}
          eraseSpeed={50}
          typingDelay={500}
          eraseDelay={2000}
          cursorRenderer={(cursor) => (
            <span className="text-[#8245ec]">{cursor}</span>
          )}
        />
      </h1>
      <p className="mt-4 text-lg text-gray-400 font-semibold">
        I specialise in building modern and responsive web applications.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4 relative z-10">
        <button
          onClick={() => {
            const element = document.getElementById('Contact');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold px-6 py-2 rounded-full transition-transform hover:scale-105"
        >
          Contact Me
        </button>
        <button
          onClick={() =>
            window.open(
              'https://drive.google.com/file/d/1-FZW4l9uoYhoS3gKXaQavb50bea4UPpz/view?usp=sharing',
              '_blank',
              'noopener,noreferrer'
            )
          }
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold px-6 py-2 rounded-full transition-transform hover:scale-105"
        >
          View Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
