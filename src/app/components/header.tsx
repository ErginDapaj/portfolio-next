"use client"
import Link from "next/link";
import { useEffect, useState } from 'react';
import Typing from 'react-typing-effect';

export default function Header() {
  const [isTyping, setIsTyping] = useState(false);
  const [status, setStatus] = useState('red');

  useEffect(() => {
    setIsTyping(true);
  }, []);

  return (
    <header className="bg-gray-900 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          {isTyping && (
            <Typing speed={150} text={["Ergin's Portfolio"]} />
          )}
        </div>
        <ul className="flex space-x-4">
          <li className="nav-item relative">
            <button className="nav-link font-bold py-2 px-4 border-b-4 border-transparent hover:text-gray-500 hover:border-blue-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              Home
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
              About
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-white rounded-full transform scale-x-0 origin-left transition-all duration-500"></span>
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-white-600 rounded-full transform scale-x-0 origin-left transition-all duration-700"></span>
            </button>
          </li>
          <li className="nav-item relative">
            <button className="nav-link font-bold py-2 px-4 border-b-4 border-transparent hover:text-gray-500 hover:border-blue-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              Contact
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
      </nav>
    </header>
  );
}
