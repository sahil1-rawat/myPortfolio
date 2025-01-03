import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { mySkills } from '../../Utills/mySkills';

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      offset: 50,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className='relative min-h-[80vh] bg-white flex flex-col items-center justify-center text-center p-6 overflow-auto'>
      <div className='container mx-auto text-center mb-12'>
        <h1 className='text-4xl md:text-5xl font-extrabold text-gray-800 mb-8'>
          My Skills
        </h1>
        <p className='text-gray-600 text-lg'>
          I specialize in a variety of technologies, focusing on building modern
          web applications with the latest tools and frameworks.
        </p>
      </div>

      <div className=' grid grid-cols-2 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6'>
        {mySkills.map((skill, index) => (
          <div
            key={index}
            className='flex flex-col items-center p-4 shadow-lg bg-white rounded-lg transform transition duration-300 hover:scale-110'>
            <div className={`text-5xl ${skill.color} mb-2`}>{skill.icon}</div>
            <p className='text-xl font-semibold'>{skill.name}</p>
          </div>
        ))}
      </div>

      <div className='absolute inset-0 bg-fixed bg-cover bg-opacity-30 bg-[#4e4f5e] pointer-events-none z-[-1]'></div>
    </div>
  );
};

export default Skills;
