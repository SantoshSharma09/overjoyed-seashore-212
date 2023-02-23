import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";


const Allrouter=()=>{
    return(
        <>
        <Routes>
         <Route path="/dashboard" element={<Dashboard/>} />   
        </Routes>
        </>
    )
}

export default Allrouter