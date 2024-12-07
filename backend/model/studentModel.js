const mongoose = require('mongoose');

const studentInfoSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true
      },
      // last_name:{
      //   type: String,
      //   required: true,
      // },
      mail_id:{
        type: String,
        required:true,
        unique: true
      },
      dob:{
        type: Date,
        required: true
      },
      current_address:{ 
        type: String,
        required: true
      },
      attendence:{
        type: Boolean
      },
      total_score:{
        type: Number,
        required:true
      },
      avg_cgpa:{
        type: Number,
        required:true
         }
    
});

const studentModel= mongoose.model('Student',studentInfoSchema)

module.exports= studentModel;