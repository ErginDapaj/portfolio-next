"use client"
import { useEffect, useRef } from "react";
import React from "react";
import Header from "../components/header";
import {
  faReact,
  faNodeJs,
  faCss3Alt,
  faJsSquare,
  faHtml5,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ChakraProvider,
  Box,
  Text,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  CircularProgressLabel,
  Button,
  SimpleGrid,
  useDisclosure,
  Image,
  CircularProgress,
  Center,
  Flex,
  VStack,
  CardBody,
  CardFooter,
  useColorModeValue,
  Grid,
  GridItem
} from "@chakra-ui/react";

export default function About() {
  interface Project {
    name: string;
    description: string;
    link: string;
    icon: JSX.Element;
  }

  const projectData: Project[] = [
    {
      name: "FivemSirens.com",
      description: "A website made with Next.js, published recently.",
      link: "https://fivemsirens.com",
      icon: <FontAwesomeIcon icon={faReact} />,
    },
    {
      name: "ergin.al",
      description: "This is still work in progress. Very recent.",
      link: "https://ergin.al",
      icon: <FontAwesomeIcon icon={faReact} />,
    }
  ];

  return (
    <ChakraProvider>
         <Box
            minHeight="100vh"
            display="flex"
            flexDirection="column"
            bgGradient='linear(to-bl, #171e30, #0e1830, #030c1f)'
            backgroundSize="100% 200%"
          >
        <div>
          <Header />
          <Box maxW="4xl" mx="auto" py={8} px={4}>
            <Box className="mb-8 box-shadow" bgGradient='linear(to-bl, #1F2937, #2D3748)'>
              <Box p={4}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-folder mr-2"
                  >
                    <path d="M22 2H12l-2 4H2v16h20V2z"></path>
                  </svg>
                  <Text color='white'>Projects</Text>
                </div>
              </Box>
              <Box p={4}>
                <Text color='white'>
                  Please note that most of my projects are private!
                </Text>
              </Box>
            </Box>
            <SimpleGrid columns={{ base:1, md:2 }} spacing={8}>
              {projectData.map((project, index) => (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  <Box
                    className="transform transition duration-300 hover:-translate-y-1 hover:shadow-lg box-shadow"
                    bg='#1F2937'
                  >
                    <Box p={4}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        {project.icon}
                        <Text color='white' ml={2}>{project.name}</Text>
                      </div>
                    </Box>
                    <Box p={4}>
                      <Text color='white'>
                        {project.description}
                      </Text>
                    </Box>
                  </Box>
                </a>
              ))}
            </SimpleGrid>
          </Box>
        </div>
      </Box>
    </ChakraProvider>
  );
}
