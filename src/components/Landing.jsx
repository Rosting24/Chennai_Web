import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
  Paper,
  useMediaQuery,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  Avatar,
  Stack,
  Link,
  Fab
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import KitchenIcon from '@mui/icons-material/Kitchen';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import TvIcon from '@mui/icons-material/Tv';
import AdSlot from '../Adslot';




const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f9fafc'
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontWeight: 700,
      lineHeight: 1.2
    },
    h2: {
      fontWeight: 700,
      lineHeight: 1.3
    }
  }
});

function ScrollTop(props) {
  const { children } = props;

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Box
      onClick={handleClick}
      role="presentation"
      sx={{ position: 'fixed', bottom: 32, right: 32 }}
    >
      {children}
    </Box>
  );
}

function Landing() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const services = [
    {
      icon: <LocalLaundryServiceIcon sx={{ color: '#6A0DAD', fontSize: 50 }} />,
      title: "Washing Machine Repair",
      description: "Expert repairs for all models and brands today."
    },
    {
      icon: <KitchenIcon sx={{ color: 'green', fontSize: 50 }} />,
      title: "Refrigerator Service",
      description: "Fridge maintenance and repair with expertise."
    },
    {
      icon: <AcUnitIcon sx={{ color: 'red', fontSize: 50 }} />,
      title: "AC Maintenance",
      description: "Cooling system installation and expert repairs."
    },
    {
      icon: <MicrowaveIcon sx={{ color: '#FFA500', fontSize: 50 }} />,
      title: "Oven Repair",
      description: "Repairing your microwave and oven with care."
    },
    {
      icon: <TvIcon sx={{ color: "#ed155d", fontSize: 50 }} />,
      title: "Top Brand TV Repair",
      description: "Repairing your TV brands with top-notch care."
    },
  ];


  const trackConversion = async () => {
    try {
      const response = await fetch('https://ruki-likely.onrender.com/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          source: 'Emergency button Chennai'
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
          'event_label': 'Enquiry Submitted Chennai'
        });
      }

    } catch (error) {
      setAlert({ severity: 'error', message: error.message || 'Failed to submit enquiry' });
      setOpen(true);
    }
  };

  const trackConversion1 = async () => {
    try {
      const response = await fetch('https://ruki-likely.onrender.com/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          source: 'Enquiry Chennai'
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div id="back-to-top-anchor" />

      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'background.default',
          pt: { xs: 8, md: 12 },
          pb: { xs: 6, md: 10 },
          backgroundImage: 'linear-gradient(to bottom, #f9fafc, #e6f0fa)'
        }}
      >
        <Container maxWidth="md">
          {/* <Typography
        component="h1"
        variant={isMobile ? 'h4' : 'h3'}
        align="center"
        gutterBottom
        sx={{
          fontWeight: 800,
          mb: 3,
          color: '#2E3B55'
        }}
      >
       RukiCare Solutions
      </Typography> */}
          <Typography
            variant={isMobile ? 'h5' : 'h4'}
            align="center"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              mb: 3,
              color: '#2E3B55'

            }}
          >
            AC, Fridge, Washing Machine Service center in 
            <span style={{ fontWeight: 'bold', color: '#ed155d' }}> Chennai ! </span>🚀
          </Typography>

          <Paper elevation={2} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
            <Typography
              variant={isMobile ? 'body1' : 'h6'}
              paragraph
              sx={{ mb: 3 }}
            >
              Looking for trusted home appliance repair in
              <span style={{ fontWeight: 'bold', color: '#ed155d' }}> Chennai ? </span>
              We provide professional repair services for a wide range of household appliances.
              Whether it's your <span style={{ fontWeight: 'bold' }}> Washing machine, Air conditioner, Refrigerator, Microwave oven </span>
              or any other Home appliance, we’ve got you covered.✨
            </Typography>
            <Typography
              variant={isMobile ? 'body1' : 'h6'}
              paragraph
            >
              Our skilled technicians provide quick, efficient service with advanced tools and years of experience, specializing in top brands like
              <span style={{ fontWeight: 'bold', color: '#ed155d' }}> Samsung, LG, Blue Star, Godrej, V-Guard, Lloyd, Onida, Daikin, Hitachi, Panasonic, Carrier and Haier. </span>
              We handle everything from minor fixes to major repairs with professionalism and care.
            </Typography>
          </Paper>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Button
              variant="contained"
              color="secondary"
              href="tel:+916385711458"
              size="large"
              onClick={trackConversion1}
              sx={{
                px: 4,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 700,
                color: 'white',
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: '#7b1fa2',
                  color: 'white',
                }
              }}
            >
              Enquiry Now
            </Button>
          </Box>
        </Container>
      </Box>
      
      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: 6,
            color: '#2E3B55'
          }}
        >
          Our Services
        </Typography>

        <Grid
          container
          spacing={4}
          sx={{
            alignItems: 'stretch',
            justifyContent: 'center'
          }}
        >
          {services.map((service, index) => (
            <Grid item key={index} xs={12} sm={6} md={3} sx={{ display: 'flex', flexDirection: 'column' }}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  flex: 1, // Makes card fill available space
                  display: 'flex',
                  height: '100%',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6,
                    color: '#8A2BE2'
                  }
                }}
              >
                {/* Icon with fixed height container */}
                <Box sx={{
                  mb: 2,
                  height: 70, // Fixed height for icons
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {service.icon}
                </Box>

                {/* Title with fixed height */}
                <Typography
                  variant="h6"
                  sx={{
                    mb: 1,
                    fontWeight: 600,
                    minHeight: 60, // Ensures consistent title spacing
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {service.title}
                </Typography>

                {/* Description that fills remaining space */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    flex: 1, // Takes remaining space
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  {service.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/*  AdSlot Section */}
      {/* <AdSlot/> */}
      
      {/* <Container>
      <img 
        src="images/AC4.jpg" 
        alt="Image 2" 
      />
    </Container> */}

      {/* CTA Section */}
      <Box sx={{
        bgcolor: '#6A0DAD',
        color: 'white',
        py: { xs: 8, md: 12 },
        textAlign: 'center',
        background: 'linear-gradient(135deg, #6A0DAD 0%, #ed155d 100%)'
      }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ mb: 3, fontWeight: 800, letterSpacing: 1 }}>
            Emergency Appliance Repair?
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
            Same-day service • Expert technicians • 100% guaranteed
          </Typography>
          <Button
            variant="outlined"
            size="large"
            href="tel:+916385711458"
            onClick={trackConversion}
            sx={{
              px: 6,
              py: 2,
              fontSize: '1.2rem',
              fontWeight: 700,
              border: '3px solid',
              borderColor: 'white',
              color: 'white',
              backgroundColor: 'transparent',
              '&:hover': {
                color: 'white',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderColor: 'white',
                transform: 'scale(1.05)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            Call Now
          </Button>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700, mb: 6 }}
        >
          Trusted by our customers
        </Typography>

        <Box sx={{
          display: 'flex',
          overflowX: 'auto',
          gap: 4,
          py: 2,
          px: 1,
          scrollbarWidth: 'none', // For Firefox
          '&::-webkit-scrollbar': { // For Chrome/Safari
            display: 'none'
          }
        }}>
          {/* Testimonial 1 */}
          <Box sx={{
            minWidth: 300,
            p: 4,
            borderRadius: 2,
            boxShadow: 2,
            backgroundColor: 'background.paper'
          }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              Ramesh Kumar
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
              "The technician fixed my washing machine in just 30 minutes! Best service I've ever experienced."
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              ⭐⭐⭐⭐⭐
              <Typography variant="caption" sx={{ ml: 1 }}>
                2 days ago
              </Typography>
            </Box>
          </Box>

          {/* Testimonial 2 */}
          <Box sx={{
            minWidth: 300,
            p: 4,
            borderRadius: 2,
            boxShadow: 2,
            backgroundColor: 'background.paper'
          }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              Priya Venkat
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
              "Came right on time and charged exactly what was quoted. My fridge is working like new now."
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              ⭐⭐⭐⭐⭐
              <Typography variant="caption" sx={{ ml: 1 }}>
                1 week ago
              </Typography>
            </Box>
          </Box>

          {/* Testimonial 3 */}
          <Box sx={{
            minWidth: 300,
            p: 4,
            borderRadius: 2,
            boxShadow: 2,
            backgroundColor: 'background.paper'
          }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              Arun Joshi
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
              "Emergency AC repair at midnight! These guys saved us during the heat wave."
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              ⭐⭐⭐⭐⭐
              <Typography variant="caption" sx={{ ml: 1 }}>
                3 days ago
              </Typography>
            </Box>
          </Box>

          {/* Testimonial 4 */}
          <Box sx={{
            minWidth: 300,
            p: 4,
            borderRadius: 2,
            boxShadow: 2,
            backgroundColor: 'background.paper'
          }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              Deepika M.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
              "Honest diagnosis and fair pricing. Will definitely call them again for any appliance issues."
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              ⭐⭐⭐⭐⭐
              <Typography variant="caption" sx={{ ml: 1 }}>
                2 weeks ago
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* <ScrollTop>
    <Fab color="primary" size="small" aria-label="scroll back to top">
      <KeyboardArrowUpIcon />
    </Fab>
  </ScrollTop> */}
    </ThemeProvider>
  );
}

export default Landing;