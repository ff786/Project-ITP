import React, { useState, useEffect } from 'react';
import './Login.css';
import '../../App.css';
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';
import logo from '../../LoginAssets/logo.png';
import worldwide_img from './worldwide_img.jpg';
import Login from './Login';
import FORM from '../ClaimManage/FORM.jsx';

import { Link } from 'react-router-dom';

const Navbar = ({ scrolled }) => {
  const [logoHeight, setLogoHeight] = useState(true);
  const [navbarColor, setNavbarColor] = useState('transparent');

  useEffect(() => {
    if (scrolled) {
      setLogoHeight(50);
      setNavbarColor('#02072D');
    } else {
      setLogoHeight(75);
      setNavbarColor('transparent');
    }
  }, [scrolled]);

  return (
   <>
    <nav id="navbar" className={`fixed top-0 left-0 w-full bg-white shadow transition-all duration-300 z-50`} style={{ backgroundColor: navbarColor }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <img className="h-auto w-auto sm:h-10" src={logo} alt="Logo" style={{ height: logoHeight }} />
            </a>
          </div>
          <nav className="hidden md:flex space-x-10">
            <a href="#" className="text-base font-medium text-zinc-500 hover:text-zinc-900">Home</a>
            <a href="#" className="text-base font-medium text-zinc-500 hover:text-zinc-900">About Us</a>
            <a href="#" className="text-base font-medium text-zinc-500 hover:text-zinc-900">What We Do</a>
            <a href="#" className="text-base font-medium text-zinc-500 hover:text-zinc-900">Innobot Blog</a>
            <a href="#" className="text-base font-medium text-zinc-500 hover:text-zinc-900">Contact Us</a>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="#" className="whitespace-nowrap text-base font-medium text-zinc-500 hover:text-zinc-900">
              Try Free
            </a>
            <a href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
              (888) 341-1009
            </a>
          </div>
        </div>
      </div>
    </nav>
   </>
  );
};

const Main = () => {
  return (
      <>
    <Login />
    <FORM />
    {/* <div>
        <img className="h-auto w-auto" src={worldwide_img} alt="Logo" />
    </div> */}
    </>
  );
};

const IndexLogin = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 80 || document.documentElement.scrollTop > 80;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar scrolled={scrolled} />
      <Main />
    </>
  );
};

export default IndexLogin;
