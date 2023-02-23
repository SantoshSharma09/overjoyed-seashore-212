const express=require("express")
const { BookModel } = require("../modals/book.modal")
const bookRouter=express.Router()


bookRouter.get("/", (req,res)=>{
     res.send({"msg":"Home page of Book router"})
})

bookRouter.post("/post",async(req,res)=>{
try{
   

   let users= new BookModel(req.body);
   console.log(users)
   await users.save();
   res.send("Data posted of books")

}
catch(err){
   res.send({"Msg":"Error in data post for books"})
}

})

module.exports={
   bookRouter
}