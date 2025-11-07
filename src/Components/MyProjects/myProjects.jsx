import React, { useRef, useState, useEffect } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ProjectCard from './ProjectCard/projectCard';
import info from '../../data/info.json';
import { Box, Typography, IconButton } from "@mui/material";



const Projects = () => {
    const scrollReff = useRef(null);
    const [isScrolledRight, setIsScrolledRight] = useState(false);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const scrollHandler = (direction) => {
        if (!scrollReff.current) return;
        const scrollAmount = 1000;

        if (direction === 'right') {
            scrollReff.current.scrollLeft += scrollAmount;
            setShowLeftArrow(true);
        } else {
            scrollReff.current.scrollLeft -= scrollAmount;
            if (scrollReff.current.scrollLeft <= 1) {
                setShowLeftArrow(false);
            }
        }
        const maxScrollLeft = scrollReff.current.scrollWidth - scrollReff.current.clientWidth;
        if (scrollReff.current.scrollLeft >= maxScrollLeft) {
            setShowRightArrow(false);
        } else {
            setShowRightArrow(true);
        }
    }

    useEffect(() => {
        const el = scrollReff.current;
        if (!el) return;
        const handleScroll = () => {
            const maxScrollLeft = el.scrollWidth - el.clientWidth;
            const currentScroll = el.scrollLeft;
            setShowLeftArrow(currentScroll > 0);
            setShowRightArrow(currentScroll < maxScrollLeft - 1);
        };
        el.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        handleScroll();
        return () => {
            el.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);



    return (
        <Box sx={{ position: 'relative' }}>
            <Box sx={{ marginBottom: '2rem' }}>
                <Typography variant='h4' style={{
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    color: 'white'
                }}>Check out my projects</Typography>
            </Box>
            <Box
                ref={scrollReff}
                sx={{
                    height: "50vh",
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '3rem',
                    overflowX: 'auto',
                    scrollBehavior: 'smooth',
                    overflowY: 'hidden',
                    whiteSpace: 'nowrap',
                    position: 'relative',
                    '&::-webkit-scrollbar': { display: 'none' }
                }}
            >
                {Object.values(info.projects).map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                    />
                ))}
            </Box>
            {showRightArrow && (
                <IconButton
                    onClick={() => scrollHandler('right')}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        right: '1rem',
                        transform: 'translateY(-50%)',
                        backgroundColor: 'grey',
                        border: '5px solid grey',
                        borderRadius: '50%',
                        '&:hover': { backgroundColor: '#666' },
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px' }}>
                        <ArrowForwardIosIcon sx={{ color: 'white', fontSize: '1.2rem' }} />
                    </Box>
                </IconButton>
            )}
            {showLeftArrow && (
                <IconButton
                    onClick={() => scrollHandler('left')}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '1rem',
                        transform: 'translateY(-50%)',
                        backgroundColor: 'grey',
                        border: '5px solid grey',
                        borderRadius: '50%',
                        '&:hover': { backgroundColor: '#666' },
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px' }}>
                        <ArrowBackIosIcon sx={{ color: 'white', fontSize: '1.2rem', ml: '0.3rem' }} />
                    </Box>
                </IconButton>
            )}
        </Box>
    );

}
export default Projects