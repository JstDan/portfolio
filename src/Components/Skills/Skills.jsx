import { Typography, Box, Container } from "@mui/material"
import SkillCard from "./SkillCard.jsx/SkillCard";
const Skills = () => {
    return (
        <Box
            id="skills"
            sx={{
                gap: '10%',
                width: '100%',
                minHeight: '80vh',
                backgroundColor: 'rgba(209, 153, 14, 1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                py: { xs: '3rem', md: '4rem' },
                px: { xs: 2, sm: 3 },
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
                pb: '2rem',
                textAlign: 'center',
            }}>
                Skills and Abilities
            </Typography>
            <Container
                sx={{
                    width: '100%',
                    maxWidth: '1200px',
                    backgroundColor: 'rgba(102, 99, 92, 0.49)',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
                    borderRadius: '18px',
                    py: '1.5rem',
                }}
            >
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: 'repeat(auto-fit, minmax(140px, 1fr))',
                            sm: 'repeat(auto-fit, minmax(160px, 1fr))',
                            md: 'repeat(4, minmax(150px, 1fr))',
                        },
                        gap: '1rem',
                        px: { xs: 1, sm: 2, md: 3 },
                    }}
                >
                    <SkillCard />
                </Box>
            </Container>
        </Box>
    )
};
export default Skills
