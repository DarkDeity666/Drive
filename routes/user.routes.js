import { Router } from "express";
import { body, validationResult} from "express-validator";
import userModel from "../models/user.model.js ";
import bcrypt from "bcrypt";
const router = Router();


router.get("/register",(req,res)=>{
    res.render("register")
})

router.post("/register", body('email').trim().isEmail(),
body('username').trim().isLength({min:3}),
body('password').trim().isLength({min:3})
,async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).send(errors.array());
    }
    const {username,email,password} = req.body;
    const hashedPassword = await bcrypt.hash(password,10);
    const newUser = await userModel.create({username:username,email:email,password:hashedPassword})

    res.json(newUser)


    // console.log({username,email,password});
    // res.send("user registered successfully")
    // res.send(errors.array())
})

router.get('/login',(req,res)=>{
    res.render('login')
})

router.post('/login',
    body('username').trim().isLength({min:6}),
    body('password').trim().isLength({min:6}),
    async (req,res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.send(errors.array());
        }
        const {username:username,password:password} = req.body

        const user = await userModel.findOne({username:username})

        if(!user){
            return res.status(400).send("Invalid Username or password")
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).send("Invalid Username or password")
        }
    })
export default router;






