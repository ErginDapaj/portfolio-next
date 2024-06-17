"use client"
import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Load the slim version for reduced bundle size
import type { Container, Engine } from "@tsparticles/engine";

const quotes = [
  "The absence of evidence is not the evidence of absence. - Carl Sagan",
  "Extraordinary claims require extraordinary evidence. - Carl Sagan",
  "I am against religion because it teaches us to be satisfied with not understanding the world. - Richard Dawkins",
  "Religion is excellent stuff for keeping common people quiet. - Napoleon Bonaparte",
  "We must be skeptical even of our skepticism. - Bertrand Russell",
  "I don't believe in God because I don't believe in Mother Goose. - Clarence Darrow",
  "Faith means not wanting to know what is true. - Friedrich Nietzsche",
  "The way to see by faith is to shut the eye of reason. - Benjamin Franklin",
  "Properly read, the Bible is the most potent force for atheism ever conceived. - Isaac Asimov",
  "A man is accepted into a church for what he believes and he is turned out for what he knows. - Mark Twain",
  "Religion is regarded by the common people as true, by the wise as false, and by rulers as useful. - Seneca",
  "Is God willing to prevent evil, but not able? Then he is not omnipotent. Is he able, but not willing? Then he is malevolent. Is he both able and willing? Then whence cometh evil? Is he neither able nor willing? Then why call him God? - Epicurus",
  "To surrender to ignorance and call it God has always been premature, and it remains premature today. - Isaac Asimov",
  "Man is the religious animal. He is the only religious animal. He is the only animal that has the True Religion – several of them. He is the only animal that loves his neighbor as himself and cuts his throat if his theology isn't straight. - Mark Twain",
  "All thinking men are atheists. - Ernest Hemingway",
  "A lie is a lie even if everyone believes it. The truth is the truth even if nobody believes it. - David Stevens",
  "Religion is the opium of the masses. - Karl Marx",
  "It is wrong always, everywhere, and for anyone, to believe anything upon insufficient evidence. - William Kingdon Clifford",
  "The Bible is a book that has been read more and examined less than any book that ever existed. - Thomas Paine",
  "What can be asserted without evidence can be dismissed without evidence. - Christopher Hitchens",
  "You cannot reason people out of a position that they did not reason themselves into. - Ben Goldacre",
  "Religion is what keeps the poor from murdering the rich. - Napoleon Bonaparte",
  "It is far better to grasp the universe as it really is than to persist in delusion, however satisfying and reassuring. - Carl Sagan",
  "Lighthouses are more helpful than churches. - Benjamin Franklin",
  "The God of the Gaps argument is a variant of 'God did it'. As a basis for explaining everything, it collapses immediately under the weight of reality. - Jerry Coyne",
  "Those who can make you believe absurdities can make you commit atrocities. - Voltaire",
  "The invisible and the non-existent look very much alike. - Delos B. McKown",
  "It is wonderful how much time good people spend fighting the devil. If they would only expend the same amount of energy loving their fellow men, the devil would die in his own tracks of ennui. - Helen Keller",
  "Gods are fragile things; they may be killed by a whiff of science or a dose of common sense. - Chapman Cohen",
  "When one person suffers from a delusion, it is called insanity. When many people suffer from a delusion it is called religion. - Robert Pirsig",
  "Belief in the supernatural reflects a failure of the imagination. - Edward Abbey",
  "I prayed for twenty years but received no answer until I prayed with my legs. - Frederick Douglass",
  "Men never commit evil so fully and joyfully as when they do it for religious convictions. - Blaise Pascal",
  "We are all atheists about most of the gods that humanity has ever believed in. Some of us just go one god further. - Richard Dawkins",
  "Religion easily has the best bullshit story of all time. Think about it. Religion has actually convinced people that there's an invisible man living in the sky who watches everything you do every minute of every day. And the invisible man has a special list of ten things he does not want you to do. And if you do any of these ten things, he has a special place, full of fire and smoke and burning and torture and anguish, where he will send you to live and suffer and burn and choke and scream and cry forever and ever 'til the end of time! But He loves you. He loves you and He needs money! - George Carlin",
  "Atheism is a non-prophet organization. - George Carlin",
  "Is man one of God's blunders or is God one of man's blunders? - Friedrich Nietzsche",
  "All religions have been made by men. - Napoleon Bonaparte",
  "To terrify children with the image of hell, to consider women an inferior creation—is that good for the world? - Christopher Hitchens",
  "Science flies you to the moon. Religion flies you into buildings. - Victor Stenger",
  "I would love to believe that when I die I will live again, that some thinking, feeling, remembering part of me will continue. But as much as I want to believe that, and despite the ancient and worldwide cultural traditions that assert an afterlife, I know of nothing to suggest that it is more than wishful thinking. - Carl Sagan",
  "I believe in God, only I spell it Nature. - Frank Lloyd Wright",
  "Faith is believing what you know ain't so. - Mark Twain",
  "The church says the earth is flat, but I know that it is round, for I have seen the shadow on the moon, and I have more faith in a shadow than in the church. - Ferdinand Magellan",
  "Religion is a culture of faith; science is a culture of doubt. - Richard Feynman",
  "We have just enough religion to make us hate, but not enough to make us love one another. - Jonathan Swift",
  "For those who believe in God, most of the big questions are answered. But for those of us who can’t readily accept the God formula, the big answers don’t remain stone-written. We adjust to new conditions and discoveries. We are pliable. Love need not be a command nor faith a dictum. I am my own god. - Charles Bukowski",
  "The word 'God' is for me nothing more than the expression and product of human weaknesses, the Bible a collection of honorable but still primitive legends which are nevertheless pretty childish. No interpretation no matter how subtle can (for me) change this. - Albert Einstein",
  "If God did not exist, it would be necessary to invent him. - Voltaire",
  "Religion is an insult to human dignity. With or without it you would have good people doing good things and evil people doing evil things. But for good people to do evil things, that takes religion. - Steven Weinberg",
  "Those who believe absurdities will commit atrocities. - Voltaire",
  "Religion is the sigh of the oppressed creature, the heart of a heartless world, and the soul of soulless conditions. It is the opium of the people. - Karl Marx",
  "Is God willing to prevent evil, but not able? Then he is not omnipotent. Is he able, but not willing? Then he is malevolent. Is he both able and willing? Then whence cometh evil? Is he neither able nor willing? Then why call him God? - Epicurus",
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
    const quoteInterval = setInterval(() => {
      setQuote(getRandomQuote());
    }, 10000); // Update quote every 10 seconds

    return () => clearInterval(quoteInterval);
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
        <h1 className="text-3xl font-bold">You are about to join the coolest atheism server ever!</h1>
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
