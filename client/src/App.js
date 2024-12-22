// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
// import { Box } from '@mui/material';
import { CssBaseline, Box } from '@mui/material';
import calmOceanTheme from './theme/calmOcean';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CreateStudent from './components/CreateStudent';
import ShowStudentList from './components/ShowStudentList';
import ShowStudentDetails from './components/ShowStudentDetails';
// import UpdateBookInfo from './components/UpdateBookInfo';
import HomePage from './components/Homepage';
import ExportPage from './components/ExportPage';
import SearchStudents from './components/SearchStudents';
// import NotesPage from './components/NotesPage'; // Import NotesPage component

const App = () => {
  return (
    <ThemeProvider theme={calmOceanTheme}>
       <CssBaseline />
      <Router>
        <Box display="flex" flexDirection="column" minHeight="100vh">
          <Navbar />
          <Box component="main" flexGrow={1} py={3}>
            <Routes>
              <Route exact path='/' element={<HomePage />} />
              <Route path='/student-list' element={<ShowStudentList/>} />
              <Route path='/create-student' element={<CreateStudent />} />
              <Route path='/show-student/:id' element={<ShowStudentDetails />} />
              <Route path="/export" element={<ExportPage />} />
              <Route path="/search" element={<SearchStudents />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
     </ThemeProvider>
  );
};

export default App;