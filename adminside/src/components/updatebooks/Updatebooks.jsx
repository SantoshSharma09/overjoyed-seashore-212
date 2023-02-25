import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import {useNavigate, useParams} from "react-router-dom"
import axios from "axios"

const Updatebooks=()=>{
   const navigate=useNavigate()
    const {id}= useParams()
    const [books,setbooks]=useState({
          title:"",
           price:"",
           ratings:"",
           author:"",
           category:"",
           description:"",
           image:""
    })
    const {title,price,ratings,author,category,description,image}=books

    const oninputchange=(e)=>{
        setbooks({...books,[e.target.name]:e.target.value})
    }
    const updateboks =() => {
        console.log(`http://localhost:8000/books/update/${id}`)
        console.log(books)
       
        axios.put(`http://localhost:8000/books/update/${id}`, books)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    //    navigate("/stocks")

    // fetch(`http://localhost:8000/books/update/${id}`,{
    //         method:"PATCH",
    //         body:JSON.stringify(books),
    //         headers:{
    //             "Content-type":"application/json"
    //         }
    //     }).then(res=>res.json())
    //     .then(res=>
    //         {
    //             console.log(res.data)
    //             setbooks(res.data)
    //             alert(res.msg)
    //             // navigate("/stocks")
    //         })
    //     .catch(err=>console.log(err))
      };

    const loadUser =  () => {
        fetch(`http://localhost:8000/books/${id}`,{
                method: "GET",
                headers:{
                "Authorization":localStorage.getItem("token")
                }
            })
            .then(res=>res.json())
            .then(res=>
                {
                    console.log(res)
                    setbooks({
                        id: id,
                        update: true,
                        title:res.title,
                        price:res.price,
                        ratings:res.ratings,
                        author:res.author,
                        category:res.category,
                        description:res.description,
                        image:res.image
      });
                })
              .catch(err=>console.log(err))
            
      
    };
    useEffect(() => {
        loadUser();
      }, []);
     
    return(
        <>
        <Navbar/>
        <h1 className="allusers_admin_dashboard_page">Update Stocks</h1>
       <div className="addstocks_dashboard_admin_side">
       <input type="text" placeholder="Enter Title" name="title" 
              value={title}
              onChange={oninputchange}
              /><br />
       <input type="number" placeholder="Enter Price" name="price"
              value={price}
              onChange={oninputchange} /><br />
       <input type="number" placeholder="Enter Rating" name="ratings"
        value={ratings}
       onChange={oninputchange}/><br />
       <input type="text" placeholder="Enter Category" 
       name="category"
       value={category}
       onChange={oninputchange}  /><br />
       <input type="text" placeholder="Enter Author" 
       name="author"
       value={author}
       onChange={oninputchange}  
        /><br />
       <input type="text" placeholder="Enter Description" 
       name="description"
       value={description}
       onChange={oninputchange}  /><br />
       <input type="url" placeholder="Enter Image Url"
       name="image"
       value={image}
       onChange={oninputchange} /><br />
       <button className="addstocks_button_admin_dashboard" onClick={updateboks} >Update</button>
       </div>
        </>
    )
}

export default Updatebooks