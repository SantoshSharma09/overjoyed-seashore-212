const express= require("express");
const app= express();

const {connection}= require("./db")
require("dotenv").config();


app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.listen(process.env.port,async()=>{
    try{
            await connection;
            console.log("Connected to DB");
    }
    catch(err){
        console.log("Error")
    }
    console.log(`Server is running at ${process.env.port}`)
})