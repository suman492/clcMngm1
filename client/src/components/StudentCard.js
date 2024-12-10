import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const StudentCard = ({ student }) => {
    return (
        <Card
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                borderRadius: 2,
                boxShadow: 3,
                '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 6,
                },
            }}
        >
            <img
                src='https://eacademics.in/img/i5.png'
                alt='Students'
                style={{ height: 200, objectFit: 'cover', width: '100%' }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant='h6' component='div' color='primary' gutterBottom>
                    <Link to={`/show-student/${student._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        {student.name}
                    </Link>
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    {student.dob}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}
                    style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                    }}>
                    {student.total_score}
                </Typography>
            </CardContent>
            <Box sx = {{p: 2, mt: 'auto'}}>
                <Button
                  component={Link}
                  to={`/show-student/${student._id}`}
                  variant='contained'
                  color='primary'
                  size='small'
                  fullWidth
                >
                    view Details
                </Button>
            </Box>
        </Card>
    );
};

export default StudentCard;