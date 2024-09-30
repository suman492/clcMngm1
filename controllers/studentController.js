const studentModel = require('../model/studentModel'); //importing the student model 

exports.createStudentInfo=async(req,res)=>{
    try{
        let newStudent=new studentModel({
            first_name: req.body.first_name,
            last_name:req.body.last_name,
            unique_id: req.body.unique_id,
            mail_id: req.body.mail_id,
            current_address: req.body.current_address,
            attendence: req.body.attendence,
            total_score: req.body.total_score,
            avg_cgpa: req.body.avg_cgpa
        });
        newStudent=await newStudent.save();
        res.send(newStudent)
    }catch(error)
    {
        res.status(400).send(err.message); // Send an error response if something goes wrong

    }
};


// get single student information

exports.getstudentInfo=async(req ,res)=>{
    try{
        const studentInfo = await  studentModel.find(); //get all the student info from the db
        res.send(studentInfo);
    }catch(err){
        res.status(400).send(err.message)
    }
    
}