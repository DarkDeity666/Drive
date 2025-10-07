import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        lowercase: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        minlength: [13,"email should be minimum 13 characters"]
    },
    password: {
        type: String,
        required: true,
        // trim: true,
        minlength: [6,"password should be minimum 6 characters"]

    },  
})

const userModel = mongoose.model("user", userSchema )
export default userModel;