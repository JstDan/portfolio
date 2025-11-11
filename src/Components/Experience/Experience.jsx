import { Box, Typography } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import info from "../../data/info.json";
import WorkIcon from "@mui/icons-material/Work";

const Experience = () => {
    const experience = Object.values(info.experience);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                py: "4rem",
                color: "white",
            }}
        >
            <Typography
                variant="h4"
                sx={{ fontWeight: 600, textTransform: "uppercase", mb: "3rem" }}
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
                    }}
                />

                {experience.map((job, i) => {
                    const side = i % 2 === 0 ? "left" : "right";
                    return (
                        <Box key={i} sx={{ position: "relative", width: "100%", mb: "4rem" }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent:
                                        side === "left" ? "flex-start" : "flex-end",
                                    width: "100%",
                                    transform: `translateX(${side === "left" ? "-2rem" : "2rem"})`,
                                    transition: "transform 0.5s ease",
                                    "&:hover": {
                                        transform: "translateX(0)",
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "relative",
                                        width: "47.5%",
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
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <PlayArrowIcon fontSize="small" sx={{ backgroundColor: 'transperant', transform: 'scale(2)' }} />
                                    </Box>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: "30%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    backgroundColor: "#DAA521",
                                    border: "2px solid #ffffffff",
                                    borderRadius: "50%",
                                    width: "35px",
                                    height: "35px",
                                    display: "flex",
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