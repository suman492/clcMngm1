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
                                    placeholder='First Name of the Student'
                                    name='fname'
                                    className='form-control'
                                    value={student.first_name}
                                    onChange={onChange}
                                />
                            </div>
                            <br />
                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Last name of the student'
                                    name='lname'
                                    className='form-control'
                                    value={student.last_name}
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
                        </form>    
                    </div>
                </div>
            </div>
        </div>
    )
}