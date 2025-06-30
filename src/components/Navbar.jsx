import React, { useState } from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Divider,
    Avatar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const trackConversion1 = async () => {
        try {
            const response = await fetch('https://ruki-likely.onrender.com/api/enquiry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    timestamp: new Date().toISOString(),
                    source: 'Navbar Call Now Chennai'
                }),
            });

            if (!response.ok) throw new Error('Network response was not ok');

            const data = await response.json();
            setAlert({ severity: 'success', message: data.message || 'Enquiry submitted successfully!' });
            setOpen(true);

            // Track conversion
            if (window.gtag) {
                window.gtag('event', 'conversion', {
                    'event_category': 'Lead',
                    'event_label': 'Enquiry Submitted'
                });
            }

        } catch (error) {
            setAlert({ severity: 'error', message: error.message || 'Failed to submit enquiry' });
            setOpen(true);
        }
    };
    return (
        <AppBar position="fixed" elevation={0} sx={{
            backgroundColor: 'white',
            borderBottom: '1px solid rgba(0, 0, 0, 0.12)' // subtle bottom border
        }}>
            <Container maxWidth={false} sx={{ px: 2 }}>
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    <Typography
                        variant="h6"
                        sx={{
                            flexGrow: 1,
                            fontWeight: 800,
                            color: '#ed155d',
                            fontSize: { xs: '1.3rem', md: '1.6rem' },
                            letterSpacing: '0.5px',
                        }}
                    >
                        <Box
                            component="span"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                '&:hover': {
                                    opacity: 0.9,
                                },
                            }}
                        >
                            <Box
                                component="img"
                                src="/logo.png"
                                alt="Proun Logo"
                                sx={{
                                    height: 32,
                                    width: 32,
                                    objectFit: 'contain',
                                    mr: 1,
                                }}
                            />
                            Chennai Services
                        </Box>
                    </Typography>

                    {/* Single Call Button - Visible on all screens */}
                    <Button
                        component="a"
                        href="tel:+916385711458"
                        variant="outlined"
                        onClick={trackConversion1}
                        sx={{
                            backgroundColor: 'white',
                            color: '#ed155d',
                            borderColor: '#ed155d',

                            borderRadius: '8px',
                            px: { xs: 2, md: 3 },
                            py: 1,
                            fontWeight: 700,
                            fontSize: { xs: '0.9rem', md: '1rem' },
                            textTransform: 'none',
                            minWidth: '120px',

                            '&:hover': {
                                backgroundColor: 'white',
                                transform: 'translateY(-1px)',
                                color: '#5A0B9D',
                                borderColor: '#5A0B9D',
                                boxShadow: '0 4px 8px rgba(106, 13, 173, 0.3)'
                            },
                            '&:active': {
                                transform: 'translateY(0)'
                            }
                        }}
                    >
                        Call Now
                    </Button>

                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;