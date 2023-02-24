const jwt=require("jsonwebtoken")
const {Usermodel}=require("../modals/user.modal")



const adminauthenticate=async(req,res,next)=>{
    try{
        const token=req.headers.authorization
        const verifyuser=jwt.verify(token,"aarti")
            console.log(verifyuser)
            const user=await Usermodel.findById({_id:verifyuser.userID})
            console.log(user)
            if(user.role=="admin")
            {
                
                next()
            }
            else{
                res.send({"msg":"You are not admin"})
            }
           
    }
    catch(err)
    {
      res.send(err.message)
    }
}

module.exports={
   adminauthenticate
}
