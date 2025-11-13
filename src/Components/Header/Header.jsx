import React, { useState } from 'react';
import {
    AppBar,
    Box,
    Typography,
    Button,
    Toolbar,
    Container,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Divider,
    Stack,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const cvDownloadHref = '/files/DanielMihaylovCV.pdf';

    const navItems = [
        { label: 'About Me', target: 'about-me', offset: -120 },
        { label: 'Experience', target: 'experience', offset: -90 },
        { label: 'Education', target: 'education', offset: -130 },
        { label: 'Skills', target: 'skills', offset: -60 },
        { label: 'Projects', target: 'projects', offset: -120 },
    ];

    const scrollToSection = (id, yOffset = 0) => {
        const section = document.getElementById(id);
        if (section) {
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleDrawerNavigate = (target, offset) => {
        scrollToSection(target, offset);
        setMobileOpen(false);
    };

    const drawer = (
        <Box
            role="presentation"
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                py: 3,
                px: 3,
                gap: 2,
            }}
        >
            <Typography variant="h6" sx={{ fontWeight: 600, letterSpacing: 1 }}>
                DANIEL'S PORTFOLIO
            </Typography>
            <Divider light sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />
            <Stack spacing={1}>
                <Button
                    component="a"
                    href={cvDownloadHref}
                    download
                    variant="outlined"
                    sx={{
                        borderColor: 'rgba(255,255,255,0.4)',
                        color: 'white',
                        textTransform: 'none',
                        fontWeight: 500,
                        '&:hover': { borderColor: 'white' },
                    }}
                    onClick={() => setMobileOpen(false)}
                >
                    CV
                </Button>
                <List disablePadding>
                    {navItems.map((item) => (
                        <ListItem key={item.label} disablePadding>
                            <ListItemButton
                                onClick={() => handleDrawerNavigate(item.target, item.offset)}
                                sx={{
                                    borderRadius: 1,
                                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.08)' },
                                }}
                            >
                                <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: '1rem' }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Stack>
            <Box sx={{ mt: 'auto' }}>
                <Button
                    fullWidth
                    sx={{
                        backgroundColor: '#315cb2ff',
                        '&:hover': { backgroundColor: '#224a8b' },
                        color: 'white',
                        fontWeight: 500,
                        textTransform: 'none',
                        py: 1.2,
                    }}
                    onClick={() => handleDrawerNavigate('contact', -80)}
                >
                    Contact
                </Button>
            </Box>
        </Box>
    );

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    width: '100%',
                    backgroundColor: 'rgba(40,44,52,0.7)',
                    backdropFilter: 'blur(8px)',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: 'none',
                    left: 0,
                    top: 0,
                    zIndex: 1100,
                }}
            >
                <Container maxWidth="lg" sx={{ px: { xs: 1, md: 3 } }}>
                    <Toolbar
                        disableGutters
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            px: { xs: 0, md: 2 },
                        }}>
                        <Typography
                            variant="h5"
                            sx={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: { xs: '1rem', md: '1.5rem' },
                                userSelect: 'none',
                            }}
                        >
                            DANIEL'S PORTFOLIO
                        </Typography>
                        <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: '1rem' }}>
                            <Button
                                color="inherit"
                                onClick={() => {
                                    if (!window.confirm("Are you sure you want to download Daniel's CV?")) return;
                                    const link = document.createElement("a");
                                    link.href = cvDownloadHref;
                                    link.download = "DanielMihaylovCV.pdf";
                                    link.click();
                                }}
                                sx={{ px: 1 }}
                            >
                                <Typography variant="subtitle2" sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>CV</Typography>
                            </Button>
                            {navItems.map((item) => (
                                <Button
                                    key={item.label}
                                    color="inherit"
                                    onClick={() => scrollToSection(item.target, item.offset)}
                                    sx={{ px: 1 }}
                                >
                                    <Typography variant="subtitle2" sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
                                        {item.label}
                                    </Typography>
                                </Button>
                            ))}
                            <Button
                                sx={{
                                    backgroundColor: '#315cb2ff',
                                    '&:hover': { backgroundColor: '#224a8b' },
                                    px: 2,
                                }}
                                onClick={() => scrollToSection('contact', -80)}
                            >
                                <Typography variant="subtitle2" sx={{ color: 'white', fontWeight: '500', fontSize: { xs: '0.875rem', md: '1rem' } }}>Contact</Typography>
                            </Button>
                        </Box>

                        {/* Mobile & Tablet Menu */}
                        <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="navigation menu"
                                aria-haspopup="true"
                                onClick={handleDrawerToggle}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                PaperProps={{
                    sx: {
                        width: { xs: '75vw', sm: 360 },
                        backgroundColor: 'rgba(18,20,24,0.95)',
                        color: 'white',
                        borderLeft: '1px solid rgba(255,255,255,0.08)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
                    },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
};

export default Header;
