"use client"
import Link from "next/link";
import { useEffect, useState } from 'react';
import Typing from 'react-typing-effect';
import { FaHome, FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons';
import { motion } from 'framer-motion';

export default function Header() {
  const [isTyping, setIsTyping] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const statusColors = { dnd: 'red', offline: 'grey', online: 'green', idle: 'yellow' };
  const [status, setStatus] = useState('grey');
  
  async function getStatus() {
    try {
      const response = await fetch('https://api.lanyard.rest/v1/users/399911902211473410');
      if (response.ok) {
        const json = await response.json();
        const status = json.data.discord_status as keyof typeof statusColors;
        const color = statusColors[status] || 'black';
        setStatus(color);
        console.log(color);
      } else {
        console.error(response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  }
  getStatus();
  useEffect(() => setIsTyping(true), []);
  
  return (
    <header className="bg-gray-900 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
      <div className="text-xl font-bold">
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 9 }}
  >
    {isTyping && <Typing speed={150} text={["Ergin's Portfolio"]} />}
  </motion.div>
</div>
        <ul className="hidden sm:flex sm:space-x-4">
        <li className="nav-item relative">
            <button className="nav-link font-bold py-2 px-4 border-b-4 border-transparent hover:text-gray-500 hover:border-blue-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              Home
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-white rounded-full transform scale-x-0 origin-left transition-all duration-500"></span>
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-white-600 rounded-full transform scale-x-0 origin-left transition-all duration-700"></span>
            </button>
          </li>
          <li className="nav-item relative">
            <button className="nav-link font-bold py-2 px-4 border-b-4 border-transparent hover:text-gray-500 hover:border-blue-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              About
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-white rounded-full transform scale-x-0 origin-left transition-all duration-500"></span>
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-white-600 rounded-full transform scale-x-0 origin-left transition-all duration-700"></span>
            </button>
          </li>
          <li className="nav-item relative">
            <button className="nav-link font-bold py-2 px-4 border-b-4 border-transparent hover:text-gray-500 hover:border-blue-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              Projects
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-white rounded-full transform scale-x-0 origin-left transition-all duration-500"></span>
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-white-600 rounded-full transform scale-x-0 origin-left transition-all duration-700"></span>
            </button>
          </li>
          <li className="nav-item relative">
            <button className="nav-link font-bold py-2 px-4 border-b-4 border-transparent hover:text-gray-500 hover:border-blue-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              Security
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-white rounded-full transform scale-x-0 origin-left transition-all duration-500"></span>
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-white-600 rounded-full transform scale-x-0 origin-left transition-all duration-700"></span>
            </button>
          </li>
          <li className="nav-item flex items-center border-l-2 pl-4">
            <span className="text-white font-bold">Grainger</span>
            <span className="text-gray-400 font-bold">#5445:</span>
            <div className={`w-3 h-3 rounded-full ml-2 ${status === 'green' ? 'bg-green-500' : status === 'yellow' ? 'bg-yellow-500' : status === 'red' ? 'bg-red-500' : 'bg-gray-500'}`} />
          </li>
        </ul>
        <div className="sm:hidden">
          <button 
            className="flex items-center justify-center w-8 h-8 text-white rounded-full hover:text-gray-400 focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <IconContext.Provider value={{ className: 'h-6 w-6' }}>
                <FaTimes />
              </IconContext.Provider>
            ) : (
              <IconContext.Provider value={{ className: 'h-6 w-6' }}>
                <FaBars />
              </IconContext.Provider>
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-full bg-gray-900 z-20">
            <ul className="flex flex-col items-center mt-6">
              <li>
                <a 
                  className="block text-center py-2 px-4 font-semibold hover:text-gray-400" 
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li className="mt-3">
                <a 
                  className="block text-center py-2 px-4 font-semibold hover:text-gray-400" 
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li className="mt-3">
                <a 
                  className="block text-center py-2 px-4 font-semibold hover:text-gray-400" 
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </a>
              </li>
              <li className="mt-3">
                <a 
                  className="block text-center py-2 px-4 font-semibold hover:text-gray-400" 
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Security
                </a>
              </li>
            </ul>
          </div>
        )}
  </nav>
</header>

  );
}
