import React from "react";
import { Route, Routes } from "react-router-dom";
import Addstocks from "../addstocks/Addstocks";
import Stocks from "../allstocks/Stocks";
import Allusers from "../allUsers/Allusers";
import Dashboard from "../dashboard/Dashboard";
import Login from "../Login/Login";
import Updatebooks from "../updatebooks/Updatebooks";
import Updateusers from "../updateusers/Updateusers";


const Allrouter=()=>{
    return(
        <>
        <Routes>
        <Route path="/" element={<Login/>} />  
         <Route path="/dashboard" element={<Dashboard/>} />
         <Route path="/users" element={<Allusers/>} />
         <Route path="/stocks" element={<Stocks/>} />  
         <Route path="/addstocks" element={<Addstocks/>} />
         <Route path="/updatebooks/:id" element={<Updatebooks/>} />   
         <Route path="/updateusers/:id" element={<Updateusers/>} /> 
        </Routes>
        </>
    )
}

export default Allrouter