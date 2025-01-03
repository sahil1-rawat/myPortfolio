import { projects } from '../../Utills/projects';
import React from 'react';

const Projects = () => {
  return (
    <div className='bg-white py-10'>
      <div className='max-w-6xl mx-auto px-6 lg:px-10'>
        <h1 className='text-4xl font-bold text-center text-gray-800 mb-12'>
          Projects
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project) => (
            <div
              key={project.id}
              className='bg-gray-200 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105'>
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-48 object-fill shadow-2xl'
              />
              <div className='p-6'>
                <h2 className='text-2xl font-bold text-gray-800 mb-2'>
                  {project.title}
                </h2>
                <p className='text-gray-600 mb-4 text-justify'>
                  {project.description}
                </p>
                <div className='flex justify-between'>
                  <a
                    href={project.demoLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500 font-semibold hover:underline'>
                    Live Demo
                  </a>
                  <a
                    href={project.repoLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500 font-semibold hover:underline'>
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
