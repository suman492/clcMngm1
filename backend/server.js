const express = require('express');
const connectDB = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');
// const mongoose = require('mongoose');


const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(express.json())

app.get('/',(req,res) => {
    return res.send('hello world!');
 });
app.use('/api', studentRoutes); 


app.listen(port,() => {
    console.log(`server running at http://localhost:${port}`);
})
