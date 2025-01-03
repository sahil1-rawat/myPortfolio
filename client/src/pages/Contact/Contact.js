import React, { useState } from 'react';

import { links } from '../../Utills/links';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormError('All fields are required');
      return;
    }
    try {
      /* const res = await axios.post('/api/v1/portfolio/msg', {
        name: formData.name,
        email: formData.email,
        msg: formData.message,
      });
       */
      const res = await fetch(`http://localhost:5000/api/v1/portfolio/msg`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          msg: formData.message,
        }),
      });

      const data = await res.json();

      if (data) {
        alert(data.message);
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.log('msg:', res.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='relative min-h-[90vh]  flex items-center justify-center'>
      <div className='max-w-3xl w-full mx-4 p-8 bg-white rounded-lg shadow-lg'>
        <h1 className='text-3xl font-bold text-center text-gray-800 mb-6'>
          Contact Me
        </h1>

        <form onSubmit={handleSubmit} className='space-y-5'>
          <div className='flex flex-col'>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Your Name'
              className='p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200'
              required
            />
          </div>

          <div className='flex flex-col'>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Your Email'
              className='p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200'
              required
            />
          </div>

          <div className='flex flex-col'>
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Your Message'
              rows='3'
              className='p-3 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 overflow-hidden'
              required
            />
          </div>

          {formError && (
            <p className='text-red-500 text-sm text-center'>{formError}</p>
          )}

          <div className='text-center'>
            <button
              type='submit'
              className='bg-blue-500 text-white px-5 py-3 rounded text-lg font-medium hover:bg-blue-600 transition-all duration-200'>
              Send Message
            </button>
          </div>
        </form>
        <div className='flex justify-center items-center'>
          <h1 className=' mt-2 text-[25px]  text-black'>Or</h1>
        </div>
        <div className='mt-2 text-center'>
          <h2 className='text-xl font-medium text-gray-800 mb-4'>
            Connect with me:
          </h2>
          <div className='flex justify-center gap-6 text-2xl text-gray-600'>
            {links.map((link, index) => (
              <a
                href={link.ref_link}
                key={index}
                target='_blank'
                rel='noopener noreferrer'
                className={`text-${link.color} hover:scale-150 transition-all duration-300 hover:text-shadow-custom`}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
