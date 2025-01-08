import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import {
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
    CircularProgress,
    Box
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import axios from 'axios';

const QRCodePage = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const URL = process.env.RENDER_URL
    const baseUrl = `${URL}/show-student/`;

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

    const downloadQR = (studentId, studentName) => {
        const canvas = document.createElement("canvas");
        const svg = document.getElementById(`qr-${studentId}`);
        const serializer = new XMLSerializer();
        const source = serializer.serializeToString(svg);

        const img = new Image();
        img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(source);

        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);

            const a = document.createElement('a');
            a.download = `QR-${studentName.replace(/\s+/g, '-')}.png`;
            a.href = canvas.toDataURL('image/png');
            a.click();
        };
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
                Student QR Codes
            </Typography>
            <Typography variant='body1' gutterBottom align='center' sx={{ mb: 4 }}>
                Scan QR codes to quickly access student details
            </Typography>

            <Grid container spacing={3}>
                {students.map((student) => (
                    <Grid item xs={12} sm={6} md={4} key={student._id}>
                        <Card sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            p: 2
                        }}>
                            <CardContent sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                width: '100%'
                            }}>
                                <QRCodeSVG
                                    id={`qr-${student._id}`}
                                    value={`${baseUrl}${student._id}`}
                                    size={200}
                                    level="H"
                                    includeMargin
                                />
                                <Typography
                                    variant="h6"
                                    component="div"
                                    align="center"
                                    sx={{ mt: 2, mb: 1 }}
                                >
                                    {student.name}
                                </Typography>
                                {/* <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    align="center"
                                    sx={{ mb: 2 }}
                                >
                                    By {book.author}
                                </Typography> */}
                                <Button
                                    variant="outlined"
                                    startIcon={<DownloadIcon />}
                                    onClick={() => downloadQR(student._id, student.name)}
                                    size="small"
                                >
                                    Download QR
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default QRCodePage;