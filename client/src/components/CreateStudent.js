import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const CreateStudent = (props) => {
    const navigate = useNavigate();
    const [student, setStudent ] = useState({
        name: '',
        mail_id: '',
        dob: '',
        current_address: '',
        attendence: '',
        total_score: '',
        avg_cgpa: ''
    });

    const onChange = (e) => {
        console.log(e.target.value)
        setStudent({...student,[e.target.name]: e.target.value})
        // setStudent({ ...student, [e.target.mail_id]: e.target.value });
      };
      console.log(student)

      const onSubmit = (e) => {
        e.preventDefault();
    
        axios
          .post('/api/students', student)
          .then((res) => {
            setStudent({
                name: '',
                mail_id: '',
                dob: '',
                current_address: '',
                attendence: '',
                total_score: '',
                avg_cgpa: ''
            });

            // Delay the navigation slightly to allow the toast to be seen
        setTimeout(() => {
            //setShowToast(false); // Hide the toast
            navigate('/'); // Navigate to homepage
          }, 5000); // Adjust the timeout as needed
  
        })
        .catch((err) => {
            console.log('Error in CreateStudent!');
            console.log('The error is ->')
            console.log(err)
        });
      };


    return (
        
        <div className='CreateStudent'>
    {/* <Navbar /> */}
    <div className='container d-flex align-items-center justify-content-center '>
        <div className='row w-100'>
            <div className='col-md-8 m-auto'>
                <br />
                <Link to='/create-student' className='btn btn-outline-warning float-left'>
                    Show Student list
                </Link>
            </div>
            <div className='col-md-8 m-auto'  style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
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
                            value={student.email}
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
                            value={student.address}
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
                            value={student.score}
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
                            value={student.cgpa}
                            onChange={onChange}
                        />
                    </div>
                    <br />
                    <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
                </form>    
            </div>
        </div>
    </div>
</div>

    )
}

export default CreateStudent;