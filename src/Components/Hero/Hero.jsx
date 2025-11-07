import React from 'react';
import {
    AppBar,
    Box,
    Typography,
    Button,
} from '@mui/material';
import info from '../../data/info.json';
const Hero = () => {
    const { title, titleDescription, subtitle, image, buttons } = info.hero
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '5rem', height: '50vh', marginTop: '2rem' }}>
            <Box sx={{ width: '100%' }} >
                <img
                    src={image}
                    alt="Hero"
                    style={{
                        transform: 'scale(0.8)',
                        objectFit: 'cover',
                        borderRadius: '1rem',
                    }}
                />
            </Box>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', color: 'white', paddingTop: '2rem', gap: '3rem' }} >
                <Typography sx={{ fontSize: '1.8rem', textAlign: 'left' }}>{title}<Typography sx={{ fontSize: '1rem', textAlign: 'left' }}>{titleDescription}</Typography></Typography>
                <Typography sx={{ fontSize: '1.1rem', textAlign: 'left' }}>{subtitle}</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '2rem' }}>
                    <Button sx={{ backgroundColor: 'white', width: '10rem', height: '3rem', color: 'black', fontSize: '1rem', fontWeight: 'bold', borderRadius: '2rem' }}>{buttons.buttonFirst}</Button>
                    <Button sx={{ border: '2px solid white', width: '10rem', height: '3rem', color: 'white', fontSize: '1rem', fontWeight: 'bold', borderRadius: '2rem' }}>{buttons.buttonSecond}</Button>
                </Box>
            </Box>
        </Box >
    );
}

export default Hero;
