"use client"
import { useEffect, useState } from 'react';
import Typing from 'react-typing-effect';
import { FaHome, FaBars, FaTimes, FaInfoCircle, FaUserMinus, FaUmbrellaBeach, FaCodeBranch } from 'react-icons/fa'
import { IconContext } from 'react-icons';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Link from 'next/link';
interface Activity {
  state: string;
  details: string;
}
export default function Header() {
  const [isTyping, setIsTyping] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const statusColors = { dnd: 'red', offline: 'grey', online: 'green', idle: 'yellow' };
  const [status, setStatus] = useState('grey');

  const [codeActivity, setCodeActivity] = useState<Activity | null>(null);

  useEffect(() => {
    let socket: WebSocket | null = null;

    const startWebSocket = () => {
      socket = new WebSocket('wss://api.lanyard.rest/socket');

      socket.addEventListener('open', (event) => {
        console.log('WebSocket connection opened:', event);

        const initializeMessage = {
          op: 2,
          d: {
            subscribe_to_ids: ['399911902211473410'],
          },
        };
        socket?.send(JSON.stringify(initializeMessage));
      });

      socket.addEventListener('message', (event) => {
        console.log('WebSocket message received:', event);

        const message = JSON.parse(event.data.toString('utf-8'));
        switch (message.op) {
          case 0:
            switch (message.t) {
              case 'INIT_STATE':
                console.log('INIT_STATE event:', message.d);
                const initStatus = message.d['399911902211473410'].discord_status as keyof typeof statusColors;
                const initColor = statusColors[initStatus] || 'black';

                const activities = message.d['399911902211473410'].activities;
                let hasCodeActivity = false;
                let retrievedActivity: Activity | null = null;
                for (const activity of activities) {
                  if (activity.name === "Code") {
                    hasCodeActivity = true;

                    retrievedActivity = activity;
                    console.log(activity.state + " " + activity.details)
                    break;
                  }
                }

                // Update the state with retrieved activity values
                if (hasCodeActivity) {
                  setCodeActivity({
                    state: retrievedActivity!.state,
                    details: retrievedActivity!.details
                  });
                } else {
                  setCodeActivity(null);
                }

                setStatus(initColor);
                console.log(initColor);
                break;
              case 'PRESENCE_UPDATE':
                console.log('PRESENCE_UPDATE event:', message.d);
                const presenceStatus = message.d.discord_status as keyof typeof statusColors;
                const presenceColor = statusColors[presenceStatus] || 'black';
                setStatus(presenceColor);
                console.log('Status:', presenceStatus);
                console.log('Color:', presenceColor);

                // Update the activity with retrieved presence values
                const activity = message.d.activities.find((activity: { name: string; }) => activity.name === "Code");
                if (activity) {
                  console.log('IT WORKED!!!!!!!!')
                  setCodeActivity({
                    state: activity.state,
                    details: activity.details
                  });
                } else {
                  setCodeActivity(null);
                }
                break;
            }

            break;
          default:
            console.log('Unhandled op code:', message.op);
            break;
        }
      });

      socket.addEventListener('close', (event) => {
        console.log('WebSocket connection closed:', event);
        clearInterval(heartbeatInterval as NodeJS.Timeout);
        setTimeout(startWebSocket, 3000); // Try to reconnect after 3 seconds
      });

      socket.addEventListener('error', (event) => {
        console.log('WebSocket error:', event);
      });

      return () => {
        socket?.close();
      };
    };

    let heartbeatInterval: NodeJS.Timeout | null = null;

    const startHeartbeat = (interval: number) => {
      heartbeatInterval = setInterval(() => {
        const heartbeatMessage = {
          op: 3,
        };
        socket?.send(JSON.stringify(heartbeatMessage));
        console.log('Sent heartbeat');
      }, interval);
    };

    startWebSocket();
    startHeartbeat(30000); // Start sending heartbeat every 30 seconds

    return () => {
      clearInterval(heartbeatInterval as NodeJS.Timeout);
      if (socket) {
        socket.close();
      }
    };
  }, []);

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
            <Link href="/" legacyBehavior>
              <a className="nav-link">
                <button className="font-bold py-2 px-4 border-b-4 border-transparent hover:text-gray-500 hover:border-blue-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  Home
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-white rounded-full transform scale-x-0 origin-left transition-all duration-500"></span>
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-white-600 rounded-full transform scale-x-0 origin-left transition-all duration-700"></span>
                </button>
              </a>
            </Link>
          </li>

          <li className="nav-item relative">
            <Link href="/projects" legacyBehavior>
              <a className="nav-link">
                <button className="font-bold py-2 px-4 border-b-4 border-transparent hover:text-gray-500 hover:border-blue-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  Projects
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-white rounded-full transform scale-x-0 origin-left transition-all duration-500"></span>
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-white-600 rounded-full transform scale-x-0 origin-left transition-all duration-700"></span>
                </button>
              </a>
            </Link>
          </li>
          <li className="nav-item relative">
            <Link href="/security" legacyBehavior>
              <a className="nav-link">
                <button className="font-bold py-2 px-4 border-b-4 border-transparent hover:text-gray-500 hover:border-blue-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  Security
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-white rounded-full transform scale-x-0 origin-left transition-all duration-500"></span>
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-white-600 rounded-full transform scale-x-0 origin-left transition-all duration-700"></span>
                </button>
              </a>
            </Link>
          </li>

          <li className="nav-item flex items-center border-l-2 pl-4">
            <span className="text-white font-bold">Grainger</span>
            <span className="text-gray-400 font-bold">#5445:</span>
            <div className={`w-3 h-3 rounded-full ml-2 ${status === 'green' ? 'bg-green-500' : status === 'yellow' ? 'bg-yellow-500' : status === 'red' ? 'bg-red-500' : 'bg-gray-500'}`} />
            <div className="flex items-center ml-2">
              {codeActivity && codeActivity.details ? (
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <FaCodeBranch className="text-gray-400 mr-1" />
                  </div>
                  <div className="ml-2">
                    <span className="text-gray-600 font-semibold text-sm">{codeActivity.state}</span>
                    <span className="block text-gray-400 text-xs">{codeActivity.details}</span>
                  </div>
                </div>

              ) : (
                <div className="flex items-center">
                  <FaUmbrellaBeach className="text-gray-400 mr-1" />
                  <span className="text-gray-400 text-sm">Not coding at this moment!</span>
                </div>
              )}

            </div>
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
              <Link href="/" legacyBehavior>
                <a
                  className="block text-center py-2 px-4 font-semibold hover:text-gray-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                </Link>
              </li>
              <li className="mt-3">
              <Link href="/projects" legacyBehavior>

                <a
                  className="block text-center py-2 px-4 font-semibold hover:text-gray-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </a>
                </Link>
              </li>
              <li className="mt-3">
              <Link href="/security" legacyBehavior>

                <a
                  className="block text-center py-2 px-4 font-semibold hover:text-gray-400"
                  href="/security"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Security
                </a>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>

  );
}