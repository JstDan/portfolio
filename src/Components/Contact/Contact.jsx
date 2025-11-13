import { Box, Button, Typography, TextField } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import info from "../../data/info.json";

const Contact = () => {
    const textFieldStyle = {
        width: '20rem',
        "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "white" },
            "&:hover fieldset": { borderColor: "white" },
            "&.Mui-focused fieldset": { borderColor: "white" },
        },
        "& .MuiInputLabel-root": { color: "white" },
        "& .MuiInputBase-input": { color: "white" },
    };

    return (
        <Box id="contacts" sx={{ width: '100%' }}>
            <Typography
                variant="h4"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    textTransform: "uppercase",
                    fontWeight: "300",
                    color: "white",
                    mb: '2rem',
                    textAlign: { xs: 'center', md: 'center' },
                }}
            >
                Contact me
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "white",
                    height: "auto",
                    flexDirection: { xs: 'column', lg: 'row' },
                    gap: { xs: '2rem', md: '10rem' },
                    alignItems: { xs: 'center', lg: 'flex-start' },
                }}
            >
                <Box sx={{ width: '100%', maxWidth: '24rem' }}>
                    <Box
                        component="form"
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        netlify-honeypot="bot-field"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: 'center',
                            gap: "1.6rem",
                        }}
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <p hidden>
                            <label>
                                Don’t fill this out if you're human: <input name="bot-field" />
                            </label>
                        </p>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                color: "white",
                                width: '100%'
                            }}
                        >
                            <Typography sx={{ marginY: "0.5rem", width: '100%', textAlign: 'left', px: '2rem' }}>Names:</Typography>
                            <TextField
                                name="name"
                                sx={textFieldStyle}
                                required
                                label="Enter your names"
                            />
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Typography sx={{ marginY: "0.5rem", width: '100%', textAlign: 'left', px: '2rem' }}>Email:</Typography>
                            <TextField
                                name="email"
                                sx={textFieldStyle}
                                required
                                label="Enter your email"
                            />
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Typography sx={{ marginY: "0.5rem", width: '100%', textAlign: 'left', px: '2rem' }}>Questions:</Typography>
                            <TextField
                                name="message"
                                sx={textFieldStyle}
                                required
                                label="Type your inquiries here"
                                multiline
                                rows={4}
                            />
                        </Box>

                        <Button
                            type="submit"
                            sx={{
                                border: "2px solid grey",
                                width: "100%",
                                maxWidth: "20rem",
                                height: "3rem",
                                color: "white",
                                fontSize: "1rem",
                                fontWeight: "bold",
                                borderRadius: "2rem",
                            }}
                        >
                            Submit
                        </Button>

                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                            <a href={info.socials.linkedin} target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon sx={{ color: 'white', fontSize: '2rem', transition: '0.3s', '&:hover': { color: '#0077b5' } }} />
                            </a>
                            <a href={info.socials.github} target="_blank" rel="noopener noreferrer">
                                <GitHubIcon sx={{ color: 'white', fontSize: '2rem', transition: '0.3s', '&:hover': { color: '#171515' } }} />
                            </a>
                            <a href={info.socials.gmail} target="_blank" rel="noopener noreferrer">
                                <EmailIcon sx={{ color: 'white', fontSize: '2rem', transition: '0.3s', '&:hover': { color: '#D44638' } }} />
                            </a>
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        width: { xs: '100%', lg: '80%' },
                    }}
                >
                    <img
                        src="/images/contacts.png"
                        alt="Contact"
                        style={{ width: '100%', height: "auto" }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Contact;
