import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css"

import Navbar from "../Navbar/Navbar";
// import {Doughnut, Line} from "react-chartjs-2"

const Dashboard=()=>{

  const users=localStorage.getItem("allusers")  
    return(
<>
<Navbar/>

<div className="admin_dashboard_side_start">

<div className="admin_dashboard_sidebar_section">
<Sidebar/>
</div>



<div className="doughnat_chart_admin_dashboard">
<h1>All Users:- <span>{users}</span></h1>
<h1>All Stocks:- </h1>
</div>


</div>

</>
    )
}

export default Dashboard