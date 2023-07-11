"use client"
import {
  ChakraProvider,
  Box,
  Circle,
  Flex,
  Heading,
  HStack,
  IconButton,
  LinkBox,
  LinkOverlay,
  Text,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { FaUserSecret } from 'react-icons/fa';
import { animated, useTransition, useSpring } from 'react-spring';

import {
  FaBars,
  FaTimes,
  FaCodeBranch,
  FaUmbrellaBeach,
} from "react-icons/fa";
import '@fontsource/space-mono';
import { useEffect, useState } from "react";
import Link from "next/link";

interface Activity {
  state: string;
  details: string;
}

export default function Header() {

  const { isOpen, onToggle } = useDisclosure();
  const [status, setStatus] = useState("grey");
  const [codeActivity, setCodeActivity] = useState<Activity | null>(null);
  const [showSecurityText, setShowSecurityText] = useState(false);

  const transitions = useTransition(showSecurityText, {
    from: { opacity: 0, transform: "translateY(-10px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-10px)" },
  });

  const iconStyle = {
    display: "inline-block",
    marginRight: "0.5rem",
    transformOrigin: "center",
    transition: "transform 0.2s ease-in-out",
  };

  useEffect(() => {
    let socket: WebSocket | null = null;

    const startWebSocket = () => {
      socket = new WebSocket("wss://api.lanyard.rest/socket");

      socket.addEventListener("open", (event) => {
        console.log("WebSocket connection opened:", event);

        const initializeMessage = {
          op: 2,
          d: {
            subscribe_to_ids: ["399911902211473410"],
          },
        };
        socket?.send(JSON.stringify(initializeMessage));
      });

      socket.addEventListener("message", (event) => {
        console.log("WebSocket message received:", event);

        const message = JSON.parse(event.data.toString("utf-8"));
        switch (message.op) {
          case 0:
            switch (message.t) {
              case "INIT_STATE":
                console.log("INIT_STATE event:", message.d);
                const initStatus =
                  message.d["399911902211473410"].discord_status;
                setStatus(initStatus);

                const activities =
                  message.d["399911902211473410"].activities;
                let hasCodeActivity = false;
                let retrievedActivity: Activity | null = null;
                for (const activity of activities) {
                  if (activity.name === "Code") {
                    hasCodeActivity = true;

                    retrievedActivity = activity;
                    console.log(activity.state + " " + activity.details);
                    break;
                  }
                }

                // Update the state with retrieved activity values
                if (hasCodeActivity) {
                  setCodeActivity({
                    state: retrievedActivity!.state,
                    details: retrievedActivity!.details,
                  });
                } else {
                  setCodeActivity(null);
                }

                break;
              case "PRESENCE_UPDATE":
                console.log("PRESENCE_UPDATE event:", message.d);
                const presenceStatus = message.d.discord_status;
                setStatus(presenceStatus);

                // Update the activity with retrieved presence values
                const activity = message.d.activities.find(
                  (activity: { name: string }) => activity.name === "Code"
                );
                if (activity) {
                  setCodeActivity({
                    state: activity.state,
                    details: activity.details,
                  });
                } else {
                  setCodeActivity(null);
                }
                break;
            }

            break;
          default:
            console.log("Unhandled op code:", message.op);
            break;
        }
      });

      socket.addEventListener("close", (event) => {
        console.log("WebSocket connection closed:", event);
        setTimeout(startWebSocket, 3000); // Try to reconnect after 3 seconds
      });

      socket.addEventListener("error", (event) => {
        console.log("WebSocket error:", event);
      });

      return () => {
        socket?.close();
      };
    };

    startWebSocket();
  }, []);

  return (
    <ChakraProvider>
      <Box
        bgGradient='linear(to-tl,  #3e7e98 0%, #1f3f4c 35%, #142a32 50%)'
        color="white"
        py={4}
      >

        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          w="100%"
          maxW="container.xl"
          mx="auto"
          px={8}
        >
          <Flex align="center">
            <Heading as="h1" size="lg" letterSpacing={'tighter'} fontFamily="'Space Mono', sans-serif">
              Ergin's Portfolio
            </Heading>

          </Flex>

          <HStack
            as="ul"
            display={{ base: 'none', md: 'flex' }}
            spacing={4}
            align="center"
          >
            <Box as="li">
              <LinkBox>
                <Link href="/" onClick={onToggle}>
                  <Button
                    position="relative"
                    fontWeight="bold"
                    fontFamily="'Space Mono', sans-serif"
                    px={4}
                    py={2}
                    bg={'transparent'}
                    color="white"
                    overflow="hidden"
                    transition="font-weight 0.3s ease-in-out, font-size 0.3s ease-in-out"
                    _before={{
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#4893b1",
                      transformOrigin: "left",
                      transform: "scaleX(0)",
                      transition: "transform 0.3s ease-in-out",
                      zIndex: -1,
                    }}
                    _hover={{
                      fontWeight: 700,
                      fontSize: "xl",
                      color: "white",
                      _before: {
                        transformOrigin: "right",
                        transform: "scaleX(1)",
                      },
                    }}
                  >
                    Home
                  </Button>



                </Link>
              </LinkBox>
            </Box>
            <Box as="li">
              <LinkBox>
                <Link href="/projects" onClick={onToggle}>
                <Button
                    position="relative"
                    fontWeight="bold"
                    fontFamily="'Space Mono', sans-serif"
                    px={4}
                    py={2}
                    bg={'transparent'}
                    color="white"
                    overflow="hidden"
                    transition="font-weight 0.3s ease-in-out, font-size 0.3s ease-in-out"
                    _before={{
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#4893b1",
                      transformOrigin: "left",
                      transform: "scaleX(0)",
                      transition: "transform 0.3s ease-in-out",
                      zIndex: -1,
                    }}
                    _hover={{
                      fontWeight: 700,
                      fontSize: "xl",
                      color: "white",
                      _before: {
                        transformOrigin: "right",
                        transform: "scaleX(1)",
                      },
                    }}
                  >
                    Projects
                  </Button>
                </Link>
              </LinkBox>
            </Box>
            <Box as="li">
              <LinkBox>
                <Link href="/security" onClick={onToggle}>
               <Button
      position="relative"
      leftIcon={
        <animated.span style={{ ...iconStyle }}>
          <FaUserSecret />
        </animated.span>
      }
      fontWeight="bold"
      fontFamily="'Space Mono', sans-serif"
      px={4}
      py={2}
      w={32}
      bg={'transparent'}
      color="white"
      overflow="hidden"
      onMouseEnter={() => setShowSecurityText(true)}
      onMouseLeave={() => setShowSecurityText(false)}
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage:
          "linear-gradient(to right, red 0%, darkred 50%, red 100%)",
        transformOrigin: "left",
        transform: "scaleX(0)",
        transition: "transform 0.3s ease-in-out",
        zIndex: -1,
      }}
      _hover={{
        color: 'white',
        _before: {
          transformOrigin: "right",
          transform: "scaleX(1)",
        },
        "> span": {
          transform: "scale(1.2)",
        },
      }}
    >
      {transitions((styles, item) =>
        item ? (
          <animated.span style={{ ...styles, color: 'white', position:"relative", zIndex:"1", minWidth:"60px" }}>
            Security
          </animated.span>
        ) : (
          <animated.span style={{...styles, minWidth:"60px"}}>******</animated.span>
        )
      )}
    </Button>


                </Link>
              </LinkBox>
            </Box>
            <Box as="li" pl={4} borderLeft="2px solid white">
              <HStack spacing={2}>
                <Text fontWeight="bold" fontFamily="'Space Mono', sans-serif">
                  Grainger
                </Text>

                <Circle
                  size={3}
                  bg={
                    status === "online"
                      ? "green.500"
                      : status === "idle"
                        ? "yellow.500"
                        : status === "dnd"
                          ? "red.500"
                          : "gray.500"
                  }
                />
                {codeActivity && codeActivity.details ? (
                  <HStack spacing={2}>
                    <FaCodeBranch color="gray" />
                    <Box>
                      <Text fontWeight="semibold" fontSize="sm">
                        {codeActivity.state}
                      </Text>
                      <Text fontSize="xs">{codeActivity.details}</Text>
                    </Box>
                  </HStack>
                ) : (
                  <HStack spacing={2}>
                    <FaUmbrellaBeach color="gray" />
                    <Text fontSize="sm">Not coding at this moment!</Text>
                  </HStack>
                )}
              </HStack>
            </Box>
          </HStack>

          <IconButton
            display={{ base: "flex", md: "none" }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            icon={isOpen ? <FaTimes /> : <FaBars />}
            onClick={onToggle}
          />

          {isOpen && (
            <Box
              as="ul"
              position="absolute"
              top={0}
              left={0}
              w="full"
              h="full"
              bgGradient='linear(to-bl,  #3e7e98 0%, #1f3f4c 35%, #142a32 50%)'
              zIndex={20}
              display={{ base: "flex", md: "none" }}
              flexDirection="column"
              alignItems="center"
              mt={24}
            >
              <Box as="li">
                <LinkBox>
                  <LinkOverlay href="/" onClick={onToggle}>
                    <Text
                      fontWeight="bold"
                      px={4}
                      py={2}
                      fontFamily="'Space Mono', sans-serif"
                      _hover={{
                        bgGradient: "linear(to-r, red.500, blue.500, blue.900)",
                        bgClip: "text",
                        color: "white",
                        transitionDuration: "0.2s",
                        boxShadow: "lg",
                      }}
                    >
                      Home
                    </Text>


                  </LinkOverlay>
                </LinkBox>
              </Box>
              <Box as="li" mt={3}>
                <LinkBox>
                  <LinkOverlay href="/projects" onClick={onToggle}>
                    <Text
                      fontWeight="bold"
                      fontFamily="'Space Mono', sans-serif"
                      px={4}
                      py={2}
                      _hover={{
                        bgGradient:
                          "linear(to-r, red.500, blue.500, blue.900)",
                        bgClip: "text",
                        color: "white",
                        transitionDuration: "0.2s",
                      }}
                    >
                      Projects
                    </Text>
                  </LinkOverlay>
                </LinkBox>
              </Box>
              <Box as="li" mt={3}>
                <LinkBox>
                  <LinkOverlay href="/security" onClick={onToggle}>
                    <Text
                      fontWeight="bold"
                      fontFamily="'Space Mono', sans-serif"
                      px={4}
                      py={2}
                      _hover={{
                        bgGradient:
                          "linear(to-r, red.500, blue.500, blue.900)",
                        bgClip: "text",
                        color: "white",
                        transitionDuration: "0.2s",
                      }}
                    >
                      Security
                    </Text>
                  </LinkOverlay>
                </LinkBox>
              </Box>
            </Box>
          )}
        </Flex>
      </Box>
    </ChakraProvider>
  );
}