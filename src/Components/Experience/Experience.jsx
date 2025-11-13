import { Box, Typography } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import info from "../../data/info.json";
import WorkIcon from "@mui/icons-material/Work";

const Experience = () => {
    const experience = Object.values(info.experience);

    return (
        <Box
            id="experience"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                py: { xs: "3.5rem", md: "5rem" },
                color: "white",
                width: "100%",
            }}
        >
            <Typography
                variant="h4"
                sx={{ fontWeight: 600, textTransform: "uppercase", mb: "3rem", textAlign: "center" }}
            >
                Experience
            </Typography>

            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "1200px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    px: { xs: 2, sm: 3 },
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        width: "3px",
                        backgroundColor: "#000000ff",
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: { xs: "none", md: "block" },
                    }}
                />

                {experience.map((job, i) => {
                    const side = i % 2 === 0 ? "left" : "right";
                    return (
                        <Box key={i} sx={{ position: "relative", width: "100%", mb: "4rem" }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: {
                                        xs: "flex-start",
                                        md: side === "left" ? "flex-start" : "flex-end",
                                    },
                                    width: "100%",
                                    transform: {
                                        xs: "none",
                                        md: `translateX(${side === "left" ? "-2rem" : "2rem"})`,
                                    },
                                    transition: "transform 0.5s ease",
                                    "&:hover": {
                                        transform: {
                                            xs: "none",
                                            md: "translateX(0)",
                                        },
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "relative",
                                        width: { xs: "100%", md: "47.5%" },
                                        backgroundColor: "#DAA521",
                                        p: "1.5rem",
                                        borderRadius: "12px",
                                        color: "black",
                                    }}
                                >
                                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                        {job.company}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                                        {job.position}
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontWeight: 300 }}>
                                        {job.period}
                                    </Typography>
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: "30%",
                                            transform: side === "left" ? "translateY(-50%)" : "translateY(-50%) rotate(180deg)",
                                            [side === "left" ? "right" : "left"]: "-18px",
                                            color: "#DAA521",
                                            width: "30px",
                                            height: "30px",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            display: { xs: "none", md: "flex" },
                                        }}
                                    >
                                        <PlayArrowIcon fontSize="small" sx={{ backgroundColor: 'transperant', transform: 'scale(2)' }} />
                                    </Box>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    position: { xs: "static", md: "absolute" },
                                    mt: { xs: "1rem", md: 0 },
                                    top: { md: "30%" },
                                    left: { md: "50%" },
                                    transform: { md: "translate(-50%, -50%)" },
                                    backgroundColor: "#DAA521",
                                    border: "2px solid #ffffffff",
                                    borderRadius: "50%",
                                    width: "35px",
                                    height: "35px",
                                    display: { xs: "none", md: "flex" },
                                    alignItems: "center",
                                    justifyContent: "center",
                                    zIndex: 2,
                                    pointerEvents: "none",
                                }}
                            >
                                <WorkIcon sx={{ color: "#000000ff", fontSize: "26px", transform: 'scale(0.8)' }} />
                            </Box>
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
};

export default Experience;
