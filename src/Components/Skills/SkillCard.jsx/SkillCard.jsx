import info from '../../../data/info.json';
import { Box, Typography, Image } from "@mui/material"
const SkillCard = () => {
    return (
        <>
            {Object.values(info.skills).map((skill, index) => (

                < Box
                    key={index}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column-reverse',
                        alignItems: 'center',
                        gap: '1rem',
                        width: '100%',
                        aspectRatio: '3/2',
                        backgroundColor: '#494949ff',
                        borderRadius: '20px',
                        paddingBottom: '1rem'
                    }}

                >
                    <Typography variant='h5' sx={{ fontWeight: '500', color: 'white' }}>{skill.title}</Typography>
                    <img
                        src={skill.image}
                        alt={skill.title}
                        style={{
                            width: '5rem',
                        }}
                    />
                </Box >
            ))
            }
        </>
    )
};
export default SkillCard