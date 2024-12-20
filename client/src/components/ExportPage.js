import React, { useState, useEffect } from 'react';
import { Container, Paper, Typography, Button, Box, CircularProgress } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
// import TableViewIcon from '@mui/icons-material/TableView';
// import DownloadIcon from '@mui/icons-material/Download';
// import DescriptionIcon from '@mui/icons-material/Description';
import axios from 'axios';
//import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
//import * as XLSX from 'xlsx';

const ExportPage = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://student-mark-management.onrender.com/api/student')
            .then(res => {
                setStudents(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching books:', err);
                setLoading(false);
            });
    }, []);

    const exportToPDF = () => {
        const doc = new jsPDF();


        doc.setFontSize(16);
        doc.text('Students List', 14, 15);
        doc.setFontSize(15);
        doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 25);

        const tableColum = ["Name", "DOB", "Total_score", "Avg_cgpa"]
        const tableRows = students.map(student => [
            student.name,
            student.dob,
            student.total_score,
            student.avg_cgpa
        ]);

        doc.autoTable({
            startY: 30,
            head: [tableColum],
            body: tableRows,
            theme: 'grid',
            styles: { fontSize: 8 },
            headStyles: { fillColor: [41, 128, 185], textColor: 255 }
        });


        doc.save('students-list.pdf');
    }

    if (loading) {
        return (
            <Container sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <CircularProgress />
            </Container>
        );
    }


    return (
        <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
            <Paper sx={{ p: 4 }}>
                <Typography variant='h4' gutterBottom align='center' color='primary'>
                    Export Students
                </Typography>

                <Typography variant="body1" sx={{ mb: 4 }} align="center" color="text.secondary">
                    Export your student collection in different formats
                </Typography>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                    gap: 3,
                    mt: 4
                }}>
                    <Button
                        variant="contained"
                        size="large"
                        startIcon={<PictureAsPdfIcon />}
                        onClick={exportToPDF}
                        sx={{ p: 2 }}
                    >
                        Export as PDF
                    </Button>
                </Box>
            </Paper>
        </Container>
    )
}

export default ExportPage;