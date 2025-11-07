import { Box, Button, Typography, IconButton, TextField, Link } from "@mui/material";
const Contact = () => {
    const textFieldStyle = {
        width: '20rem',
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        },
        '& .MuiInputLabel-root': {
            color: 'white',
        },
        '& .MuiInputBase-input': {
            color: 'white',
        },
        '& .MuiInputBase-input::placeholder': {
            color: 'white',
            opacity: 1,
        },
    };
    return (
        <Box>
            <Typography variant='h4' sx={{ display: 'flex', flexDirection: 'column', textTransform: 'uppercase', fontWeight: '600', color: 'white' }}>Contact me</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', color: 'white' }}>
                <Box sx={{ marginX: '2rem', marginBottom: '2rem' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.6rem'
                        }}>
                        <Box sx={{
                            display: 'flex', flexDirection: 'column', alignItems: 'flex-start', color: 'white'
                        }}>
                            <Typography sx={{ marginY: '0.5rem' }}>Names:</Typography>
                            <TextField sx={textFieldStyle} required label='Enter your names' />
                        </Box>
                        <Box sx={{
                            display: 'flex', flexDirection: 'column', alignItems: 'flex-start'
                        }}>
                            <Typography
                                sx={{ marginY: '0.5rem' }}>Email:</Typography>
                            <TextField sx={textFieldStyle} required label='Enter your email' />
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start'
                            }}
                        >
                            <Typography sx={{ marginY: '0.5rem' }}>Questions:</Typography>
                            <TextField sx={textFieldStyle} required label='Type your inquiries here' />
                        </Box>
                        <Button sx={{ border: '2px solid grey', width: '20rem', height: '3rem', color: 'white', fontSize: '1rem', fontWeight: 'bold', borderRadius: '2rem' }}>Submit</Button>
                    </Box>
                </Box >
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: '5rem' }}>
                    <Box>
                        <Typography
                            variant="h6"
                            sx={{ textTransform: 'uppercase', textAlign: 'left' }}>Linkedin:</Typography>
                        <Link
                            href="https://www.linkedin.com/in/daniel-mihaylov-279188301/"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="inherit">
                            <Typography variant="h6"
                                sx={{ textAlign: 'left' }}>YourLinkedin</Typography>
                        </Link>
                    </Box>
                    <Box>
                        <Typography
                            variant="h6"
                            sx={{ textTransform: 'uppercase', textAlign: 'left' }}>Email:</Typography>
                        <Typography variant="h6">your.email@gmail.com</Typography>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
};
export default Contact