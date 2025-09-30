import { Router } from "express";
const router = Router();


router.get("/register",(req,res)=>{
    res.render("register")
})

router.post("/register",(req,res)=>{
    const {username,email,password} = req.body;
    console.log({username,email,password});
    res.send("user registered successfully")
})


export default router;






