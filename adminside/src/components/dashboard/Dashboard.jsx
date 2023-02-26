import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css"

import Navbar from "../Navbar/Navbar";
// import {Doughnut, Line} from "react-chartjs-2"

const Dashboard=()=>{

  // const users=localStorage.getItem("allusers") 
  // const products=localStorage.getItem("allproducts") 
    return(
<>
<Navbar/>

<div className="admin_dashboard_side_start">

<div className="admin_dashboard_sidebar_section">
<Sidebar/>
</div>

<div className="admin_dashboard_chart_section">
  <img src="https://www.microsoft.com/en-us/microsoft-365/blog/wp-content/uploads/sites/2/2012/06/Excel-charts-11.png" alt="" />
</div>

{/* <div className="doughnat_chart_admin_dashboard">
<h1>All Users:- {users}</h1>
<h1>All Stocks:- {products}</h1>
</div> */}



</div>

</>
    )
}

export default Dashboard