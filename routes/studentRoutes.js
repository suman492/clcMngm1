const express = require('express')
const router= express.Router();

const studentController = require('../controllers/studentController.js');


router.post('/student', studentController.createStudentInfo);      // Create a newSTUDENT
router.get('/student', studentController.getstudentInfo);




module.exports = router;