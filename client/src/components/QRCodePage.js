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
    const [ students, setStudents] = useState([]);
    const [ loading, setLoading] = useState(true);
    const baseUrl = 'https://student-mark-management.onrender.com/show-student/';

    useEffect(() => {
        axios.get('https://student-mark-management.onrender.com/api/student')
        .then(res => {
            setStudents(res.data);
            setLoading(false);
        })
        .catch(err => {
            console.error('Error fetching books:',err);
            setLoading(false);
        });
    },[]);

    const downloadQR = (studentId, studentName) => {
        const canvas = document.createElement("canvas");
        const svg = document.getElementById(`qr-${studentId}`);
        const serializer = new XMLSerializer();
        const source = serializer.serializeToString(svg);

        const img = new Image();
        img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(source);
    }
}