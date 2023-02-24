const express=require("express")
const { BookModel } = require("../modals/book.modal")
const bookRouter=express.Router()


bookRouter.get("/", async(req,res)=>{
   const users= await BookModel.find();
   
     res.send(users)
})




bookRouter.get("/:id",async(req,res)=>{
   let num = req.params.id;
   try{
       let x = await BookModel.findOne({_id:num});
       res.send(x)
   } catch(err){
       res.send(err.message)
   }
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
// http://localhost:8000/users?title= xyx&&title2=abc

//let query= req.body.query;
//update
bookRouter.patch("/update/:id",async(req,res)=>{
   let bookId= req.params.id;
try{
   await BookModel.findByIdAndUpdate({_id:bookId},req.body);
   res.send("Updated")
   
}
catch(err){
   res.send({"Msg":"Error in Edit"})
}
})


//delete

bookRouter.delete("/delete/:id",async(req,res)=>{
   let bookId= req.params.id;
   try{
         await BookModel.findByIdAndDelete({_id:bookId})
         res.send("Deleted ")
   }
   catch(err){
      res.send({"Msg":"Error in Delete"})
   }
})

module.exports={
   bookRouter
}