import React from 'react';
import { Typography, Box, Button } from "@mui/material";

const ProjectCard = ({ title, description, image, button }) => {
    return (
        <Box
            sx={{
                aspectRatio: '2/3',
                height: '100%',
                borderRadius: '30px',
                flexShrink: 0,
                backgroundColor: '#1a1a1a',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: '1rem',
                gap: '0.5rem',
                position: 'relative',
                overflow: 'hidden',
                '&:hover .slide-up-btn': {
                    bottom: '1rem',
                    opacity: 1
                },
                '&:hover .hover-overlay': {
                    opacity: 0.5
                },
                '&:hover .slide-up-buttons': {
                    bottom: 0
                }
            }}
        >
            <img
                src={image}
                style={{
                    width: '100%',
                    height: '70%',
                    borderRadius: '15px',
                    objectFit: 'cover',
                }}
            />
            <Typography variant="h6" sx={{
                color: 'white',
                width: '90%',
                textAlign: 'left'
            }}>
                {title}
            </Typography>
            <Typography
                variant="body2"
                sx={{
                    color: 'gray',
                    textAlign: 'center',
                    width: '90%',
                    wordWrap: 'break-word',
                    whiteSpace: 'normal',
                    overflow: 'hidden',
                    textAlign: 'left'
                }}
            >
                {description}
            </Typography>
            <Box className="slide-up-buttons" sx={{
                position: 'absolute',
                bottom: '-100%',
                left: 0,
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: '1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.63)',
                padding: '1rem 1.5rem',
                transition: 'bottom 0.4s ease'
            }}>
                <Button
                    href={button?.firstButtonLink}
                    sx={{
                        width: '10rem',
                        backgroundColor: '#325CB1',
                        color: '#fff',
                        textTransform: 'none',
                        '&:hover': { backgroundColor: '#082255ff' },
                        borderRadius: '30px'
                    }}>
                    <Typography sx={{ fontWeight: '600' }}>Project</Typography>
                </Button>
                <Button
                    href={button?.secondButtonLink}
                    sx={{
                        width: '10rem',
                        backgroundColor: '#325CB1',
                        color: '#fff',
                        textTransform: 'none',
                        '&:hover': { backgroundColor: '#082255ff' },
                        borderRadius: '30px'
                    }}>
                    <Typography sx={{ fontWeight: '600' }}>Source</Typography>
                </Button>
            </Box>
        </Box >
    );
};

export default ProjectCard;