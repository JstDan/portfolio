import info from '../../../data/info.json';
import { Box, Typography } from "@mui/material"
const SkillCard = () => {
    return (
        <>
            {Object.values(info.skills).map((skill, index) => (
                < Box
                    key={index}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '1rem',
                        width: '100%',
                        aspectRatio: '3/2',
                        backgroundColor: '#424752ff',
                        borderRadius: '20px',
                        py: '1rem'
                    }}

                >
                    <Typography sx={{ fontSize: { xs: "2,5rem", md: "1,8rem" }, fontWeight: '500', color: 'white' }}>{skill.title}</Typography>
                    <img
                        src={skill.image}
                        alt={skill.title}
                        style={{
                            width: '4rem',
                        }}
                    />
                </Box >
            ))
            }
        </>
    )
};
export default SkillCard
