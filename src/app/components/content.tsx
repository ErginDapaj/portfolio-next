"use client"
import { useState, useEffect } from 'react';

export default function Content() {
  const [rotateDeg, setRotateDeg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotateDeg(prevRotateDeg => prevRotateDeg + 1);
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full h-screen flex justify-center items-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(
          rgba(255, 255, 255, 0.5),
          rgba(255, 255, 255, 0.5)
        ), url(./eagle.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(2px)',
        transform: `rotate(${rotateDeg}deg)`
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Hello there</h1>
        <p className="text-2xl font-medium text-gray-700">
          Welcome to my portfolio
        </p>
      </div>
    </div>
  );
}
