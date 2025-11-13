import { Box, Typography, } from '@mui/material'
import EducationCard from './EducationCard/EducationCard';
const Education = () => {
    return (
        <Box
            id="education"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '3rem',
                width: '100%',
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
                    gap: '2rem',
                    width: '100%',
                }}
            >
                <EducationCard />
            </Box>
        </Box>
    )
};
export default Education
