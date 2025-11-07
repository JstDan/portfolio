import React from 'react';
import {
    AppBar,
    Box,
    Typography,
    Button
} from '@mui/material';

const Header = () => {
    return (
        <>
            <AppBar
                position="static"
                sx={{
                    backgroundColor: 'transparent',
                    borderBottom: '2px solid #282C34',
                    boxShadow: 'none',
                    backgroundColor: '#282C34'
                }}
            >
                <Box
                    maxWidth="lg"
                    disableGutters={false}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingX: '2rem',
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            color: 'white',
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        YOUR NAME
                    </Typography>

                    <Box sx={{ display: 'flex', gap: '1rem', paddingY: '1rem', backgroundColor: 'transparent' }}>
                        <Button color="inherit" sx={{ width: '6rem', backgroundColor: '#282C34' }}>
                            <Typography variant="h7">CV</Typography>
                        </Button>
                        <Button color="inherit" sx={{ width: '6rem', backgroundColor: '#282C34' }}>
                            <Typography variant="h7">About Me</Typography>
                        </Button>
                        <Button color="inherit" sx={{ width: '6rem', backgroundColor: '#282C34' }}>
                            <Typography variant="h7">Services</Typography>
                        </Button>
                        <Button color="inherit" sx={{ width: '6rem', backgroundColor: '#315cb2ff' }}>
                            <Typography variant="h7">Contact</Typography>
                        </Button>
                    </Box>
                </Box>
            </AppBar>
            <Box sx={{ backgroundColor: '#cdcbcbfe', width: '100%', height: '1px' }} />
        </>
    );
};

export default Header;