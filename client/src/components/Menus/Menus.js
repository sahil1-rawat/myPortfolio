import React, { useState } from 'react';
import { menu } from '../../Utills/menu.js';
import { Link } from 'react-router-dom';

const Menus = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className='bg-blue-600 text-white px-4 py-3 fixed w-full top-0 z-50'>
      <div className='flex justify-between items-center'>
        <h1 className='text-lg sm:text-xl font-bold'>My Portfolio</h1>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className='sm:hidden text-xl focus:outline-none'>
          {menuOpen ? '✖' : '☰'}
        </button>
        <ul className='hidden sm:flex gap-6 text-sm sm:text-base'>
          {menu.map((menuItem, index) => (
            <li key={index}>
              <Link
                to={menuItem.render}
                className='hover:text-gray-300'
                onClick={handleLinkClick}>
                {menuItem.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {menuOpen && (
        <ul className='flex flex-col sm:hidden mt-4 text-sm'>
          {menu.map((menuItem, index) => (
            <li key={index}>
              <Link
                to={menuItem.render}
                className='block py-2 hover:bg-blue-500'
                onClick={handleLinkClick}>
                {menuItem.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Menus;
