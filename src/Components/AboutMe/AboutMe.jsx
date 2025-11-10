import React from 'react';
import {
    AppBar,
    Box,
    Typography,
    Button,
} from '@mui/material';
import info from '../../data/info.json';
const Aboutme = () => {
    const { title, titleDescription, subtitle, image, buttons } = info.aboutme
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='h4' style={{
                fontWeight: '300',
                textTransform: 'uppercase',
                color: 'white'
            }}>About Me</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '5rem', height: '50vh' }}>
                <Box sx={{ width: '100%' }} >
                    <img
                        src={image}
                        alt="Aboutme"
                        style={{
                            transform: 'scale(0.8)',
                            objectFit: 'cover',
                            borderRadius: '1rem',
                        }}
                    />
                </Box>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', color: 'white', gap: '2rem' }} >
                    <Typography sx={{ fontSize: '1.5rem', textAlign: 'left' }}>{title}
                        <Typography sx={{ fontSize: '0.9rem', fontWeight: '600', textAlign: 'left' }}>{titleDescription}</Typography>
                    </Typography>
                    <Typography sx={{ fontSize: '0.9rem', textAlign: 'left' }}>{subtitle}</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.1rem' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: '0.5rem' }}>
                            <Typography sx={{ fontWeight: '300', color: '#2ebdf5ff' }}>Email :</Typography>
                            <Typography>d.e.mihaylov@gmail.com</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: '0.5rem' }}>
                            <Typography sx={{ fontWeight: '300', color: '#2ebdf5ff' }}>Location :</Typography>
                            <Typography>Varna / Bulgaria</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '2rem' }}>
                        <Button sx={{ backgroundColor: 'white', width: '10rem', height: '3rem', color: 'black', fontSize: '1rem', fontWeight: 'bold', borderRadius: '2rem' }}>{buttons.buttonFirst}</Button>
                        <Button sx={{ border: '2px solid white', width: '10rem', height: '3rem', color: 'white', fontSize: '1rem', fontWeight: 'bold', borderRadius: '2rem' }}>{buttons.buttonSecond}</Button>
                    </Box>
                </Box>
            </Box >
        </Box>
    );
}

export default Aboutme;
