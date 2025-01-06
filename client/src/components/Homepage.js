import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import SearchIcon from '@mui/icons-material/Search';
import QrCodeIcon from '@mui/icons-material/QrCode';


const Homepage = () => {
    return (
        <Container maxWidth="lg" sx={{ textAlign: 'center', py: 5 }}>
            <Typography variant='h2' component="h1" color='primary' gutterBottom>
                Welcome to Student Mark Management System
            </Typography>
            <Box mt={4}>
                <Button
                    component={Link}
                    to="/student-list"
                    color='primary'
                    variant='contained'
                >view students
                </Button>
                <Button
                    component={Link}
                    to="/create-student"
                    color='primary'
                    variant='contained'
                >Create student
                </Button>
                <Button
                    component={Link}
                    to="/export"
                    color='primary'
                    variant='contained'
                >Export
                </Button>
                <Button
                    color="primary"
                    component="a"
                    href="https://github.com/suman492/stdmkMgmt"
                    target="_blank"
                    variant='contained'
                    rel="noopener noreferrer"
                    >
                    <GitHubIcon />
                    Github
                </Button>
                <Button
                    color="primary"
                    component="a"
                    href="https://docs.google.com/document/d/1ncz3J_GCgqLG-kwAHE2CZamT3bMhtr-RuPqBkiPvU2Q/edit?usp=drive_link"
                    target="_blank"
                    variant='contained'
                    rel="noopener noreferrer"
                    >
                    Resume
                </Button>
                <Button
              component={Link}
              to="/search"
              variant="contained"
              size="large"
              startIcon={<SearchIcon />}
              fullWidth
              sx={{ py: 2 }}
            >
              Search Students
            </Button>
            <Button
              component={Link}
              to="/qr-codes"
              variant="contained"
              size="large"
              startIcon={<QrCodeIcon />}
              fullWidth
              sx={{ py: 2 }}
            >
              QR Codes
            </Button>
            </Box>
        </Container>
    );
};

export default Homepage;