import React from 'react';
import { AppBar, Box, Typography, Button, Toolbar, Container } from '@mui/material';

const Header = () => {
    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    width: '100%',
                    backgroundColor: 'rgba(40,44,52,0.7)',
                    backdropFilter: 'blur(8px)',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: 'none',
                    left: 0,
                    top: 0,
                    zIndex: 1100,
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar
                        disableGutters
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingX: '1rem',
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                color: 'white',
                                fontWeight: 'bold',
                            }}
                        >
                            YOUR NAME
                        </Typography>

                        <Box sx={{ display: 'flex', gap: '1rem' }}>
                            <Button color="inherit">
                                <Typography variant="subtitle2">CV</Typography>
                            </Button>
                            <Button color="inherit">
                                <Typography variant="subtitle2">About Me</Typography>
                            </Button>
                            <Button color="inherit">
                                <Typography variant="subtitle2">Services</Typography>
                            </Button>
                            <Button
                                sx={{
                                    backgroundColor: '#315cb2ff',
                                    '&:hover': { backgroundColor: '#224a8b' },
                                }}
                            >
                                <Typography variant="subtitle2" sx={{ color: 'white', fontWeight: '500' }}>Contact</Typography>
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Spacer to offset the fixed header height */}
            <Toolbar />
        </>
    );
};

export default Header;