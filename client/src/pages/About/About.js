import React from 'react';

const AboutMe = () => {
  return (
    <div className='relative min-h-[92vh] bg-gradient-to-b from-gray-100 to-gray-200 p-6 text-gray-800'>
      <h1 className='text-3xl font-bold text-center mb-8'>About Me</h1>
      <div className='text-lg leading-relaxed max-w-4xl mx-auto space-y-6'>
        <p>
          Hi, I'm{' '}
          <span className='font-semibold text-blue-600'>
            Shailendra Singh Rawat
          </span>
          ! I’m currently pursuing MCA with a strong passion for web development
          and a goal to become a skilled{' '}
          <span className='font-semibold text-blue-600'>
            Full Stack Developer
          </span>
          . Throughout my academic journey, I gained a solid foundation in
          programming, problem-solving, and web technologies. I am now excited
          to apply my knowledge to real-world projects.
        </p>
        <p>
          I have hands-on experience with web technologies like{' '}
          <span className='font-semibold text-blue-600'>
            HTML, CSS, JavaScript, and React
          </span>
          . I also worked with back-end technologies like{' '}
          <span className='font-semibold text-blue-600'>Node.js</span> and{' '}
          <span className='font-semibold text-blue-600'>MongoDB</span> through
          academic projects. For example, I built an Online Counselling Portal
          and Real-Time Chat Application as part of my academic projects.
        </p>
        <p>
          I’m passionate about continuous learning and constantly exploring new
          tools and technologies to enhance my skills. I look forward to
          collaborating with professionals and contributing to projects that
          solve real-world problems.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
