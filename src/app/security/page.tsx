"use client"
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
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  useColorModeValue,
  Grid,
  GridItem
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "../components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FaLock } from "react-icons/fa";
import Loader from "../components/loader";
import '@fontsource/space-mono';

import {
  faCss3Alt,
  faHtml5,
  faJs,
  faJsSquare,
  faNodeJs,
  faVuejs,
  faReact
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { faLock } from "@fortawesome/free-solid-svg-icons";

interface Security {
  icon: IconName;
  name: string;
  description: string;
  severity: string;
  image: string;
  link: string;
}

export default function Security() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState<Security | null>(
    null
  );
  const [securityData, setSecurityData] = useState<Security[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/security");
      const data = await res.json();

      setSecurityData(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);


  const getIcon = (iconName: IconName) => {
    switch (iconName) {
      case "react":
        return <FontAwesomeIcon icon={faReact} />;
      case "css3-alt":
        return <FontAwesomeIcon icon={faCss3Alt} />;
      case "js-square":
        return <FontAwesomeIcon icon={faJsSquare} />;
      case "html5":
        return <FontAwesomeIcon icon={faHtml5} />;
      case "js":
        return <FontAwesomeIcon icon={faJs} />;
      case "vuejs":
        return <FontAwesomeIcon icon={faVuejs} />;
      default:
        return null;
    }
  };

  return (
    <ChakraProvider>
      <div>
      <Box
  minHeight="100vh"
  display="flex"
  flexDirection="column"
  bgGradient='linear(to-bl,  #3e7e98 0%, #1f3f4c 35%, #142a32 50%)'
  backgroundSize="100% 200%"
>
          <Header />
          <Box mt={20} mb={10}>
            <Heading as="h1" size="2xl" fontFamily="'Space Mono', sans-serif" textAlign="center" color="white">
              Security
            </Heading>
            <Text fontSize="xl" fontFamily="'Space Mono', sans-serif" textAlign="center" color="white">
              Check out some of my security-related projects below.
            </Text>
          </Box>
          {isLoading ? (
            <Flex alignItems="center" justifyContent="center" height="50vh">
            <CircularProgress isIndeterminate color="#2a9df5" />
          </Flex>
          ) : (
            <Box px={10}>
              <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={6}>
              {securityData.map((project, index) => (
         <GridItem
         key={index}
         bgGradient={`linear(to-br, ${
           project.severity === 'High'
             ? 'black, darkred'
             : project.severity === 'Medium'
             ? 'black, darkorange'
             : 'black, darkgreen'
         })`}
         boxShadow="md"
         borderRadius="lg"
         overflow="hidden"
         onClick={() => {
           setSelectedProject(project);
           onOpen();
         }}
         cursor="pointer"
         transition="all 0.2s ease-in-out"
         _hover={{
           transform: 'translateY(-4px)',
           boxShadow: 'lg',
         }}
       >
         <Box p={6}>
           <Flex color="white" alignItems="center" mb={4}>
             {getIcon(project.icon)}
             <Text ml={2} fontWeight="semibold" fontFamily="'Space Mono', sans-serif" isTruncated title={project.name} color="white">
               {project.name}
             </Text>
           </Flex>
       
           <Box>
             <Text color="gray.300" fontFamily="'Space Mono', sans-serif"  fontSize="md">
               {project.description}
             </Text>
           </Box>
         </Box>
         <Box py={4} px={6} bg="gray.700">
           <Flex justifyContent="space-between">
             <Text fontWeight="semibold" fontFamily="'Space Mono', sans-serif"  fontSize="md" color="gray.200" >
               Severity:
             </Text>
             <Text fontFamily="'Space Mono', sans-serif" 
               fontSize="md"
               color={
                 project.severity === "High"
                   ? "red.500"
                   : project.severity === "Medium"
                   ? "orange.500"
                   : "gray.500"
               }
             >
               {project.severity}
             </Text>
           </Flex>
           <Flex justifyContent="space-between" mt={2}>
             <Text fontWeight="semibold" fontFamily="'Space Mono', sans-serif"  fontSize="md" color="gray.200">
               Vulnerability Type:
             </Text>
             <Flex fontFamily="'Space Mono', sans-serif"  alignItems="center">
               <FontAwesomeIcon icon={faLock} size="sm" color="#000" className="lock-icon" />
             </Flex>
           </Flex>
         </Box>
       </GridItem>
       
                ))}
              </Grid>
            </Box>
          )}
          </Box>
          

        {/* )} */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <Box
            maxW="600px"
            borderRadius="md"
            boxShadow="md"
          >
            <ModalContent
  maxW="600px"
  bgGradient={`linear(to-b, ${
    selectedProject?.severity === 'High'
      ? 'black, darkred'
      : selectedProject?.severity === 'Medium'
      ? 'black, darkorange'
      : 'black, darkgreen'
  }, rgba(0, 0, 0, 0.3))`}
>

<ModalHeader
  color="gray.300"
  fontSize="2xl"
  fontWeight="bold"
  mb={2}
  fontFamily="'Space Mono', sans-serif" 
>
  {selectedProject?.name}
</ModalHeader>

              <ModalCloseButton />
              <ModalBody>
                <Box mb={4}>
                  <Image
                    src={selectedProject?.image}
                    alt={`Screenshot of ${selectedProject?.name} website`}
                    objectFit="cover"
                    maxH="400px"
                    w="100%"
                    borderRadius="md"
                  />
                </Box>
                <Box mb={4}>
                  <Text fontSize="lg" color="gray.300">
                    {selectedProject?.description}
                  </Text>
                </Box>
                <Flex justify="flex-end">
                  <Button
                    colorScheme="blue"
                    variant="outline"
                    fontFamily="'Space Mono', sans-serif" 
                    onClick={() =>
                      window.open(selectedProject?.link, '_blank')
                    }
                  >
                    Visit Website
                  </Button>
                </Flex>
              </ModalBody>
            </ModalContent>
          </Box>
        </Modal>
      </div>
    </ChakraProvider>

  );

}
