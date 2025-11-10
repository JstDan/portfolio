import { Typography, Box } from "@mui/material"

const Experience = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '3rem',
            }}>
            <Typography variant='h4' style={{
                fontWeight: '300',
                textTransform: 'uppercase',
                color: 'white'
            }}>Experience</Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Box sx={{ backgroundColor: 'red', width: '30rem', height: '5rem', borderRadius: '15px', }}>JOB 1</Box>
                    <Box sx={{
                        width: '0.25rem',
                        backgroundColor: 'black',
                        position: 'relative'
                    }} />
                    <Box sx={{ width: '30rem', height: '5rem' }}>FILL</Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Box sx={{ width: '30rem', height: '5rem' }}>FILL</Box>
                    <Box sx={{
                        width: '0.25rem',
                        backgroundColor: 'black',
                        position: 'relative'
                    }} />
                    <Box sx={{ backgroundColor: 'blue', width: '30rem', height: '5rem', borderRadius: '15px', py: '2rem' }}>JOB 2</Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Box sx={{ backgroundColor: 'red', width: '30rem', height: '5rem', borderRadius: '15px', py: '2rem' }}>JOB 1</Box>
                    <Box sx={{
                        width: '0.25rem',
                        backgroundColor: 'black',
                        position: 'relative'
                    }} />
                    <Box sx={{ width: '30rem', height: '5rem' }}>FILL</Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Box sx={{ width: '30rem', height: '5rem' }}>FILL</Box>
                    <Box sx={{
                        width: '0.25rem',
                        backgroundColor: 'black',
                        position: 'relative'
                    }} />
                    <Box sx={{ backgroundColor: 'blue', width: '30rem', height: '5rem', borderRadius: '15px', py: '2rem' }}>JOB 2</Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Box sx={{ backgroundColor: 'red', width: '30rem', height: '5rem', borderRadius: '15px', py: '2rem' }}>JOB 1</Box>
                    <Box sx={{
                        width: '0.25rem',
                        backgroundColor: 'black',
                        position: 'relative'
                    }} />
                    <Box sx={{ width: '30rem', height: '5rem' }}>FILL</Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Box sx={{ width: '30rem', height: '5rem' }}>FILL</Box>
                    <Box sx={{
                        width: '0.25rem',
                        backgroundColor: 'black',
                        position: 'relative'
                    }} />
                    <Box sx={{ backgroundColor: 'blue', width: '30rem', height: '5rem', borderRadius: '15px', py: '2rem' }}>JOB 2</Box>
                </Box>
            </Box>
        </Box>
    )
}; export default Experience