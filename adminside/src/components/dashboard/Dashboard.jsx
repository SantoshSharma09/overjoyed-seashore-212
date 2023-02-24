import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css"

import Navbar from "../Navbar/Navbar";
// import {Doughnut, Line} from "react-chartjs-2"

const Dashboard=()=>{
    return(
<>
<Navbar/>

<div className="admin_dashboard_side_start">

<div className="admin_dashboard_sidebar_section">
<Sidebar/>
</div>



<div className="doughnat_chart_admin_dashboard">

</div>


</div>

</>
    )
}

export default Dashboard