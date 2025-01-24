const express=require('express');
const mongoose=require('mongoose')
const app=express()
const PORT=8084
let connection= mongoose.connect("mongodb+srv://abdulrahmans66:3Ontsj1rT5n0LsjA@cluster0.vnxb5.mongodb.net/")
app.get("/ping",(req,res)=>{
    res.send("pong")
})
app.listen(PORT,async()=>{
try{
    await connection;
    console.log("Successfully connected to MongoDB");
} catch (error){
    console.log(error);
}
    console.log(`Server is running on port ${PORT}`)
})