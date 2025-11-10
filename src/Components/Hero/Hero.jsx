import { Box, Typography, Button } from '@mui/material'
import info from '../../data/info.json';
const Hero = () => {
    const { name, classification, image, button } = info.hero;
    const { buttonLabel, buttonLink } = button;
    return (
        <Box sx={{
            gap: '10%',
            width: '100%',
            minHeight: '80vh',
            backgroundColor: '#DAA520',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Box sx={{
                maxWidth: '1200px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                gap: '10%'
            }}>
                <Box sx={{ width: '45%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', gap: '0.7rem', marginLeft: '3rem' }}>
                    <Typography sx={{ fontSize: '2rem', fontWeight: '600', textAlign: 'left', color: 'white' }}>Hi there,</Typography>
                    <Typography sx={{ fontSize: '2rem', fontWeight: '600', textAlign: 'left', color: 'white' }}>I'm {name}</Typography>
                    <Typography sx={{ fontSize: '1.5rem', fontWeight: '600', textAlign: 'left', color: 'white' }}>{classification}</Typography>
                    <Button sx={{
                        height: '2.5rem',
                        width: '10rem',
                        backgroundColor: 'white',
                        color: 'black',
                        borderRadius: '40px',
                        fontSize: '1rem',
                        fontWeight: '800',
                        marginTop: '1rem'
                    }}>
                        {buttonLabel}
                    </Button>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '45%' }}>
                    <img style={{ width: '70%' }} src={image} alt='Avatar Image' />
                </Box>
            </Box >
        </Box>
    )
}; export default Hero 