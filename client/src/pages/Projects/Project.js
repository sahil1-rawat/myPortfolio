import React from 'react';
import Slider from 'react-slick'; // Import slick carousel
import img1 from '../../assets/images/proj1.png';
import img2 from '../../assets/images/proj2.png';
import img3 from '../../assets/images/proj3.png';

const projects = [
  {
    id: 1,
    title: 'ChatFlix: Real Time Chat Application',
    description:
      'A real-time chatting app built with the MERN stack. It features secure user authentication, responsive design, and instant messaging.',
    image: img1,
    demoLink: 'https://example-ecommerce-demo.com',
    repoLink: 'https://github.com/sahil1-rawat/ChatFlick--Chatting-App',
  },
  {
    id: 2,
    title: 'Online Counselling Portal',
    description:
      'A comprehensive MERN stack platform to streamline university admission counseling, offering secure payment processing and an intuitive user experience.',
    image: img2,
    demoLink: 'https://example-taskapp-demo.com',
    repoLink: 'https://github.com/sahil1-rawat/Counselling_Portal',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description:
      'An interactive React-based portfolio that highlights my web development expertise, presenting a curated selection of projects, skills, and accomplishments in a visually appealing manner.',
    image: img3,
    demoLink: 'https://example-portfolio.com',
    repoLink: 'https://github.com/yourusername/portfolio',
  },
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // for medium devices (md)
        settings: {
          slidesToShow: 2, // Show 2 projects for medium devices
        },
      },
      {
        breakpoint: 768, // for small devices (sm)
        settings: {
          slidesToShow: 1, // Show 1 project for small devices
        },
      },
    ],
  };

  return (
    <div className='bg-white py-10'>
      <div className='max-w-6xl mx-auto px-6 lg:px-10'>
        <h1 className='text-4xl font-bold text-center text-gray-800 mb-12'>
          Projects
        </h1>

        {projects.length > 3 ? (
          <Slider {...settings}>
            {projects.map((project) => (
              <div
                key={project.id}
                className='bg-gray-200 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 mx-4'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-48 object-fill shadow-2xl'
                />
                <div className='p-6'>
                  <h2 className='text-2xl font-bold text-gray-800 mb-2'>
                    {project.title}
                  </h2>
                  <p className='text-gray-600 mb-4 text-left'>
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
          </Slider>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default Projects;
