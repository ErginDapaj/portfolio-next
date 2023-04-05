"use client"
import { Box, Card, CardContent, CardHeader, Typography, Modal } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Header from '../components/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';

import Loader from '../components/loader';
import { faCss3Alt, faHtml5, faJs, faJsSquare, faNodeJs, faVuejs, faReact } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
interface Security {
    icon: IconName;
    name: string;
    description: string;
    image: string;
    link: string;
}

export default function Security() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [securityData, setSecurityData] = useState<Security[]>([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        async function fetchData() {
            const res = await fetch('/api/security');
            const data = await res.json();

            setSecurityData(data);
            setIsLoading(false)
        }
        fetchData();

    }, []);
    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const getIcon = (iconName: IconName) => {
        switch (iconName) {
            case 'react':
                return <FontAwesomeIcon icon={faReact} />;
            case 'css3-alt':
                return <FontAwesomeIcon icon={faCss3Alt} />;
            case 'js-square':
                return <FontAwesomeIcon icon={faJsSquare} />;
            case 'html5':
                return <FontAwesomeIcon icon={faHtml5} />;
            case 'js':
                return <FontAwesomeIcon icon={faJs} />;
            case 'vuejs':
                return <FontAwesomeIcon icon={faVuejs} />;
            default:
                return null;
        }
    }

    return (
        <div>
            <Header />
            <div className="max-w-4xl mx-auto py-8 px-4">
                <Card
                    className="mb-8"
                    style={{ background: 'linear-gradient(45deg, #1F2937, #2D3748)' }}
                >
                    <CardHeader
                        title={
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-alert-circle mr-2"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                </svg>
                                <span className="text-white">Disclaimer</span>
                            </div>
                        }
                        className="text-white"
                    />
                    <CardContent>
                        <Typography variant="body1" className="text-white">
                            Listing vulnerabilities found on websites is a sensitive matter and can be illegal in
                            certain situations. Please keep in mind that most of the sites listed here are private
                            and the owners may not want their vulnerabilities exposed. Therefore, the list of
                            vulnerabilities shown here is very limited and does not represent the full scope of
                            vulnerabilities found on these websites.
                        </Typography>
                        <Box mt={4}>
                            <button
                                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                                onClick={handleModalOpen}
                            >
                                Read More
                            </button>
                        </Box>
                    </CardContent>
                </Card>
                <Modal open={isModalOpen} onClose={handleModalClose}>
                    <div className="bg-gray-900 rounded-md p-4">
                        <Typography variant="h4" className="text-white mb-4">
                            Disclaimer
                        </Typography>
                        <Typography variant="body1" className="text-white">
                            The purpose of this site is to provide information about my findings. However, listing vulnerabilities found on websites can be a
                            sensitive matter and can be illegal in certain situations. Please keep in mind that
                            most of the sites listed here are private and the owners may not want their
                            vulnerabilities exposed. Therefore, the list of vulnerabilities shown here is very
                            limited and does not represent the full scope of vulnerabilities found on these
                            websites.
                        </Typography>
                    </div>
                </Modal>
                {isLoading ? (
        <Loader progress={0} />
      ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {securityData.map((project, index) => (
                        <Card key={index} style={{
                            background: 'linear-gradient(45deg, #1F2937, #2D3748)',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2), 0 6px 12px rgba(0, 0, 0, 0.2)',
                            borderRadius: '10px',
                            color: '#fff',
                            height: '100%'
                        }}>
                            <CardContent>
                                <div className="flex justify-center">{getIcon(project.icon)}</div>
                                <Typography variant="h5" className="mt-4 mb-2 text-center font-bold">
                                    {project.name}
                                </Typography>
                                <Typography variant="body1" className="text-center">
                                    {project.description}
                                </Typography>
                            </CardContent>
                            <Box mt={2} mb={2} className="flex justify-center">
                                <img src={project.image} alt={`${project.name} screenshot`} style={{
                                    maxWidth: '100%',
                                    height: 'auto'
                                }} />
                            </Box>
                            <CardContent>
                                <Box textAlign="center">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                                        style={{
                                            textDecoration: 'none'
                                        }}
                                    >
                                        Visit Website
                                    </a>
                                </Box>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                )}

            </div>
        </div>
    );
}
