const express=require("express")
const { BookModel } = require("../modals/book.modal")



const bookRouter=express.Router()



//get all products
bookRouter.get("/", async(req,res)=>{
   try{
      const bookdata= await BookModel.find();
      res.send(bookdata)
   }
   catch(err)
   {
      res.send({"msg":"Data is not present", "error":err.message})
   }
  
})

//get single products 



bookRouter.get("/:id",async(req,res)=>{
   let num = req.params.id;
   try{
       let x = await BookModel.findOne({_id:num});
       res.send(x)
   }
    catch(err)
    {
       res.send({"msg":"Data is not present with this id", "error":err.message})
   }
})


//add book data
bookRouter.post("/post",async(req,res)=>{
try{
   let book= new BookModel(req.body);
   console.log(book)
   await book.save();
 res.send({"mag":"data added"})

bookRouter.post("/post",async(req,res)=>{
try{

    let users= new BookModel(req.body);
   console.log(users)
   await users.save();
   res.send("Data posted of books")


}
catch(err){
   res.send({"msg":"Cannot added Data", "error":err.message})
}

})


//update book data
bookRouter.patch("/update/:id",async (req,res)=>{
   const ID=req.params.id
   // res.send(ID)
   const updateddata=req.body
   try
   {
      await BookModel.findByIdAndUpdate({_id:ID},updateddata)
    res.send({"msg":"Data Updated"})
     

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
   catch(err)
   {
       res.send({"msg":"Cannot Modify", "error":err.message})

   }
})

//delete book data
bookRouter.delete("/delete/:id",async (req,res)=>{
   const ID=req.params.id
   // res.send(ID)
  try
   {
      await BookModel.findByIdAndDelete({_id:ID})
      res.send({"msg":"Data Deleted"})
     }
   catch(err)
   {
       res.send({"msg":"Cannot Deleted", "error":err.message})

   }
})






module.exports={
   bookRouter
}