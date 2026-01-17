import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import info from "../../data/info.json";
import WorkIcon from "@mui/icons-material/Work";

const Experience = () => {
    const experience = useMemo(() => Object.values(info.experience), []);
    const [flipped, setFlipped] = useState(() => experience.map(() => false));
    const [backHeights, setBackHeights] = useState(() => experience.map(() => 170));
    const backRefs = useRef([]);
    const FRONT_MIN_HEIGHT = 170;
    const BACK_EXTRA_SPACE = 80;

    useLayoutEffect(() => {
        const measureHeights = () => {
            const backMeasurements = experience.map((_, idx) => {
                const back = backRefs.current[idx];
                const backH = back?.scrollHeight || back?.offsetHeight || 0;
                return Math.max(FRONT_MIN_HEIGHT, backH + BACK_EXTRA_SPACE);
            });

            setBackHeights((prev) => {
                const changed = backMeasurements.some((h, idx) => h !== prev[idx]);
                return changed ? backMeasurements : prev;
            });
        };

        measureHeights();
        window.addEventListener("resize", measureHeights);
        return () => window.removeEventListener("resize", measureHeights);
    }, [experience, flipped]);

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
                    const isFlipped = flipped[i];
                    const toggleFlip = () => {
                        setFlipped((prev) => {
                            const next = [...prev];
                            next[i] = !next[i];
                            return next;
                        });
                    };
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
                                <Box sx={{ width: { xs: "100%", md: "47.5%" }, perspective: "1200px" }}>
                                    <Box
                                        sx={{
                                            position: "relative",
                                            width: "100%",
                                            minHeight: `${FRONT_MIN_HEIGHT}px`,
                                            height: `${flipped[i] ? backHeights[i] : FRONT_MIN_HEIGHT}px`,
                                            transformStyle: "preserve-3d",
                                            transition: "transform 0.7s ease, height 0.25s ease",
                                            borderRadius: "12px",
                                            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                                            cursor: "pointer",
                                            "&:focus-visible": {
                                                outline: "2px solid #DAA521",
                                                outlineOffset: "4px",
                                            },
                                        }}
                                        tabIndex={0}
                                        onClick={toggleFlip}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" || e.key === " ") {
                                                e.preventDefault();
                                                toggleFlip();
                                            }
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                inset: 0,
                                                backfaceVisibility: "hidden",
                                                backgroundColor: "#DAA521",
                                                p: "1.5rem",
                                                borderRadius: "12px",
                                                color: "black",
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "0.35rem",
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
                                            <Typography variant="caption" sx={{ color: "#000000b3" }}>
                                                Click to flip
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
                                                <PlayArrowIcon fontSize="small" sx={{ transform: "scale(2)" }} />
                                            </Box>
                                        </Box>

                                        <Box
                                            sx={{
                                                position: "absolute",
                                                inset: 0,
                                                backfaceVisibility: "hidden",
                                                transform: "rotateY(180deg)",
                                                backgroundColor: "#1f1f1f",
                                                color: "white",
                                                px: "1.5rem",
                                                py: { xs: "2.2rem", md: "2.8rem" },
                                                borderRadius: "12px",
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "0.35rem",
                                                justifyContent: "center",
                                                boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
                                            }}
                                            ref={(el) => { backRefs.current[i] = el; }}
                                        >
                                            <Typography variant="subtitle2" sx={{ color: "#DAA521", fontWeight: 700 }}>
                                                {job.company}
                                            </Typography>
                                            <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                                {job.position}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: "#b5b5b5" }}>
                                                {job.description || "Role details to be added."}
                                            </Typography>
                                        </Box>
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
