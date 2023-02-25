import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Stocks.css"
import {RxUpdate} from "react-icons/rx"
import {RiDeleteBin5Line} from "react-icons/ri"

const Stocks=()=>{
    const navigate=useNavigate()
    const [books,setbooks]=useState([])

    //get all books
const getbook=()=>{
    fetch("http://localhost:8000/books/",{
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
               setbooks(res)
               localStorage.setItem("allproducts",res.length)
             }
             })
     .catch(err=>console.log(err))
}
 useEffect(()=>{
       getbook()
    }, [])

     //delete books
     const deletebook=(bookID)=>{
        console.log(bookID);
        fetch(`http://localhost:8000/books/delete/${bookID}`,{
            method:"DELETE",
           headers:{
            "Authorization":localStorage.getItem("token")
            }
        }).then(res=>res.json())
        .then(res=>
          {
            console.log(res)
            alert(res.msg)
            getbook()
          })
        .catch(err=>console.log(err))
    }
   
// const updatebook=()=>{
//   navigate("/updatebooks")
// }

    return(
        <>
         <Navbar/>
        <h1 className="allusers_admin_dashboard_page">All Books</h1>
        <input type="text" placeholder="Search Here" />
        <div className="admin_allusers_table_side">
        <table width="100%">
        <thead>
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>Rating</th>
          <th>Author</th>
          <th>Category</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {books ? books.map((el) => (
          <tr key={el._id}>
            <td>{el._id}</td>
            <td><img src={el.image} alt="" style={{width:"30%"}} /></td>
            <td>{el.title}</td>
            <td>{el.price}</td>
            <td>{el.ratings}</td>
            <td>{el.author}</td>
            <td>{el.category}</td>
            <td>
              <Link to={`/updatebooks/${el._id}`}>
              <RxUpdate style={{cursor:"pointer"}}  />
              </Link>
              </td>
            <td onClick={()=>deletebook(el._id)}><RiDeleteBin5Line style={{cursor:"pointer"}} /></td>
          </tr>
       
        
        )) :<h1>Can't see users data because you are not admin</h1>
    }
 </tbody>
    </table>
    </div>
        </>
    )
}

export default Stocks