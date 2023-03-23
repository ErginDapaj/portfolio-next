import { useState, useEffect } from 'react';

interface LoaderProps {
  progress: number;
}

export default function Loader({ progress }: LoaderProps){
  const [fillPercentage, setFillPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFillPercentage(prevFillPercentage => prevFillPercentage + 1);
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 flex justify-center items-center z-50">
      <div className="w-24 ml-4 animate-pulse">
        <svg viewBox="0 0 100 100" style={{ width: 100 }}>
          <defs>
            <mask id="mask">
              <rect x="0" y="0" width="100" height="100" fill="black" />
              <circle cx="50" cy="50" r={fillPercentage} fill="white" stroke="white" strokeWidth={3} />
            </mask>
          </defs>
          <image xlinkHref="./eagle.png" width="100" height="100" mask="url(#mask)" />
        </svg>
      </div>
    </div>
  );
}
