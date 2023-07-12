import express from "express";
const app = express();
app.get('/',(req,res)=>{
    res.send("hello world.This is my first Express App")
})
app.listen(3000,()=>{
    console.log("Server is running on http://Localhost:3000");
})