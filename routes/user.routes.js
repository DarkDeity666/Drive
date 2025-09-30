import { Router } from "express";
import { body, validationResult} from "express-validator";
const router = Router();


router.get("/register",(req,res)=>{
    res.render("register")
})

router.post("/register", body('email').trim().isEmail(),
body('username').trim().isLength({min:3}),
body('password').trim().isLength({min:3})
,(req,res)=>{
    const errors = validationResult(req);
    const {username,email,password} = req.body;
    console.log({username,email,password});
    if(!errors.isEmpty()){
        return res.status(400).send(errors.array(),message= "Invalid data" );
    }

    // res.send("user registered successfully")
    res.send(errors.array())
})


export default router;






