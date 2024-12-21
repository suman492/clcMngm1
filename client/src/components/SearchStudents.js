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
import BookCard from './BookCard';
import axios from 'axios';

const SearchStudents = () => {
    const [students, setStudents] = useState([]);
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [names, setNames] = useState([]);

    const [filters, setFilters] = useState({
        searchTerm: '',
        searchField: 'title',
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
    }
}