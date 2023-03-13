"use client"
import { useState, useEffect } from "react";
import { format } from 'date-fns';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function formatTime(time: number) {
  const days = Math.floor(time / (3600 * 24));
  const hours = Math.floor((time % (3600 * 24)) / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);
  return { days, hours, minutes, seconds };
}

export default function Content() {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Math.floor(Date.now() / 1000);
      const endTime = 1679243285; // Unix timestamp for 7 days from now
      const diff = endTime - now;
      setTimeLeft(diff > 0 ? diff : 0);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const { days, hours, minutes, seconds } = formatTime(timeLeft);
  const percentage = (timeLeft / 604800) * 100; // 604800 seconds in 7 days

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-white">
      {timeLeft > 0 ? (
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Coming Soon!</h1>
          <div className="flex justify-center">
            <div className="flex flex-col items-center mr-4">
              <CircularProgressbar value={days} maxValue={7} text={`${days}d`} />
              <p className="text-sm font-semibold mt-2">Days</p>
            </div>
            <div className="flex flex-col items-center mr-4">
              <CircularProgressbar value={hours} maxValue={24} text={`${hours}h`} />
              <p className="text-sm font-semibold mt-2">Hours</p>
            </div>
            <div className="flex flex-col items-center mr-4">
              <CircularProgressbar value={minutes} maxValue={60} text={`${minutes}m`} />
              <p className="text-sm font-semibold mt-2">Minutes</p>
            </div>
            <div className="flex flex-col items-center">
              <CircularProgressbar value={seconds} maxValue={60} text={`${seconds}s`} />
              <p className="text-sm font-semibold mt-2">Seconds</p>
            </div>
          </div>
          <div className="mt-8">
            <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all duration-300">
              Discord
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Welcome!</h1>
          <p className="text-xl font-semibold">It's time to get started!</p>
          <div className="mt-8">
            <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2focus:ring-blue-400 focus:ring-opacity-75 transition-all duration-300"
            >
              Start
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

