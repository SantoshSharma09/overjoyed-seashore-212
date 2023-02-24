const express=require("express")
const { BookModel } = require("../modals/book.modal")
const bookRouter=express.Router()



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

bookRouter.get("/",async(req,res)=>{
   try{
      let query= req.query;
      if(query.category== 'non-fiction'){
      //console.log(query)
         let ans= await BookModel.find(query)
         
         res.send(ans)
      }
      else if(query.category== 'fiction')
      {
         let ans= await BookModel.find(query)
         
         res.send(ans)
      }
      else if(query.category== 'kids'){
         let ans= await BookModel.find(query)
         
         res.send(ans)
      }
      else if(query.price== 'asc'){
         let ans= await BookModel.find().sort({price:1})
         
         res.send(ans)
      }
      else if(query.price== 'dsc'){
         let ans= await BookModel.find().sort({price:-1})
         
         res.send(ans)
      }
      else if(query.ratings== 'asc'){
         let ans= await BookModel.find().sort({ratings:1})
         
         res.send(ans)
      }
      else if(query.ratings== 'dsc'){
         let ans= await BookModel.find().sort({ratings:-1})
         
         res.send(ans)
      }
      else {
         let ans= await BookModel.find()
         
         res.send(ans)
      }
   }
   catch(err){
      res.send({"Msg":"Error in query"})
   }
})


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