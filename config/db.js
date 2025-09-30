import mongoose from "mongoose";

const Connection = mongoose.connect('mongodb://0.0.0.0/DriveDB').then(()=>{
    console.log("Database Connected Successfully");
});

export default Connection;