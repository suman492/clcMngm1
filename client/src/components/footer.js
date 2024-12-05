// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box component="footer" sx={{
      bgcolor: 'background.paper',
      color: 'text.secondary',
      py: 4,
      // width: '100%',
      height: '50px',
      textAlign: 'center',
      borderTop: `1px solid ${theme => theme.palette.primary.main}`, // Optional: add a top border
    }}
  >
    <Typography variant="h6" gutterBottom>
      Built with ❤️ by Suman
    </Typography>
    <Typography variant="body2" sx={{ mt: 2 }}>
      © {new Date().getFullYear()} Bsc student | All Rights Reserved
    </Typography>
  </Box>
);

export default Footer;