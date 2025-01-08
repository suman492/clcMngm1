import React, { useState, useEffect, useCallback } from 'react';
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

const URL = process.env.RENDER_URL

const SearchStudents = () => {
    const [students, setStudents] = useState([]);
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [names, setNames] = useState([]);

    const [filters, setFilters] = useState({
        searchTerm: '',
        searchField: 'name',
        sortBy: 'name',
        sortOrder: 'asc',
        name: 'all'
    });


    useEffect(() => {
        axios.get(`${URL}/api/student`)
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

    const applyFilters = useCallback(() => {
        let result = [...students];

        if (filters.searchTerm) {
            result = result.filter(student => {
                const searchValue = student[filters.searchField]?.toString().toLowerCase();
                return searchValue?.includes(filters.searchTerm.toLowerCase());
            });
        }

        // Apply name filter
        if (filters.name !== 'all') {
            result = result.filter(student => student.name === filters.name);
        }

        // Apply Sorting
        result.sort((a,b) => {
            let valueA = a[filters.sortBy]?.toString().toLowerCase();
            let valueB = b[filters.sortBy]?.toString().toLowerCase();

            if (filters.sortBy === 'dob') {
                valueA = new Date(a.dob);
                valueB = new Date(a.dob);
            }


            if (valueA < valueB) return filters.sortOrder === 'asc' ? -1 : 1;
            if (valueA > valueB) return filters.sortOrder === 'asc' ? 1 : -1;
            return 0;
        })

        setFilteredStudents(result);
    },[filters, students])

    useEffect(()=> {
        applyFilters();
    },[applyFilters]);

    const resetFilters = () => {
        setFilters({
            searchTerm: '',
            searchField: 'name',
            sortBy: 'name',
            sortOrder: 'asc',
            name: 'all'
        });
    };

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

                        {/*Search By Dropdown */}
                        <Grid item sx={12} md={2}>
                            <FormControl fullWidth>
                                <InputLabel>Search By</InputLabel>
                                <Select
                                   value={filters.searchField}
                                   label="Search By"
                                   onChange={(e) => setFilters({ ...filters,searchField: e.target.value })}
                                >
                                    <MenuItem value="name">Name</MenuItem>
                                    <MenuItem value="current_address">Address</MenuItem>
                                    <MenuItem value="total_score">Score</MenuItem>
                                    <MenuItem value="avg_cgpa">CGPA</MenuItem>
                                </Select>  
                            </FormControl>
                        </Grid>

                        {/*Sort By Dropdown */}
                        <Grid item xs={12} md={2}>
                            <FormControl fullWidth>
                                <InputLabel>Sort By</InputLabel>
                                <Select
                                   value={filters.sortBy}
                                   label="Sort By"
                                   onChange={(e) => setFilters({ ...filters,sortBy: e.target.value })}
                                >
                                    <MenuItem value="name">Name</MenuItem>
                                    <MenuItem value="current_address">Address</MenuItem>
                                    <MenuItem value="dob">DOB</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        {/*Sort Order*/}
                        <Grid item xs={12} md={2}>
                            <FormControl fullWidth>
                                <InputLabel>Order</InputLabel>
                                <Select
                                   value={filters.sortOrder}
                                   label="Order"
                                   onChange={(e) => setFilters({ ...filters, sortOrder: e.target.value })}
                                >
                                    <MenuItem value="asc">Ascending</MenuItem>
                                    <MenuItem value="desc">Descending</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        {/*Name Filter */}
                        <Grid item xs={12} md={2}>
                            <FormControl fullWidth>
                                <InputLabel>Name</InputLabel>
                                <Select
                                   value={filters.name}
                                   label="Name"
                                   onChange={(e) => setFilters({ ...filters, name: e.target.value })}
                                >
                                    <MenuItem value="all">All Names</MenuItem>
                                    {names.map((name, index) => (
                                        <MenuItem key={index} value={name}>
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>

                        {/*Reset Button*/}
                        <Grid item xs={12}>
                            <Box display="flex" justifyContent="center">
                                <Button
                                   variant='outlined'
                                   startIcon={<RestartAltIcon />}
                                   onClick={resetFilters}
                                >
                                    Reset Filters
                                </Button>
                            </Box>
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