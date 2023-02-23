
const user_field_validator=(req,res,next)=>{
    const {f_name,l_name,email,confirm_email,password,confirm_pass,security_question,security_answer}=req.body
    if(f_name && l_name && email && confirm_email && password && confirm_pass && security_question && security_answer)
    {
        next()
    }
    else{
        res.send({"err": "Few fields are missing, cannot process the requset"})
    }
}

module.exports={
    user_field_validator
}