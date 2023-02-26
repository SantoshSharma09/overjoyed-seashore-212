const express=require("express")
const { BookModel } = require("../modals/book.modal")
const {adminauthenticate}=require("../middleware/adminauth.middlrware")


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
bookRouter.post("/post", adminauthenticate ,async(req,res)=>{
try{

    let users= new BookModel(req.body);
   console.log(users)
   await users.save();
   res.send({"msg":"Data Added"})


}
catch(err){
   res.send({"msg":"Cannot added Data", "error":err.message})
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
   let id= req.params.id;

   console.log("inside try",id,req.body)
   let ans = await BookModel.findByIdAndUpdate({_id:id},req.body);
   console.log("after update")
   let user=await BookModel.findOne({_id:id})
   // console.log("working",user)
   res.send({msg:"user has been updated",user})
   
}) 



//delete book data
bookRouter.delete("/delete/:id", adminauthenticate, async (req,res)=>{
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