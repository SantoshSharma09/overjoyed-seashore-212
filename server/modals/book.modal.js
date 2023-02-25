const mongoose=require("mongoose");


const bookSchema= mongoose.Schema({
   
        id:Number,
        image:String,
        title:String,
        ratings:Number,
        price:Number,
        author:String,
        description:String,
        category:String
    

},{
    versionKey:false
})

const BookModel= mongoose.model("book",bookSchema);

module.exports={BookModel};


