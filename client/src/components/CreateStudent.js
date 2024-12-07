import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

//import axios from 'axios';

const CreateStudent = (props) => {


    return (
        <div className='CreateStudent'>
            {/* <Navbar /> */}
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 m-auto'>
                        <br />
                        <Link to='/' className='btn btn-outline-warning float-left'>
                            Show Student list
                        </Link>
                    </div>
                    <div className='col-md-8 m-auto'>
                        <h1 className='display-4 text-center'>Add Student</h1>
                        <p className='lead text-center'>Create new student</p>

                        <form noValidate onSubmit={onSubmit}>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Name of the Student'
                                    name='name'
                                    className='form-control'
                                    value={student.name}
                                    onChange={onChange}
                                />
                            </div>
                            <br />
                            <div className='form-group'>
                                <input
                                    type='email'
                                    placeholder='Email'
                                    name='email'
                                    className='form-control'
                                    value={student.mail_id}
                                    onChange={onChange}
                                />
                            </div>
                            <br />
                            <div className='form-group'>
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
                                <input
                                    type='text'
                                    placeholder='Enter your current address'
                                    name='address'
                                    className='form-control'
                                    value={student.current_address}
                                    onChange={onChange}
                                />
                            </div>
                            <br />
                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Enter True or False'
                                    name='attendence'
                                    className='form-control'
                                    value={student.attendence}
                                    onChange={onChange}
                                />
                            </div>
                            <br />
                            <div className='form-group'>
                                <input
                                    type='number'
                                    placeholder='Enter the Total Score'
                                    name='score'
                                    className='form-control'
                                    value={student.total_score}
                                    onChange={onChange}
                                />
                            </div>
                            <br />
                            <div className='form-group'>
                                <input
                                    type='number'
                                    placeholder='Enter Average CGPA'
                                    name='cgpa'
                                    className='form-control'
                                    value={student.avg_cgpa}
                                    onChange={onChange}
                                />
                            </div>
                        </form>    
                    </div>
                </div>
            </div>
        </div>
    )
}