const mongoose=require("mongoose")
//const validator=require("validator")

const userschema=mongoose.Schema({
f_name:String,
l_name:String,
email:String,
confirm_email:String,
pass:String,
confirm_pass:String,
security_question:String,
security_answer:String,
role:
 {
    type:String,
    default:"user"
 }  

})





const Usermodel=mongoose.model("user",userschema)

module.exports={
    Usermodel
}