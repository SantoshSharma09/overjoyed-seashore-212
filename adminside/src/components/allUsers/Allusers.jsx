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
        <div className="admin_allusers_table_side">
       <table border="1" width="100%">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {users ? users.map((el) => (
          <tr key={el._id}>
            <td>{el._id}</td>
            <td>{el.f_name}</td>
            <td>{el.email}</td>
            <td>{el.role}</td>
            <td><button>Delete</button></td>
          </tr>
        )) :<h1>Can't see users data because you are not admin</h1>
    }
 </tbody>
    </table>
    </div>
        </>
    )
}

export default Allusers