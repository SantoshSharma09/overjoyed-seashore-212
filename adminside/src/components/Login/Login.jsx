import React, { useState } from "react";
import "./Login.css"
import admin_img from "../resources/admin_image.jpg"
import images_logo_admin from "../resources/logo_nem.jpg"
import { useNavigate } from "react-router-dom";


const Login=()=>{

    const navigate=useNavigate();

    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")

    const handlesubmit=()=>{
        const reg={
            email,
            pass:password
        }
        // console.log(reg);

        fetch("https://real-blue-cormorant-cap.cyclic.app/users/login",{
            method:"POST",
            body:JSON.stringify(reg),
            headers:{
                "Content-type":"application/json"
            },
           
        }).then(res=>res.json())
        .then(res=>
            {
                console.log(res)
                console.log(email)
                if(res.msg==="login success")
                {
                 alert(res.msg)
                localStorage.setItem("token",res.token)
                localStorage.setItem("admin_email",email)
                setemail("")
                setpassword("")
                navigate("/dashboard")
                }
               else{
                alert(res.msg)
                setemail("")
                setpassword("")
                navigate("/")
               }
                
})
        .catch(err=>console.log(err))
    }


    
    return(
        <>
{/* navbar */}
<div className="admin_navabr_start">
     <img src={images_logo_admin} alt="nav_logo_admin" className="nav_admin_logo_img" />
    
        </div>

<div className="login_admin_side_start">

   <div className="login_admin_image_page">
    <img src={admin_img} alt="admin_img" />
    </div> 

   <div className="login_page_input_admin_side">
    <h1>SIGN IN</h1>
       <input type="text" placeholder="Enter Email" value={email} onChange={(e)=>setemail(e.target.value)}  />
        <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setpassword(e.target.value)}   />
        <button onClick={handlesubmit}>Submit</button>
   </div>

</div>
        </>
    )
}

export default Login