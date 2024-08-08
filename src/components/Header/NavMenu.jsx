import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleMenu}
        className="flex items-center space-x-1 text-lg font-medium text-gray-900 hover:text-green-700 focus:outline-none"
      >
        <span>Learn More</span>
        <svg
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute  mt-6 md:w-[600px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none border  ">
          <div className='flex md:flex-row px-5 py-4'>
          <div className='flex-1'>
            <div>
            <h3>Resources</h3>
            <img src="" alt="" />
            </div>
            <div>
              <p className='text-sm font-normal text-gray-600'>Get big, quick. Solana is made to handle thousands of transactions per second, and fees for both developers and users remain less than $0.0025.</p>
            </div>
          </div>
          <div className='flex-1'>
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <Link
              to="/about"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              WhitePaper
            </Link>
            <Link
              to="/products"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Glossary
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Developers
            </Link>
          </div>
          </div>
          </div>
         
        </div>
      )}
    </div>
  );
};

export default NavMenu;