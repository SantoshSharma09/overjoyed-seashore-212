import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";

import "./Allusers.css"

const Allusers=()=>{
    const [users,setusers]=useState([])

    useEffect(()=>{
        fetch("http://localhost:8000/users/",{
           headers:{
            "Authorization":localStorage.getItem("token")
            }
        }).then(res=>res.json())
        .then(res=>
            {
                console.log(res)
                setusers(res)
            })
        .catch(err=>console.log(err))
    }, [])
    return(
        <>
         <Navbar/>
        <h1>All users page</h1>
        <div>
        {users ? users.map((el)=>{
        return(
            <>
          
            <h2>ID:{el._id}</h2>
            <h2>Name:{el.f_name}</h2>
            <h2>Email:{el.email}</h2>
            <h2>Role:{el.role}</h2>
            <button>Delete</button>
           
            </>
        )
        }) 
        :<h1>Can't see users data because you are not admin</h1>}
        </div>
        </>
    )
}

export default Allusers