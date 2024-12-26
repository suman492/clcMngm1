import React, { useState, useEffect } from 'react';
import {Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateStudentInfo(props){
    const [student, setStudent] = useState({
        name: '',
        mail_id: '',
        dob: '',
        current_address: '',
        total_score: '',
        avg_cgpa: ''
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
          .get(`https://student-mark-management.onrender.com/api/student/${id}`)
          .then((res) => {
            setStudent({
                name: res.data.name,
                mail_id: res.data.mail_id,
                dob: res.data.dob,
                current_address: res.data.current_address,
                total_score: res.data.total_score,
                avg_cgpa: res.data.avg_cgpa
            });
          })
          .catch((err) => {
            console.log('Error from UpdateStudentInfo GET request');
            console.log(err);
          });
    },[id]);

    const onChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: student.name,
            mail_id: student.mail_id,
            dob: student.dob,
            current_address: student.current_address,
            total_score: student.total_score,
            avg_cgpa: student.avg_cgpa
        };

        axios
          .put(`https://student-mark-management.onrender.com/api/student/${id}`,data)
          .then((res) => {
            navigate(`/show-student/${id}`);
          })
          .catch((err) => {
            console.log('Error in UpdateStudentInfo PUT request');
            console.log(err);
          });
    };

    return (
        <div className='UpdateStudentInfo'>
            
        </div>
    )
}