import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.jpg";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');  

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);  
    setIsNavOpen(false);      
  };

  return (
    <nav className="colorr border-gray-200 dark:bg-gray-900 fixed left-0 right-0 top-0 z-30">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8 rounded-full w-14" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">قيم </span>
        </Link>
        
        <button 
          onClick={toggleNav} 
          type="button" 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
          aria-controls="navbar-default" 
          aria-expanded={isNavOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5 shadow-none" aria-hidden="true"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        
        <div className={`w-full md:block md:w-auto ${isNavOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 colorr md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link 
                to="/" 
                className={`block py-2 px-3 rounded md:p-0 ${activeLink === '/' ? 'text-white ' : 'text-gray-900'} dark:text-white md:dark:text-blue-500`} 
                onClick={() => handleLinkClick('/')} 
                aria-current={activeLink === '/' ? 'page' : undefined}
              >
                الصفحة الرئسية
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`block py-2 px-3 rounded md:p-0 ${activeLink === '/about' ? 'text-white ' : 'text-gray-900'} dark:text-white md:dark:text-blue-500`} 
                onClick={() => handleLinkClick('/about')}
              >
                القيم
              </Link>
            </li>
            <li>
              <Link 
                to="/contactUs" 
                className={`block py-2 px-3 rounded md:p-0 ${activeLink === '/contactUs' ? 'text-white ' : 'text-gray-900'} dark:text-white md:dark:text-blue-500`} 
                onClick={() => handleLinkClick('/contactUs')}
              >
                من نحن
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
