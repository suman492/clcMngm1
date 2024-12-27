import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateStudentInfo(props) {
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
  }, [id]);

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
      .put(`https://student-mark-management.onrender.com/api/student/${id}`, data)
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
      <div className='container d-flex align-items-center justify-content-center'>
        <div className='row w-100'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btm-outline-warning float-left'>
              Show Student List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Student</h1>
            <p className='lead text-center'>Update Student's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto' style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                placeholder='Name of the student'
                name='name'
                className='form-control'
                value={student.name}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='mail_id'>Email id</label>
              <input
                type='email'
                placeholder='Email'
                name='mail_id'
                className='form-control'
                value={student.mail_id}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='dob'>Date of birth</label>
              <input
                type='date'
                placeholder='Enter date of birth'
                name='dob'
                className='form-control'
                value={student.dob}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='current_address'>Address</label>
              <input
                type='text'
                placeholder='Enter your current address'
                name='current_address'
                className='form-control'
                value={student.current_address}
                onChange={onChange}
              />
            </div>
            <br />
            {/* <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Enter True or False'
                                    name='attendence'
                                    className='form-control'
                                    value={student.attendence}
                                    onChange={onChange}
                                />
                            </div>
                            <br /> */}
            <div className='form-group'>
              <label htmlFor='total_score'>Score</label>
              <input
                type='number'
                placeholder='Enter the Total Score'
                name='total_score'
                className='form-control'
                value={student.total_score}
                onChange={onChange}
              />
            </div>
            <br />

  
            <div className='form-group'>
              <label htmlFor='avg_cgpa'>CGPA</label>
              <input
                type='number'
                placeholder='Enter Average CGPA'
                name='avg_cgpa'
                className='form-control'
                value={student.avg_cgpa}
                onChange={onChange}
              />
            </div>
            <br />

            <button
               type='sumbit'
               className='btn btn-outline-info btn-lg btn-block'
            >
              Update Student
            </button>
            <br /><br />
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateStudentInfo;