const mongoose = require('mongoose');

const connectDB= async()=>{
       try{
        await mongoose.connect( 'mongodb://localhost:27017/ownDataBase',{
            
            useUnifiedTopology: true,
       });
       console.log("successfully connected to mongo db")
       }catch(error){
        console.error(error.message);
        process.exit(1);
       }
};


module.exports= connectDB