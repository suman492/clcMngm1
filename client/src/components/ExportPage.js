import React, { useState, useEffect } from 'react';
import { Container, Paper, Typography, Button, Box, CircularProgress } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import TableViewIcon from '@mui/icons-material/TableView';
import DownloadIcon from '@mui/icons-material/Download';
import DescriptionIcon from '@mui/icons-material/Description';
import axios from 'axios';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';

const URL = process.env.REACT_APP_RENDER_URL

const ExportPage = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${URL}/api/student`)
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
    };

    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(students.map(student => ({
            Name: student.name,
            Email: student.mail_id,
            DOB: student.dob,
            Score: student.total_score,
            CGPA: student.avg_cgpa
        })));

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Students");
        const excelBuffer = XLSX.write(workbook, { studentType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        saveAs(data, 'students-list.xlsx');
    };

    const exportToCSV = () => {
        const worksheet = XLSX.utils.json_to_sheet(students.map(student => ({
            Name: student.name,
            Email: student.mail_id,
            DOB: student.dob,
            Score: student.total_score,
            CGPA: student.avg_cgpa
        })));
        
        const csv = XLSX.utils.sheet_to_csv(worksheet);
        const data = new Blob([csv], { type: 'text/csv;charset=utf-8' });
        saveAs(data, 'students-list.csv');
      };

      const exportToText = () => {
        let content = 'Students List\n\n';
        content += `Generated on: ${new Date().toLocaleDateString()}\n\n`;

        students.forEach((student, index) => {
            content += `${index + 1}. STUDENT DETAILS\n`;
            content += `Name: ${student.name}\n`;
            content += `DOB: ${student.dob}\n`;
            content += `Score: ${student.total_score}\n`;
            content += `CGPA: ${student.avg_cgpa}`;
            content += '\n----------------------------\n\n';
        });

        const blob = new Blob([content], {type: 'text/plain;charset=utf-8' });
        saveAs(blob, 'patients-list.txt');
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
                    { <Button
                    variant="contained"
                    size="large"
                    startIcon={<TableViewIcon />}
                    onClick={exportToCSV}
                    sx={{ p: 2 }}
                  >
                    Export as CSV
                  </Button> }
                  { <Button
                    variant="contained"
                    size="large"
                    startIcon={<DownloadIcon />}
                    onClick={exportToExcel}
                    sx={{ p: 2 }}
                  >
                    Export as Excel
                  </Button> }
                  { <Button
                    variant="contained"
                    size="large"
                    startIcon={<DescriptionIcon />}
                    onClick={exportToText}
                    sx={{ p: 2 }}
                  >
                    Export as Text
                  </Button> }
                </Box>
                <Typography variant="body2" sx={{ mt: 4 }} align="center" color="text.secondary">
                  Total Students: {students.length}
                </Typography>
            </Paper>
        </Container>
    )
}

export default ExportPage;