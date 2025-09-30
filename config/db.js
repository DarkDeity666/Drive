import mongoose from "mongoose";
// import dotenv from "dotenv/config"; 
function connectDB(){
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("Database Connected Successfully");
    }).catch((error)=>{
        console.log("Database Connection Failed");
        console.log(error);
    });
}
export default connectDB;