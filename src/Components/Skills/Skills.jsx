import { Typography, Box, Container } from "@mui/material"
import SkillCard from "./SkillCard.jsx/SkillCard";
import info from '../../data/info.json';
const Skills = () => {
    return (
        <Box sx={{ paddingBottom: '20rem' }}>
            <Typography variant='h4' sx={{
                display: 'flex',
                flexDirection: 'column',
                textTransform: 'uppercase',
                fontWeight: '300',
                color: 'white',
                paddingBottom: '2rem'
            }}>
                Skills and Abilities
            </Typography>
            <Container sx={{ width: 'auto', flexWrap: 'wrap', paddingBottom: '5rem', backgroundColor: 'darkGrey', paddingY: '1.5rem', borderRadius: '18px' }}>
                <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(4,1fr)', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
                    <SkillCard />
                </Box>
            </Container>
        </Box>
    )
};
export default Skills