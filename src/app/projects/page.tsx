"use client";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@material-ui/core";
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
    },
    {
      name: "albamar.al",
      description: "A simple site not using any framework at the moment.",
      link: "https://albamar.al",
      icon: <FontAwesomeIcon icon={faHtml5} />,
    },
    {
      name: "MrMoth Academy",
      description:
        "A website made with Express, doesn't use any framework. (OS)",
      link: "https://github.com/MrMothDevs/MrMoth-Devs-Academy",
      icon: <FontAwesomeIcon icon={faJs} />,
    },
  ];

  return (
    <div>
      <Header />
      <div className="max-w-4xl mx-auto py-8 px-4">
        <Card
          className="mb-8 box-shadow"
          style={{ background: "linear-gradient(45deg, #1F2937, #2D3748)" }}
        >
          <CardHeader
            title={
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
                <span className="text-white">Projects</span>
              </div>
            }
          />
          <CardContent>
            <Typography variant="body1" className="text-white">
              Please note that most of my projects are private!
            </Typography>
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {projectData.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <Card
                className="transform transition duration-300 hover:-translate-y-1 hover:shadow-lg box-shadow"
                style={{ backgroundColor: "#1F2937" }}
              >
                <CardHeader
                  title={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {project.icon}
                      <span className="text-white ml-2">{project.name}</span>
                    </div>
                  }
                  className="text-white"
                />
                <CardContent>
                  <Typography variant="body1" className="text-white">
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
