"use client"
import { useState } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import ThemeChanger from './themechanger';

export default function Content() {
  const [color, setColor] = useState('#2F4F4F');

  const rgbaColor = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5), 16);
    return `rgba(${r}, ${g}, ${b}, 0.7)`;
  };

  const gradientColor = `linear-gradient(to bottom, ${rgbaColor(color)}, rgba(0, 0, 0, 0))`;

  return (
    <Box className="min-h-screen p-6 bg-gradient-to-b from-gray-900 to-transparent" style={{ background: gradientColor }}>
      <Box className="max-w-7xl mx-auto">
        <Box className="px-4 py-6">
          <Heading size="2xl" fontWeight="extrabold" mb={4} color="black">
            Hello World!
          </Heading>
          <Text fontSize="lg" mb={8} color="gray.300">
            Welcome to my portfolio website. Here you will find information about my projects, skills and experience as a developer.
          </Text>
          <ThemeChanger onColorChange={setColor} />
        </Box>
      </Box>
    </Box>
  );
}