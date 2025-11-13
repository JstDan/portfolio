import { Box, Typography, Button } from '@mui/material';
import info from '../../data/info.json';

const Hero = () => {
    const { name, classification, image, button } = info.hero;
    const { buttonLabel } = button;

    return (
        <Box
            sx={{
                width: '100%',
                minHeight: { xs: '80vh', md: '70vh' },
                backgroundColor: '#DAA520',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                pt: { xs: '5.5rem', md: '6.5rem' },
                pb: { xs: '3rem', md: '4rem' },
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    maxWidth: '1200px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: { xs: 'column-reverse', md: 'row' },
                    gap: { xs: '2.5rem', md: '10%' },
                    px: { xs: 2, sm: 3 },
                }}
            >
                <Box
                    sx={{
                        width: { xs: '100%', md: '45%' },
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: { xs: 'center', md: 'flex-start' },
                        textAlign: { xs: 'center', md: 'left' },
                        gap: '0.7rem',
                    }}
                >
                    <Typography sx={{ fontSize: { xs: '1.75rem', md: '2rem' }, fontWeight: 600, color: 'white' }}>
                        Welcome to my portfolio,
                    </Typography>
                    <Typography sx={{ fontSize: { xs: '1.75rem', md: '2rem' }, fontWeight: 600, color: 'white' }}>
                        I'm {name}
                    </Typography>
                    <Typography sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' }, fontWeight: 600, color: 'white' }}>
                        {classification}
                    </Typography>
                    <Button
                        color="inherit"
                        onClick={() => {
                            if (!window.confirm("Are you sure you want to download Daniel's CV?")) return;
                            const link = document.createElement("a");
                            link.href = info.cv.file;
                            link.download = "DanielMihaylovCV.pdf";
                            link.click();
                        }}
                        sx={{
                            height: '2.75rem',
                            width: { xs: '100%', sm: '12rem' },
                            maxWidth: '15rem',
                            backgroundColor: 'white',
                            color: 'black',
                            borderRadius: '40px',
                            fontSize: '1rem',
                            fontWeight: 800,
                            mt: '1rem',
                        }}
                    >
                        {buttonLabel}
                    </Button>
                </Box>
                <Box
                    sx={{
                        width: { xs: '70%', sm: '60%', md: '45%' },
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <img
                        style={{ width: '100%', maxWidth: '320px', borderRadius: '50%' }}
                        src={image}
                        alt="Avatar"
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Hero;
