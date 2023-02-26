import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import {useNavigate, useParams} from "react-router-dom"
import axios from "axios"

const Updateusers=()=>{
   const navigate=useNavigate()
    const {id}= useParams()
    const [users,setusers]=useState({
        f_name:"",
         email:"",
        role:""
          
    })
    const {f_name,email,role}=users

    const oninputchange=(e)=>{
        setusers({...users,[e.target.name]:e.target.value})
    }

    //updated
    const updateusers =() => {
    //    axios.patch(`https://real-blue-cormorant-cap.cyclic.app/users/update/${id}`, users);
    //     alert("Role Updated")
    //       console.log(users)
    //        navigate("/users")

    fetch(`https://real-blue-cormorant-cap.cyclic.app/users/update/${id}`,{
        method:"PATCH",
        body:JSON.stringify(users),
        headers:{
            "Content-type":"application/json",
            "Authorization":localStorage.getItem("token")
        }
    }).then(res=>res.json())
    .then(res=>
        {
            if(res.msg==="You are not admin")
            {
                alert(res.msg)
                navigate("/")
            }
            else{
                console.log(res)
                setusers(res)
                alert(res.msg)
                navigate("/users")
            }
            
        })
    .catch(err=>console.log(err))

    }
      
       
       


      
   //get data for updation
    const loadUser =  () => {
        fetch(`https://real-blue-cormorant-cap.cyclic.app/users/${id}`,{
                method: "GET",
                headers:{
                "Authorization":localStorage.getItem("token")
                }
            })
            .then(res=>res.json())
            .then(res=>
                {
                    if(res.msg==="You are not admin")
                    {
                        alert(res.msg)
                        navigate("/")
                    }
                    else{
                        console.log(res)
                        setusers({
                            id: id,
                            update: true,
                            f_name:res.f_name,
                         email:res.email,
                           role:res.role
                           
          });
                    }
                   
     })
     .catch(err=>console.log(err))
      };

    useEffect(() => {
        loadUser();
      }, []);

     
    return(
        <>
        <Navbar/>
        <h1 className="allusers_admin_dashboard_page">Update Users</h1>
        <h2 className="allusers_admin_dashboard_page">User Id: {users.id}</h2>
       <div className="addstocks_dashboard_admin_side">
       <input type="text" placeholder="Enter Name" name="name" value={f_name} onChange={e=>oninputchange(e)}/><br />
       <input type="text" placeholder="Enter Email" name="email" value={email} onChange={e=>oninputchange(e)} /><br />
       <input type="text" placeholder="Enter Role" name="role" value={role} onChange={e=>oninputchange(e)}/><br />
       <button className="addstocks_button_admin_dashboard" onClick={updateusers} >Update</button>
       </div>
        </>
    )
}

export default Updateusers