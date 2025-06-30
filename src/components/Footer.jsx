import React from 'react';
import { Box, Typography, Container, Button, Divider } from '@mui/material';

const Footer = () => {
  const trackConversion1 = async () => {
    try {
      const response = await fetch('https://ruki-likely.onrender.com/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          source: 'Footer Number Chennai'
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
    <Box
      component="footer"
      sx={{
        py: 1,
        px: 2,
        mt: 'auto',
        backgroundColor: '#6A0DAD', // Deep violet background
        color: 'white',
        background: 'linear-gradient(135deg, #6A0DAD 0%, #ed155d 100%)', // Gradient effect
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3
        }}>
          <Typography variant="h5" sx={{ 
            fontWeight: 700, 
            mb: { xs: 2, md: 0 },
            textShadow: '0px 2px 4px rgba(0,0,0,0.2)'
          }}>
            Need Help Right Now?
          </Typography>
          <Button 
            variant="contained"
            size="sm"
            href="tel:+916385711458"
            onClick={trackConversion1}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              backgroundColor: 'white',
              color: '#ed155d',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              '&:hover': {
                color:'#ed155d',
                backgroundColor: '#f0f0f0',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 12px rgba(0,0,0,0.25)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            📞 +91 63857 11458 
          </Button>
        </Box>
        
        <Divider sx={{ 
          backgroundColor: 'rgba(255,255,255,0.2)', 
          my: 3,
          height: '1px'
        }} />
        
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ 
            opacity: 0.9,
            fontSize: '0.9rem'
          }}>
            Serving Chennai • 24/7 Emergency Service • Licensed Technicians
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;