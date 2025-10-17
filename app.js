import express from 'express';
import dotenv from 'dotenv/config';
import fs from "fs";
import multer from "multer";
import {dirname,join} from "path";
import { fileURLToPath } from 'url';
import userRouters from './routes/user.routes.js';
import indexRouter from './routes/index.routes.js';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"))
app.use(cookieParser());

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.set("view engine", "ejs")
app.set("views", join(__dirname, "views"))
connectDB();



app.use('/user', userRouters)
app.use('/', indexRouter)

const port = process.env.PORT || 3100;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})


