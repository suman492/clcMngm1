import React, { useState, useEffect } from 'react';
import {
    Container,
    TextField,
    Typography,
    Box,
    Card,
    CardContent,
    Grid,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    Button,
    CircularProgress
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import StudentCard from './StudentCard';
import axios from 'axios';

const SearchStudents = () => {
    const [students, setStudents] = useState([]);
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [names, setNames] = useState([]);

    const [filters, setFilters] = useState({
        searchTerm: '',
        searchField: 'name',
        sortBy: 'title',
        sortOrder: 'asc',
        name: 'all'
    });


    useEffect(() => {
        axios.get(`https://student-mark-management.onrender.com/api/student`)
          .then(res => {
            setStudents(res.data);
            setFilteredStudents(res.data);

            const uniqueNames = [...new Set(res.data.map(student => student.name))];
            setNames(uniqueNames);
            setLoading(false);
          })
          .catch(err => {
            console.error('Error fetching students:',err);
            setLoading(false);
          });
    },[]);

    const applyFilters = () => {
        let result = [...students];

        if (filters.searchTerm) {
            result = result.filter(book => {
                const searchValue = book[filters.searchField]?.toString().toLowerCase();
                return searchValue?.includes(filters.searchTerm.toLowerCase());
            });
        }

        setFilteredStudents(result);
    }

    useEffect(()=> {
        applyFilters();
    },[filters]);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant='h4' component='h1' gutterBottom align='center' color='primary'>
                Search Students
            </Typography>

            <Card sx = {{ mb: 4, p: 2}}>
                <CardContent>
                    <Grid container spacing={2} alignItems='center'>
                        <Grid item xs={12} md={4}>
                            <TextField
                               fullWidth
                               label="Search"
                               value={filters.searchTerm}
                               onChange={(e) => setFilters({...filters,searchTerm: e.target.value})}
                               InputProps={{
                                startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />
                               }}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            {/*Results Section */}
            <Box sx={{ mb: 2}}>
                <Typography variant='body1' color='text.secondary'>
                    Found {filteredStudents.length} students
                </Typography>
            </Box>

            <Grid container spacing={3}>
                {filteredStudents.map((student) => (
                    <Grid item sx={12} sm={6} md={4} key={student._id}>
                        <StudentCard student={student} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default SearchStudents;