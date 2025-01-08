// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Container, Typography, Button, Grid } from '@mui/material';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import SearchIcon from '@mui/icons-material/Search';
// import QrCodeIcon from '@mui/icons-material/QrCode';


// const Homepage = () => {
//     return (
//         <Container maxWidth="lg" sx={{ textAlign: 'center', py: 5 }}>
//             <Typography variant='h2' component="h1" color='primary' gutterBottom>
//                 Welcome to Student Mark Management System
//             </Typography>
//             <Grid container spacing={1} justifyContent='center'>
//                 <Grid item xs={12} sm={6} md={4}>
//                         <Button
//                             component={Link}
//                             to="/student-list"
//                             color='primary'
//                             variant='contained'
//                             sx={{ p: 1 }}
//                         >view students
//                         </Button>
//                 </Grid>
//                 <Grid item xs={12} sm={6} md={4}>
//                     <Button
//                         component={Link}
//                         to="/create-student"
//                         color='primary'
//                         variant='contained'
//                         fullWidth
//                     >Create student
//                     </Button>
//                 </Grid>
//                 <Grid item xs={12} sm={6} md={4}>
//                     <Button
//                         component={Link}
//                         to="/export"
//                         color='primary'
//                         variant='contained'

//                     >Export
//                     </Button>
//                 </Grid>
//                 <Grid item xs={12} sm={4} md={4}>
//                     <Button
//                         color="primary"
//                         component="a"
//                         href="https://github.com/suman492/stdmkMgmt"
//                         target="_blank"
//                         variant='contained'
//                         rel="noopener noreferrer"
//                     >
//                         <GitHubIcon />
//                         Github
//                     </Button>
//                 </Grid>
//                 <Button
//                     color="primary"
//                     component="a"
//                     href="https://docs.google.com/document/d/1ncz3J_GCgqLG-kwAHE2CZamT3bMhtr-RuPqBkiPvU2Q/edit?usp=drive_link"
//                     target="_blank"
//                     variant='contained'
//                     rel="noopener noreferrer"
//                 >
//                     Resume
//                 </Button>
//                 <Button
//                     component={Link}
//                     to="/search"
//                     variant="contained"
//                     size="large"
//                     startIcon={<SearchIcon />}
//                     fullWidth
//                     sx={{ py: 2 }}
//                 >
//                     Search Students
//                 </Button>
//                 <Button
//                     component={Link}
//                     to="/qr-codes"
//                     variant="contained"
//                     size="large"
//                     startIcon={<QrCodeIcon />}
//                     fullWidth
//                     sx={{ py: 2 }}
//                 >
//                     QR Codes
//                 </Button>
//             </Grid>
//         </Container>
//     );
// };

// export default Homepage;

import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Grid, Card, CardContent, CardActions } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import SearchIcon from '@mui/icons-material/Search';
import QrCodeIcon from '@mui/icons-material/QrCode';

const Homepage = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 5 }}>
            <Typography variant="h2" component="h1" color="primary" gutterBottom align="center">
                Student Mark Management System
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {/* View Students */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card elevation={3}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom align="center">
                                View Students
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ justifyContent: 'center' }}>
                            <Button
                                component={Link}
                                to="/student-list"
                                color="primary"
                                variant="contained"
                            >
                                Go
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                {/* Create Student */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card elevation={3}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom align="center">
                                Create Student
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ justifyContent: 'center' }}>
                            <Button
                                component={Link}
                                to="/create-student"
                                color="primary"
                                variant="contained"
                            >
                                Go
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                {/* Export */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card elevation={3}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom align="center">
                                Export Data
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ justifyContent: 'center' }}>
                            <Button
                                component={Link}
                                to="/export"
                                color="primary"
                                variant="contained"
                            >
                                Go
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                {/* GitHub */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card elevation={3}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom align="center">
                                GitHub Repository
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ justifyContent: 'center' }}>
                            <Button
                                color="primary"
                                component="a"
                                href="https://github.com/suman492/stdmkMgmt"
                                target="_blank"
                                variant="contained"
                                rel="noopener noreferrer"
                                startIcon={<GitHubIcon />}
                            >
                                Visit
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                {/* Resume */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card elevation={3}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom align="center">
                                Resume
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ justifyContent: 'center' }}>
                            <Button
                                color="primary"
                                component="a"
                                href="https://docs.google.com/document/d/1ncz3J_GCgqLG-kwAHE2CZamT3bMhtr-RuPqBkiPvU2Q/edit?usp=drive_link"
                                target="_blank"
                                variant="contained"
                                rel="noopener noreferrer"
                            >
                                View
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                {/* Search Students */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card elevation={3}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom align="center">
                                Search Students
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ justifyContent: 'center' }}>
                            <Button
                                component={Link}
                                to="/search"
                                color="primary"
                                variant="contained"
                                startIcon={<SearchIcon />}
                            >
                                Go
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                {/* QR Codes */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card elevation={3}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom align="center">
                                QR Codes
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ justifyContent: 'center' }}>
                            <Button
                                component={Link}
                                to="/qr-codes"
                                color="primary"
                                variant="contained"
                                startIcon={<QrCodeIcon />}
                            >
                                Go
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Homepage;