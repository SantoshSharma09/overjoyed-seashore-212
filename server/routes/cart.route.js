const express= require("express");

const cartRouter= express.Router();

cartRouter.get("/",(req,res)=>{
    res.send("Cart home page")
})
cartRouter.post("/addedtocart",(req,res)=>{
    
})