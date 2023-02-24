import React from "react";
import { Route, Routes } from "react-router-dom";
import Allusers from "../allUsers/Allusers";
import Dashboard from "../dashboard/Dashboard";
import Login from "../Login/Login";


const Allrouter=()=>{
    return(
        <>
        <Routes>
        <Route path="/" element={<Login/>} />  
         <Route path="/dashboard" element={<Dashboard/>} />
         <Route path="/users" element={<Allusers/>} />   
        </Routes>
        </>
    )
}

export default Allrouter