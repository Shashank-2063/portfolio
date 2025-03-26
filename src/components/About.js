import React from 'react';
import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <User  className="w-20 h-20 text-blue-600 mb-6" />
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>
          <div className="max-w-2xl text-center">
            <p className="text-lg text-gray-600 mb-6">
              Hi, I'm a passionate Full Stack Developer with expertise in modern web technologies.
              I specialize in creating responsive, user-friendly applications that solve real-world problems.
              With a strong foundation in both frontend and backend development, I bring ideas to life through clean,
              efficient code and intuitive user experiences.
            </p>
            <p className="text-lg text-gray-600">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
              or sharing my knowledge through technical writing and mentoring.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
