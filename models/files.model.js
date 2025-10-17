import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    path:{
        type: String,
        required:[ true, "path is required "]
    },
    originalName:{
        type: String,
        required:[true, "Original Name is Required"]
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:[true, "User id is required"]
    }
})

const fileModel =mongoose.model("file", fileSchema);

export default fileModel;