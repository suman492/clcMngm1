const express = require('express');
const connectDB = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');
// const mongoose = require('mongoose');

connectDB();
const app = express();
const port = 3000;


app.use(express.json())

app.use('/api', studentRoutes); 
let student = [];

app.get('/books',(req,res) => {
    res.send('hello world!');
});



app.listen(port,() => {
    console.log(`server running at http://localhost:${port}`);
})