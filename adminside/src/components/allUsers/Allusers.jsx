import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import {RiDeleteBin5Fill} from "react-icons/ri"
import {GrDocumentUpdate} from "react-icons/gr"

import "./Allusers.css"

const Allusers=()=>{
  const usersdata=localStorage.getItem("allusers") 
  const navigate=useNavigate()
    const [users,setusers]=useState([])

    //get all users
const getdata=()=>{
  fetch("https://real-blue-cormorant-cap.cyclic.app/users/",{
           headers:{
            "Authorization":localStorage.getItem("token")
            }
        }).then(res=>res.json())
        .then(res=>
            {
                console.log(res)
                if(res.msg==="You are not admin")
                {
                    alert(res.msg)
                    navigate("/")
                }
                else{
                  setusers(res)
                  localStorage.setItem("allusers",res.length)
                }
                })
        .catch(err=>console.log(err))
}

    useEffect(()=>{
      getdata()  
    }, [])

    //delete users
    const deleteuser=(userID)=>{
      console.log(userID);
      fetch(`https://real-blue-cormorant-cap.cyclic.app/users/delete/${userID}`,{
          method:"DELETE",
         headers:{
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
            alert(res.msg)
            getdata()
          }
          
        })
      .catch(err=>console.log(err))
  }


    return(
        <>
         <Navbar/>
        {/* <h1 className="allusers_admin_dashboard_page">All users page</h1> */}
        <h1 className="allusers_admin_dashboard_page">All Users:- {usersdata}</h1>
        <div className="admin_allusers_table_side">
       <table  className="table_users_admin_start">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {users ? users.map((el) => (
          <tr key={el._id}>
            <td>{el._id}</td>
            <td>{el.f_name}</td>
            <td>{el.email}</td>
            <td style={el.role==="admin" ? {color:"green" }: {color:"red"}}>{el.role}</td>
            <td>
            <Link to={`/updateusers/${el._id}`}>
              <GrDocumentUpdate style={{cursor:"pointer"}}  />
              </Link>
              </td>
            <td onClick={()=>deleteuser(el._id)}><RiDeleteBin5Fill style={{cursor:"pointer"}} /></td>
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