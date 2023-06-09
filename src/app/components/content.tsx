"use client";
import { SetStateAction, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ChakraProvider,
  Box,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Flex
} from "@chakra-ui/react";
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
import Loader from "./loader";
import '@fontsource/space-mono';

// const MotionTypography = motion(Typography);
interface Skill {
  name: string;
  description: string;
  icon: JSX.Element;
}
const skills: Skill[] = [
  {
    name: "React",
    description: "A JavaScript library for building user interfaces.",
    icon: <FontAwesomeIcon icon={faReact} />,
  },
  {
    name: "Next.js",
    description:
      "A React framework for building server-side rendered and statically generated web applications.",
    icon: <FontAwesomeIcon icon={faReact} />,
  },
  {
    name: "Node.js",
    description:
      "An open-source, cross-platform, JavaScript runtime environment.",
    icon: <FontAwesomeIcon icon={faNodeJs} />,
  },
  {
    name: "Tailwind CSS",
    description: "A utility-first CSS framework.",
    icon: <FontAwesomeIcon icon={faCss3Alt} />,
  },
  {
    name: "JavaScript",
    description:
      "A high-level, just-in-time compiled, object-oriented programming language.",
    icon: <FontAwesomeIcon icon={faJsSquare} />,
  },
  {
    name: "HTML & CSS",
    description: "Markup and styling languages used for creating web pages.",
    icon: <FontAwesomeIcon icon={faHtml5} />,
  },
  {
    name: "TypeScript",
    description:
      "A typed superset of JavaScript that compiles to plain JavaScript.",
    icon: <FontAwesomeIcon icon={faJs} />,
  },
  {
    name: "Express",
    description: "A minimalist web framework for Node.js.",
    icon: <FontAwesomeIcon icon={faJs} />,
  },
  {
    name: "MongoDB",
    description: "A cross-platform document-oriented NoSQL database.",
    icon: <FontAwesomeIcon icon={faDatabase} />,
  },
  {
    name: "PostgreSQL",
    description: "A powerful, open-source object-relational database system.",
    icon: <FontAwesomeIcon icon={faDatabase} />,
  },
];

export default function Content() {
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const handleSkillHover = (skill: Skill | null) => {
    setHoveredSkill(skill);
  };
  useEffect(() => {
    setProgress(100);
    setIsLoading(false);
  }, []);
  return (
    <ChakraProvider>
      <Box
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        bgGradient='linear(to-bl,  #3e7e98 0%, #1f3f4c 35%, #142a32 50%)'
        backgroundSize="100% 200%"
      >
        <div>
      {isLoading ? (
        <Loader progress={progress} />
      ) : (
        <Box className="max-w-4xl mx-auto">
          <Box className="mb-8" bg="black" p={4} borderRadius="md">
            <Heading fontFamily="'Space Mono', sans-serif" as="h2" size="lg" className="text-white" mb={2}>
              About Me
            </Heading>
            <Box>
              <Text fontFamily="'Space Mono', sans-serif" variant="body1" className="text-white">
                I'm a web developer with experience in building modern and
                responsive websites using technologies like React, Node.js,
                and Tailwind CSS. I'm passionate about creating
                user-friendly and accessible web experiences.
              </Text>
            </Box>
          </Box>
          <Box className="mb-8" bg="black" p={4} borderRadius="md">
            <Heading fontFamily="'Space Mono', sans-serif" as="h2" size="lg" className="text-white" mb={2}>
              My Skills
            </Heading>
            <Box>
              <UnorderedList>
                {skills.map((skill) => (
                  <ListItem
                    key={skill.name}
                    onMouseEnter={() => handleSkillHover(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="hover:bg-gray-800"
                    style={{
                      backgroundColor:
                        hoveredSkill === skill ? "#374151" : "black",
                    }}
                    p={2}
                    borderRadius="md"
                  >
                    <Flex fontFamily="'Space Mono', sans-serif" className="text-white" alignItems="center">
                      <span className="mr-2">{skill.icon}</span>
                      {skill.name}
                      {/* {hoveredSkill === skill && (
                        <MotionText
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          variant="body1"
                          className="text-white ml-2"
                        >
                          {skill.description}
                        </MotionText>
                      )} */}
                    </Flex>
                  </ListItem>
                ))}
              </UnorderedList>
            </Box>
          </Box>
        </Box>
      )}
    </div>
      </Box>
    </ChakraProvider>
  );
}
