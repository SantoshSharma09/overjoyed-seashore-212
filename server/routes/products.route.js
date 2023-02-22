const express= require("express");

const productRouter = express.Router();

productRouter.get("/",(req,res)=>{
    res.send("Home page of Products")
})

productRouter.post("/post",(req,res)=>{
    res.send("Product post")
})