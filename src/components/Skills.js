import React from 'react';
import { Code2, Palette, Server, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code2 className="w-8 h-8" />,
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js']
    },
    {
      title: 'Backend Development',
      icon: <Server className="w-8 h-8" />,
      skills: ['Node.js', 'Express', 'Python', 'PostgreSQL']
    },
    {
      title: 'UI/UX Design',
      icon: <Palette className="w-8 h-8" />,
      skills: ['Figma', 'Adobe XD', 'Responsive Design', 'User  Research']
    },
    {
      title: 'Soft Skills',
      icon: <Brain className="w-8 h-8" />,
      skills: ['Problem Solving', 'Team Leadership', 'Communication', 'Agile']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-4 text-blue-600">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-600 text-center">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;