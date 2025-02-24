const studentModel = require('../model/studentModel'); //importing the student model 

exports.createStudentInfo = async (req, res) => {
    try {
        let newStudent = new studentModel({
            name: req.body.name,
            mail_id: req.body.mail_id,
            dob: req.body.dob,
            current_address: req.body.current_address,
            total_score: req.body.total_score,
            avg_cgpa: req.body.avg_cgpa
        });
        newStudent = await newStudent.save();
        res.send(newStudent)
    } catch (err) {
        res.status(400).send(err.message); // Send an error response if something goes wrong

    }
};


// get single student information

exports.getstudentInfo = async (req, res) => {
    try {
        const studentInfo = await studentModel.find(); //get all the student info from the db
        res.send(studentInfo);
    } catch (err) {
        res.status(400).send(err.message)
    }

};

exports.getstudentById = async (req, res) => {
    try {
        const studentById = await studentModel.findById(req.params.id);
        if (!studentById) return res.status(404).send('Student not found in database');
        res.send(studentById);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

exports.updateStudent = async (req, res) => {
    try {
        const studentById = await studentModel.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            mail_id: req.body.mail_id,
            dob: req.body.dob,
            current_address: req.body.current_address,
            attendence: req.body.attendence,
            total_score: req.body.total_score,
            avg_cgpa: req.body.avg_cgpa
        }, { new: true });
        if (!studentById) return res.status(404).send('Student not found in database');
        res.send(studentById);
        console.log("Student updated successfully");
    } catch (err) {
        res.status(400).send(err.message);
    }
};

exports.deleteStudentById = async (req, res) => {
    try {
        const studentById = await studentModel.findByIdAndDelete(req.params.id);
        if (!studentById) return res.status(404).send('Student not found in database');
        res.status(204).send("Student deleted successfully");
    } catch (err) {
        res.status(400).send(err.message);
    }
};