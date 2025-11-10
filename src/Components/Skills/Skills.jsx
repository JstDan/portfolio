import { Typography, Box, Container } from "@mui/material"
import SkillCard from "./SkillCard.jsx/SkillCard";
import info from '../../data/info.json';
const Skills = () => {
    return (
        <Box sx={{
            gap: '10%',
            width: '100%',
            minHeight: '80vh',
            backgroundColor: 'rgba(209, 153, 14, 1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            py: '4rem'
        }}>
            <Box sx={{
                maxWidth: '1200px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                gap: '10%'
            }}></Box>
            <Typography variant='h4' sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textTransform: 'uppercase',
                fontWeight: '500',
                color: 'white',
                paddingBottom: '2rem',
            }}>
                Skills and Abilities
            </Typography>
            <Container sx={{
                backgroundColor: 'rgba(102, 99, 92, 0.49)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
                borderRadius: '18px',
                paddingY: '1.5rem',
            }}>
                <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(4,1fr)', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
                    <SkillCard />
                </Box>
            </Container>
        </Box>
    )
};
export default Skills