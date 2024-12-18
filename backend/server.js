const express = require('express');
const cors = require("cors")
const dotenv = require("dotenv")

const connectDB = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');
const path = require('path');
dotenv.config({ path: "./config.env"})


const app = express();

connectDB();

app.use(express.json())
app.use(cors());


app.get('/',(req,res) => {
    return res.send('hello world!');
});
app.use('/api', studentRoutes); 

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
    res.sendFile(
        path.join(__dirname, "./client/build/index.html"),
        function (err) {
            res.status(500).send(err);
        }
    );
});

const port = process.env.PORT || 5000;
app.listen(port,() => {
    console.log(`server running at http://localhost:${port}`);
})
