"use client"
import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Load the slim version for reduced bundle size
import type { Container, Engine } from "@tsparticles/engine";

const quotes = [
  "The absence of evidence is not the evidence of absence. - Carl Sagan",
  "Extraordinary claims require extraordinary evidence. - Carl Sagan",
  
];

const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

const Home: React.FC = () => {
  const [quote, setQuote] = useState<string>('');
  const [init, setInit] = useState(false);

  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);

  // Initialize tsParticles engine
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container) => {
    console.log(container);
  };

  const handleRedirect = () => {
    window.location.href = "https://discord.gg/29k48kUWBS";
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen text-white overflow-hidden">
      {init && <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#000000", // Black background to enhance the cosmic effect
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: {
                enable: true,
                delay: 0.5,
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 100,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />}
      <div className="relative bg-black bg-opacity-50 p-10 rounded-lg shadow-lg text-center animate-fade-in z-10">
        <h1 className="text-3xl font-bold">You are about to join the coolest atheist server ever!</h1>
        <div className="quote text-xl italic mt-4">{quote}</div>
        <button 
          onClick={handleRedirect} 
          className="mt-8 px-6 py-3 bg-gradient-to-r from-gray-900 to-black text-white font-semibold rounded-lg shadow-md transform transition-transform hover:scale-105 animate-pulse-universe"
        >
          Join Now
        </button>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 2s ease-in;
        }
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-move {
          animation: gradient-move 10s ease infinite;
          background-size: 200% 200%;
        }
        .bg-stars {
          background-size: cover;
          background-position: center;
          animation: sparkle 2s linear infinite;
        }
        @keyframes sparkle {
          0% { opacity: 0.8; }
          50% { opacity: 1; }
          100% { opacity: 0.8; }
        }
        @keyframes pulse-universe {
          0%, 100% { box-shadow: 0 0 20px rgba(0, 0, 0, 0.7), 0 0 30px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 0, 0, 0.3); }
          50% { box-shadow: 0 0 30px rgba(255, 255, 255, 0.7), 0 0 40px rgba(255, 255, 255, 0.5), 0 0 50px rgba(255, 255, 255, 0.3); }
        }
        .animate-pulse-universe {
          animation: pulse-universe 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
