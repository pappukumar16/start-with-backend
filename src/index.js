
import dotenv from 'dotenv'
import connectDB from './db/index.js'

dotenv.config({
    path: './env'
})


connectDB()
.then( ()=>{
    app.listen(process.env.PORT || 7000, ()=>{
        console.log("Cunnection on port no "+ process.env.PORT);
    })
})
.catch( (err)=>{
    console.log(err);
})


/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express"
const app = express();


(async ()=>{
 try {

 await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)  
    app.on("error", (error)=>{
     console.log("Erroer" + error)
     throw error
    } )

   app.listen(process.env.PORT, ()=>{
    console.log(`connection on port no ${process.env.PORT}`);
   })

 } catch (error) {
    console.error("Erroer aaya hai " + error);
    throw error

 }
})()
*/