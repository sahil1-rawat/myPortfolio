import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import Profile from '../../assets/profile.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { links } from '../../Utills/links';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className='relative  min-w-[100vw] bg-white flex flex-col items-center justify-center text-center p-6 overflow-auto'>
      <div className=''>
        <img
          src={Profile}
          alt='profile'
          className='w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-black/45 shadow-2xl transform transition duration-500 hover:scale-110 object-cover'
        />
      </div>

      <h1 className='text-4xl md:text-5xl font-extrabold text-black mb-4 tracking-wider'>
        Hi
        <div className='text-6xl mt-4 animate-wave'>👋</div>, I'm{' '}
        <span className='text-[#30326e]'>Shailendra Singh Rawat</span>
      </h1>
      <h2 className='text-2xl md:text-3xl text-[#3e4f1d] mb-6'>
        <Typewriter
          options={{
            strings: [
              'React Developer!',
              'Full Stack Developer!',
              'MERN Stack Developer!',
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>

      <div className='mt-8 flex justify-center gap-6'>
        <a
          href='http://api.whatsapp.com/send?phone=7900519254'
          target='_blank'
          rel='noreferrer'
          aria-label='Hire Me'
          className='bg-[#30326e] text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 ease-in-out transform hover:bg-[#1d24df] hover:scale-105'>
          Hire Me
        </a>
        <button
          onClick={() => {
            window.open('Docs/resume.pdf', '_blank');
          }}
          className='bg-[#30326e] text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 ease-in-out transform hover:bg-[#1d24df] hover:scale-105'>
          Resume
        </button>
      </div>

      <div className='mt-8 flex gap-8 text-black text-3xl'>
        {links.map((link, index) => (
          <a
            href={link.ref_link}
            key={index}
            target='_blank'
            rel='noopener noreferrer'
            className={`text-${link.color} hover:scale-150 transition-all duration-300 hover:shadow-lg ease-in-out `}>
            {link.icon}
          </a>
        ))}
      </div>

      <div className='absolute inset-0 bg-fixed bg-cover bg-opacity-30 bg-[#4e4f5e] pointer-events-none z-[-1]'></div>
    </div>
  );
};

export default Home;
