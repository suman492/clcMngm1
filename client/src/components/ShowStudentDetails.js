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

const StyledPaper = Styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
}));

const ShowStudentDetails = () => {
    const [student, setStudent] = useState({});
    const [openDialog, setOpenDialog] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
          .get(`https://5000-suman492-stdmkmgmt-wgp8vr4w28d.ws-us117.gitpod.io/api/student`)
          .then((res) => {
            setStudent(res.data);
          })
          .catch((err) => {
            console.log('Error from ShowStudentDetails');
          });
    }, [id]);

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
            
        </Container>
    )
}