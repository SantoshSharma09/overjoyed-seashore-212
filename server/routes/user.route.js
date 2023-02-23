
const express=require("express")
const {usermodel}=require("../modals/user.modal")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const {user_field_validator}=require("../middleware/ufieldvalidator.middleware")

const userrouter=express.Router()



//routes for sign up
userrouter.post("/register",user_field_validator, async (req,res)=>{
const {f_name,l_name,email,confirm_email,password,confirm_pass,security_question,security_answer}=req.body
const userexist=await usermodel.findOne({email:email})
try{
    bcrypt.hash((password,confirm_pass), 5, async (err, hash)=>{
      if(err)
      {
        res.send({"msg":"something went wrong","error":err.message})
      }  
    else{
      if(userexist)
      {
        res.send({"msg":"user already exist with this email"})
      }
      else{
      if(password==confirm_pass && email==confirm_email)
      {
        const user=new usermodel({f_name,l_name,email,confirm_email,password:hash,confirm_pass:hash,security_question,security_answer})
        await user.save()
        res.send({"msg":"user registered"})
      }
      else{
        res.send({"msg":"password and confirm password and email and confirmed email are not matched"})
      }
    }   
    }
});
}
catch(err)
{
    res.send({"msg":"something went wrong","error":err.message})
}
})




//routes for login
userrouter.post("/login",async(req,res)=>{
  const {email,password}=req.body
 try{
      const user=await usermodel.find({email})
      if(user.length>0){
          // console.log(user)
          bcrypt.compare(password, user[0].password, (err, result)=>{
             if(result)
             {
             let token=jwt.sign({project:"practise"}, 'neha', { expiresIn: '1h' });
             res.send({"msg":"login success","token":token})
             }
             else{
              res.send({"msg":"wrong credentials"})
             }
          });
     
      }
      else{
          res.send({"msg":"wrong credentials"})
      }
  }
 catch(err){
  res.send({"msg":"something went wrong","error":err.message})
 }
})





module.exports={
  userrouter
}






