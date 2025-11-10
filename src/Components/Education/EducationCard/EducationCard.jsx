import { Typography, Box } from "@mui/material"
import info from '../../../data/info.json';
const EducationCard = () => {
    {

        return (
            Object.values(info.education).map((education, index) => (
                <Box
                    key={index}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '90%',
                        height: '10rem',
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
                        borderRadius: '18px',
                        paddingY: '1.5rem',
                        paddingX: '1rem',
                        paddingLeft: '3rem',
                        gap: '3rem'
                    }}
                >
                    <Box sx={{ width: '12%' }}><img src={education.image} alt="Error Loading" style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '12px',
                    }} /></Box>
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            gap: '0.3rem',
                            borderLeft: '1px solid rgba(0, 0, 0, 1)',
                            paddingLeft: '3rem',
                        }}
                    >
                        <Typography variant="h5" sx={{ textAlign: 'left', fontWeight: '500' }}>{education.placeTitle}</Typography>
                        <Typography variant="h6" sx={{ fontWeight: '400' }}>{education.specialty}</Typography>
                        <Typography variant="h6" sx={{
                            fontWeight: '600',
                            color: education.period.toLowerCase().includes('present')
                                ? '#dbc221ff'
                                : '#2ec42eff'
                        }}>
                            {education.period}
                        </Typography>
                    </Box>
                </Box>
            )
            ))
    }
}; export default EducationCard