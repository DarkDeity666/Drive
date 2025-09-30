import express from 'express';
import dotenv from 'dotenv/config';
import {dirname,join} from "path";
import { fileURLToPath } from 'url';
import userRouters from './routes/user.routes.js';
import connectDB from './config/db.js';
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.set("view engine", "ejs")
app.set("views", join(__dirname, "views"))

app.use('/user', userRouters)
connectDB();


const port = process.env.PORT || 3100;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})


