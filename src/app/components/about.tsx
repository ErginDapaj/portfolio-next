"use client"
import { Box, Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import React from 'react';
import Header from '../components/header';
export default function About() {
  return (
    <div>
    <Header />
    <Box className="p-4 max-w-4xl mx-auto">
      <Card className="mb-8" style={{ backgroundColor: '#1F2937' }}>
        <CardHeader title="About Me" className="text-white" />
        <CardContent>
          <Typography variant="body1" className="text-white">
            With over 5 years of experience as a freelancer, I bring a wealth of expertise in the MERN stack to every project I work on. Whether I'm starting a project from scratch or completing existing sites, I have a passion for delivering top-notch results. My focus on e-commerce development has honed my skills in creating seamless shopping experiences for online consumers.
          </Typography>
          <Typography variant="body1" className="text-white mt-4">
            I'm always open to collaboration opportunities, and I'm eager to bring my passion and expertise to new projects. If you're looking for a seasoned professional to bring your vision to life, I'd love to chat! Check out my LinkedIn profile to see some of my recent work and connect with me today. Let's make something amazing together!
          </Typography>
        </CardContent>
      </Card>
    </Box>
    </div>
  );
}
