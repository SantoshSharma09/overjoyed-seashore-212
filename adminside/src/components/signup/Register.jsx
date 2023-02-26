const { useState } = require("react")

const Register=()=>{
    const [fname,setfname]=useState("")
    const [lname,setlname]=useState("")
    const [email,setemail]=useState("")
    const [cemail,setcemail]=useState("")
    const [pass,setpass]=useState("")
    const [cpass,setcpass]=useState("")
    const [sq,setsq]=useState("")
    const [sa,setsa]=useState("")
    
    const handlesubmit=()=>{
        const reg={
            f_name:fname,
            l_name:lname,
            email:email,
            confirm_email:cemail,
            pass:pass,
            confirm_pass:cpass,
            security_question:sq,
            security_answer:sa
        }
        console.log(reg);

        fetch("https://real-blue-cormorant-cap.cyclic.app/users/register",{
            method:"POST",
            body:JSON.stringify(reg),
            headers:{
                "Content-type":"application/json"
            }
        }).then(res=>res.json())
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
    

    return (
        <>
       <h1>Register page</h1>
        <input type="text" placeholder="enter fname" value={fname} onChange={(e)=>setfname(e.target.value)}  />
        <input type="text" placeholder="enter lname" value={lname} onChange={(e)=>setlname(e.target.value)}  />
        <input type="text" placeholder="enter email" value={email} onChange={(e)=>setemail(e.target.value)}  />
        <input type="text" placeholder="enter cemail" value={cemail} onChange={(e)=>setcemail(e.target.value)}  />
        <input type="password" placeholder="enter pass" value={pass} onChange={(e)=>setpass(e.target.value)}  />
        <input type="password" placeholder="enter cpass" value={cpass} onChange={(e)=>setcpass(e.target.value)}  />
        <input type="text" placeholder="enter sq" value={sq} onChange={(e)=>setsq(e.target.value)}  />
        <input type="text" placeholder="enter sa" value={sa} onChange={(e)=>setsa(e.target.value)}  />
        <button onClick={handlesubmit}>Submit</button>
        </>
    )
   
}

export default Register