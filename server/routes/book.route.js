const express=require("express")

const bookRouter=express.Router()

bookRouter.get("/", (req,res)=>{
     res.send({"msg":"get all products"})
})

module.exports={
   bookRouter
}