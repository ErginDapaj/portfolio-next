"use client"

import { useState, useEffect } from 'react';
// import { Select } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons';

type ThemeChangerProps = {
  onColorChange: (color: string) => void;
};

const ThemeChanger: React.FC<ThemeChangerProps> = ({ onColorChange }) => {
  const colors = [
    { name: 'Indigo', value: '#4C51BF' },
    { name: 'Purple', value: '#6B46C1' },
    { name: 'Pink', value: '#D53F8C' },
    { name: 'Orange', value: '#ED8936' },
    { name: 'Teal', value: '#38B2AC' },
  ];

  // Load the initial color value from local storage or use the first color in the array
  const [color, setColor] = useState<string>(
    () => window.localStorage.getItem('themeColor') || colors[0].value
  );

  // Update local storage and call onColorChange whenever the color changes
  useEffect(() => {
    window.localStorage.setItem('themeColor', color);
    onColorChange(color);
  }, [color]);

  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(e.target.value);
  };

  return (
    <div className="flex items-center">
      {/* <Select
        value={color}
        onChange={handleColorChange}
        bg="white"
        rounded="md"
        boxShadow="sm"
        className="mr-2"
      >
        {colors.map((c) => (
          <option key={c.name} value={c.value}>
            {c.name}
          </option>
        ))}
      </Select> */}
      <FontAwesomeIcon icon={faPaintBrush} className="text-gray-600" />
    </div>
  );
};

export default ThemeChanger;