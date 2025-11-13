import React from 'react';
import {
    Box,
    Typography,
    Button,
} from '@mui/material';
import info from '../../data/info.json';
const Aboutme = () => {
    const { title, titleDescription, subtitle, image, buttons, email, location } = info.aboutme
    return (
        <Box id="about-me" sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: { xs: '2rem', md: '3rem' } }}>
            <Typography variant='h4' style={{
                fontWeight: '300',
                textTransform: 'uppercase',
                color: 'white'
            }}>About Me</Typography>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: {
                    xs: 'column',
                    md: 'row',
                },
                gap: { xs: '2rem', md: '4rem' },
            }}>
                <Box sx={{ width: { xs: '100%', md: '45%' }, display: 'flex', justifyContent: 'center' }} >
                    <img
                        src={image}
                        alt="Aboutme"
                        style={{
                            width: '100%',
                            maxWidth: '320px',
                            objectFit: 'cover',
                            borderRadius: '1rem',
                        }}
                    />
                </Box>
                <Box sx={{ width: { xs: '100%', md: '55%' }, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', color: 'white', gap: '1.5rem' }} >
                    <Typography sx={{ fontSize: '1.4rem', textAlign: 'left' }}>{title}
                        <Typography sx={{ fontSize: '0.95rem', fontWeight: '600', textAlign: 'left', mt: '0.5rem' }}>{titleDescription}</Typography>
                    </Typography>
                    <Typography sx={{ fontSize: '0.95rem', textAlign: 'left', lineHeight: 1.6 }}>{subtitle}</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.1rem' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: '0.5rem' }}>
                            <Typography sx={{ fontWeight: '300', color: '#2ebdf5ff' }}>Email :</Typography>
                            <Typography>{email}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: '0.5rem' }}>
                            <Typography sx={{ fontWeight: '300', color: '#2ebdf5ff' }}>Location :</Typography>
                            <Typography>{location}</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: '1rem', width: '100%' }}>
                        <Button
                            onClick={() => {
                                const section = document.getElementById('projects');
                                if (section) {
                                    const yOffset = -110;
                                    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                    window.scrollTo({ top: y, behavior: 'smooth' });
                                }
                            }}
                            sx={{
                                backgroundColor: 'white',
                                width: { xs: '100%', sm: '12rem' },
                                height: '3rem',
                                color: 'black',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                borderRadius: '2rem'
                            }}>{buttons.buttonFirst}</Button>
                        <Button
                            onClick={() => {
                                const section = document.getElementById('contacts');
                                if (section) {
                                    const yOffset = 0;
                                    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                    window.scrollTo({ top: y, behavior: 'smooth' });
                                }
                            }}
                            sx={{
                                border: '2px solid white',
                                width: { xs: '100%', sm: '12rem' },
                                height: '3rem',
                                color: 'white',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                borderRadius: '2rem'
                            }}>{buttons.buttonSecond}</Button>
                    </Box>
                </Box>
            </Box >
        </Box>
    );
}

export default Aboutme;
