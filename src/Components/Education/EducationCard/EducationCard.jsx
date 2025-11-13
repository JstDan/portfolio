import { Typography, Box } from "@mui/material"
import info from '../../../data/info.json';
const EducationCard = () => {
    return (
        Object.values(info.education).map((education, index) => (
                <Box
                    key={index}
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: { xs: 'flex-start', sm: 'center' },
                        justifyContent: 'center',
                        width: '100%',
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
                        borderRadius: '18px',
                        py: '1.5rem',
                        px: { xs: '1.5rem', sm: '2.5rem', md: '3rem' },
                        gap: { xs: '1.5rem', sm: '2rem', md: '3rem' },
                    }}
                >
                    <Box sx={{ width: { xs: '100%', sm: '20%' }, display: 'flex', justifyContent: 'center' }}>
                        <img src={education.image} alt="School" style={{
                            width: '100%',
                            maxWidth: '120px',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '12px',
                        }} />
                    </Box>
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            borderLeft: { xs: 'none', sm: '1px solid rgba(0, 0, 0, 1)' },
                            paddingLeft: { xs: 0, sm: '2rem', md: '3rem' },
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
            ))
    );
};

export default EducationCard;
