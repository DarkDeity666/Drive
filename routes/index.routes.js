import express from "express";
import upload from "../middleware/multer.middleware.js";
import fileModel from "../models/files.model.js";
import authMiddleware from "../middleware/auth.middelware.js";
const router = express.Router();


router.get("/home", authMiddleware,(req,res)=>{
    res.render("home")
})

router.post("/upload-file",authMiddleware, upload.single('file'), async (req,res)=>{
    if(!req.file){
        return res.status(400).json({
            success: false,
            message: "No file uploaded"
        });
    }
    
    // res.json({
    //     success: true,
    //     message: "File uploaded to S3 successfully",
    //     file: {
    //         filename: req.file.key,
    //         bucket: req.file.bucket,
    //         size: req.file.size,
    //         mimetype: req.file.mimetype,
    //         originalname: req.file.originalname,
    //         s3Key: req.file.key
    //     }
    // });
    console.log(req.file);

    const newFile = await fileModel.create({
        path: req.file.key,
        originalName: req.file.originalname,
        user: req.user.userId
    })
    res.json(newFile)
    // await newFile.save();

})

export default router;