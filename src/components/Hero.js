import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 relative">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left space-y-8 animate-fadeIn">
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-800">
            <span className="block animate-slideDown">Hi, I'm</span>
            <span className="block text-blue-600 mt-2 animate-slideUp">Name</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 animate-fadeIn delay-500">
            Full Stack Developer & UI/UX Enthusiast
          </p>
          <div className="animate-fadeIn delay-700">
            <p className="text-lg text-gray-600 leading-relaxed">
              Crafting beautiful, user-centric web experiences with modern technologies.
              Passionate about creating innovative solutions that make a difference.
            </p>
          </div>
          <div className="flex gap-4 justify-center lg:justify-start animate-fadeIn delay-1000">
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors"
            >
              View Work
            </a>
          </div>
        </div>
        <div className="relative animate-fadeIn delay-300">
          <div className="w-64 h-64 lg:w-80 lg:h-80 mx-auto relative">
            <div className="absolute inset-0 bg-blue-600 rounded-full animate-blob"></div>
            <img
              src="/img/main.jpg"
              alt="Profile"
              className="absolute inset-0 rounded-full object-cover border-4 border-white shadow-xl"
            />
          </div>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-blue-600" />
      </a>
    </section>
  );
};

export default Hero;