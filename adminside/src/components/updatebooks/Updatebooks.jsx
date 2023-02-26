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

    //updated
    const updateboks =() => {
    //    axios.patch(`https://real-blue-cormorant-cap.cyclic.app/kitab/update/${id}`, books);
    //     alert("Data Updated")
    //       console.log(books)
    //        navigate("/stocks")

            fetch(`https://real-blue-cormorant-cap.cyclic.app/kitab/update/${id}`,{
            method:"PATCH",
            body:JSON.stringify(books),
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
                    setbooks(res)
                    alert(res.msg)
                    navigate("/stocks")
                }
                
            })
        .catch(err=>console.log(err))

    }
      
       
        // axios.patch(`https://real-blue-cormorant-cap.cyclic.app/kitab/update/${id}`, books)
        // .then(res=>console.log(res))
        // .catch(err=>console.log(err))
    //    navigate("/stocks")

   

      
   //get data for updation
    const loadbooks =  () => {
        fetch(`https://real-blue-cormorant-cap.cyclic.app/kitab/${id}`,{
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
                    }
                   
     })
     .catch(err=>console.log(err))
      };

    useEffect(() => {
        loadbooks();
      }, []);

     
    return(
        <>
        <Navbar/>
        <h1 className="allusers_admin_dashboard_page">Update Stocks</h1>
        <h2 className="allusers_admin_dashboard_page">Stock Id: {books.id}</h2>
       <div className="addstocks_dashboard_admin_side">
       <input type="text" placeholder="Enter Title" name="title" value={title} onChange={e=>oninputchange(e)}/><br />
       <input type="number" placeholder="Enter Price" name="price" value={price} onChange={e=>oninputchange(e)} /><br />
       <input type="number" placeholder="Enter Rating" name="ratings" value={ratings} onChange={e=>oninputchange(e)}/><br />
       <input type="text" placeholder="Enter Category" name="category" value={category} onChange={e=>oninputchange(e)} /><br />
       <input type="text" placeholder="Enter Author"  name="author" value={author} onChange={e=>oninputchange(e)} /><br />
       <input type="text" placeholder="Enter Description" name="description"  value={description} onChange={e=>oninputchange(e)} /><br />
       <input type="url" placeholder="Enter Image Url" name="image" value={image} onChange={e=>oninputchange(e)} /><br />
       <button className="addstocks_button_admin_dashboard" onClick={updateboks} >Update</button>
       </div>
        </>
    )
}

export default Updatebooks