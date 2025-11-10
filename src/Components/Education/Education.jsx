import { Box, Typography, } from '@mui/material'
import EducationCard from './EducationCard/EducationCard';
const Education = () => {
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
            }}>Education</Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '3rem',
                }}
            >
                <EducationCard />
            </Box>
        </Box>
    )
};
export default Education