const jwt= require("jsonwebtoken")

const middleware= (req,res,next)=>{

    const token= req.headers.authorization;
    if(token){
        jwt.verify(token,"aarti",(err,decoded)=>{
            if(decoded){
                req.body.user=decoded.userID;
                next();
            }else{
                res.send({"Msg":"Please Login"})
            }
        })
    }else{
        res.send({"Msg":"Please Login"})
    }
}

module.exports= {middleware};