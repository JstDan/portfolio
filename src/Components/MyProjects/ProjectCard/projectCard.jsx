import React from 'react';
import { Typography, Box } from "@mui/material";

const ProjectCard = ({ title, description, image }) => {
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
                gap: '0.5rem'
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
        </Box>
    );
};

export default ProjectCard;