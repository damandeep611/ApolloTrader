import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import NavMenu from './NavMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinkStyles = ({ isActive }) => 
    `hover:text-green-600  ${isActive ? 'text-green-600 font-bold text-lg' : 'text-gray-700 text-lg font-semibold'}`;

  return (
    <header className="bg-[#F5F8FF] p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img src="https://img.icons8.com/fluency/48/exchange-money-ethereum.png" alt="Solana Logo" className="h-12" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className={navLinkStyles}>Home</NavLink>
          <NavLink to="/" className={navLinkStyles}><NavMenu/></NavLink>
          <NavLink to="/pricing" className={navLinkStyles}>Pricing</NavLink>
          <NavLink to="/nfts" className={navLinkStyles}>NFTs</NavLink>
          <NavLink to="/staking" className={navLinkStyles}>Staking</NavLink>
          <NavLink to="/ecosystem" className={navLinkStyles}>Ecosystem</NavLink>
          <NavLink to="/developers" className={navLinkStyles}>Developers</NavLink>
        </nav>

        {/* Sign In Button */}
        <Link to="/signin" className="hidden md:block bg-green-600 hover:bg-green-700 px-4 py-2 rounded ml-6 text-white">
          Sign In
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Side Menu */}
      <div className={`fixed top-0 left-0 w-4/5 h-full bg-[#F5F8FF] transform transition-transform duration-200 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} z-50`}>
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <Link to="/" onClick={toggleMenu}>
            <img src="https://img.icons8.com/fluency/48/exchange-money-ethereum.png" alt="Solana Logo" className="h-8" />
          </Link>
          <button onClick={toggleMenu} className="text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-4">
          <NavLink to="/" className={navLinkStyles} onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/pricing" className={navLinkStyles} onClick={toggleMenu}>Pricing</NavLink>
          <NavLink to="/nfts" className={navLinkStyles} onClick={toggleMenu}>NFTs</NavLink>
          <NavLink to="/staking" className={navLinkStyles} onClick={toggleMenu}>Staking</NavLink>
          <NavLink to="/ecosystem" className={navLinkStyles} onClick={toggleMenu}>Ecosystem</NavLink>
          <NavLink to="/developers" className={navLinkStyles} onClick={toggleMenu}>Developers</NavLink>
          <Link to="/signin" className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white" onClick={toggleMenu}>
            Sign In
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;