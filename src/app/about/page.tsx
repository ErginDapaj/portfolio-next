"use client";
import { useState, useEffect, useRef } from "react";
import Header from "../components/header";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@material-ui/core";

export default function About() {
  return (
    <div>
      <Header />
      <div className="max-w-4xl mx-auto py-8 px-4">
        <Card
          className="mb-8 box-shadow"
          style={{ backgroundColor: "#1F2937" }}
        >
          <CardHeader title="About Me" className="text-white" />
          <CardContent>
            <Typography variant="body1" className="text-white">
              With over 5 years of experience as a freelancer, I bring a wealth
              of expertise in the MERN stack to every project I work on. Whether
              I'm starting a project from scratch or completing existing sites,
              I have a passion for delivering top-notch results. My focus on
              e-commerce development has honed my skills in creating seamless
              shopping experiences for online consumers.
            </Typography>
            <Typography variant="body1" className="text-white mt-4">
              I'm always open to collaboration opportunities, and I'm eager to
              bring my passion and expertise to new projects. If you're looking
              for a seasoned professional to bring your vision to life, I'd love
              to chat! Check out my LinkedIn profile to see some of my recent
              work and connect with me today. Let's make something amazing
              together!
            </Typography>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <Card style={{ backgroundColor: "#1F2937" }} className="box-shadow">
            <CardHeader title="Experience" className="text-white" />
            <CardContent>
              <Typography variant="body1" className="text-white">
                I've been passionate about programming since a young age. At
                just 13 years old, I started modding games with C# which sparked
                my interest in the programming world. I was fascinated by the
                magic of programming and the ability it gave me to create
                something from scratch. As time passed, I found myself working
                on Discord bots using Node.js and eventually built a dashboard
                for my bot site. Over the years, I have honed my skills in web
                development and have built dozens of websites as a freelancer on
                platforms like Fiverr. Even today, web development is one of my
                favorite things to do and I continue to work on it as a side
                hustle. The satisfaction of building something from scratch and
                seeing it come to life never gets old.
              </Typography>
            </CardContent>
          </Card>
          <Card style={{ backgroundColor: "#1F2937" }} className="box-shadow">
            <CardHeader title="Skills" className="text-white" />
            <CardContent>
              <Typography variant="body1" className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
                neque vestibulum, vestibulum libero vel, ultrices urna. Praesent
                ultrices est ut risus ornare, vel gravida mi lobortis. Nunc
                vitae magna et ex consectetur sagittis.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
