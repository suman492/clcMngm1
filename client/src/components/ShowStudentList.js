import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Typography, Container, Grid, CircularProgress, Box } from '@mui/material';

import StudentCard from './StudentCard';

function ShowStudentList() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        axios
        .get(`https://5000-suman492-stdmkmgmt-wgp8vr4w28d.ws-us117.gitpod.io/api/student`)
        .then((res) => {
            setStudents(res.data);
            setLoading(false);
        })
        .catch((err) =>{
            console.log('Error from ShowStudentList ->', err);
            setLoading(false);
        });
    },[]);

    return (
        <Container maxWidth="lg" sx={{ py: 4}}>
            <Typography variant='h3' component="h1" color='primary' gutterBottom>
                Students List
            </Typography>
            <Button 
              component={Link}
              to="/create-student"
              color='primary'
              variant='contained'
              sx={{ mb: 4}}
            >
                Add New Student
            </Button>

            {loading ?(
                <Box display="flex" justifyContent="center" mt={4}>
                <CircularProgress />
              </Box>
            ) : (
                <Grid container spacing={ 3 }>
                    {students.length === 0 ?(
                        <Grid item xs={12}>
                            <Typography variant='h6' color='text.secondary'>
                                No Students found!
                            </Typography>
                        </Grid>
                    ) : (
                        students.map((student,index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <StudentCard student={student} />
                            </Grid>
                        ))
                    )}
                </Grid>
            )}
        </Container>
    );
}

export default ShowStudentList;