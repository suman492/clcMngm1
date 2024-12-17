import React, { useState, useEffect } from 'react';
import { useParams, Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Paper,
  Typography,
  Grid,
  Button,
  Card,
  CardMedia,
  Divider,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const ShowStudentDetails = () => {
  const [student, setStudent] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const value = useParams();
  const id = value.id
  const navigate = useNavigate();

  useEffect(() => {

    if (id) {
      axios
        .get(`https://5000-suman492-stdmkmgmt-wgp8vr4w28d.ws-us117.gitpod.io/api/student/${id}`)
        .then((res) => {
          setStudent(res.data);
        })
        .catch((err) => {
          console.error("Error fetching student details:", err);
        });
    }

  }, [id])

  const onDeleteClick = () => {
    setOpenDialog(true);
  };

  const handleDeleteConfirm = () => {
    axios
      .delete(`https://5000-suman492-stdmkmgmt-wgp8vr4w28d.ws-us117.gitpod.io/api/student`)
      .then((res) => {
        navigate('/student-list');
      })
      .catch((err) => {
        console.log('Error from ShowStudentDetails_deleteClick');
      });
    setOpenDialog(false);
  };

  const handleDeleteCancel = () => {
    setOpenDialog(false);
  };

  return (
    <Container maxWidth="md">
      {(
        <StyledPaper>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
                  alt={student.name}
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant='h4' component='h1' gutterBottom>
                {student.name}
              </Typography>
              <Typography variant='h6' color='textSecondary' gutterBottom>
                {student.avg_cgpa}
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Box display="flex" flexDirection="column">
                <Typography variant='body1' paragraph>Name: {student.name}</Typography>
                <Typography variant='body1'>ID: {student._id}</Typography>
                <Typography variant='body1'>Email: {student.mail_id}</Typography>
                <Typography variant='body1'>Date of Birth: {student.dob}</Typography>
                <Typography variant='body1'>Address: {student.current_address}</Typography>
                <Typography variant='body1'>Score: {student.total_score}</Typography>
                <Typography variant='body1'>CGPA: {student.avg_cgpa}</Typography>
              </Box>
            </Grid>
          </Grid>
          <Box mt={4} display="flex" justifyContent="space-between">
            <Button
              startIcon={<ArrowBackIcon />}
              component={RouterLink}
              to="/student-list"
              variant="outlined"
            >
              Back to Student List
            </Button>
            <Box>
              <Button
                startIcon={<EditIcon />}
                component={RouterLink}
                to={`/edit-student/${student._id}`}
                variant="contained"
                color="primary"
                sx={{ mr: 1 }}
              >
                Edit Student
              </Button>
              <Button
                startIcon={<DeleteIcon />}
                onClick={onDeleteClick}
                variant="contained"
                color="error"
              >
                Delete Book
              </Button>
            </Box>
          </Box>
        </StyledPaper>
      )}

      {/* Keep the dialog unchanged */}
      <Dialog
        open={openDialog}
        onClose={handleDeleteCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this student? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ShowStudentDetails;