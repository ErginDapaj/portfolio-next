"use client"
import { useState, useEffect } from "react";
import { format } from 'date-fns';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Loader from './loader';

function formatTime(time: number) {
  const days = Math.floor(time / (3600 * 24));
  const hours = Math.floor((time % (3600 * 24)) / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);
  return { days, hours, minutes, seconds };
}

export default function ContentTemp() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);


  useEffect(() => {
    let progress = 10;
    const interval = setInterval(() => {
      progress += 10;
      if (progress > 100) {
        clearInterval(interval);
        setIsLoading(false);
      } else {
        setProgress(progress);
      }
    }, 200);
    
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Math.floor(Date.now() / 1000);
      const endTime = 1679243285; // Unix timestamp for 7 days from now
      const diff = endTime - now;
      setTimeLeft(diff > 0 ? diff : 0);
    }, 1000);
    return () => clearInterval(interval) ;
    
  }, []);
  

  const { days, hours, minutes, seconds } = formatTime(timeLeft);
  const percentage = (timeLeft / 604800) * 100; // 604800 seconds in 7 days

  return (
    
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-white">
      {isLoading ? (
        <Loader progress={progress} />
      ) : (
      <div>
        
      
      
      {timeLeft > 0 ? (
        
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Coming Soon!</h1>
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
          <div className="mt-10">
            <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Notify Me
            </button>
          </div>
        </div>
        
      ) : (
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">We are Live!</h1>
          <p className="text-xl mb-8">Thank you for your patience.</p>
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Visit Website
          </button>
        </div>
        
      )}
      </div>
      )}

    </div>
      
  );
      }