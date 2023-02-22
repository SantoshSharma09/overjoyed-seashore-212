const mongoose=require("mongoose")
const validator=require("validator")

const userschema=mongoose.Schema({
f_name:
{
    type:String,
    // maxLength:[30,"Name cannot exceed 30 characters"],
    // minLength:[4,"Name should have more than 4 characters"]
},

l_name:
{
        type:String,
        // maxLength:[30,"Name cannot exceed 30 characters"],
        // minLength:[4,"Name should have more than 4 characters"]
 },

email:
{
        type:String,
         // unique:true,
        // validate:[validator.isEmail,"Please enter a valid Email"]
},

confirm_email:{
    type:String,
},

password:
{
        type:String,
        // minLength:[6,"password shuld be grater than 6 characters"]
},  

confirm_pass:
{
    type:String
},

security_question:
{
    type:String
},

security_answer:
{
    type:String
},

 role:
 {
    type:String,
    default:"user"
 }  

})

const usermodel=mongoose.model("users",userschema)

module.exports={
    usermodel
}