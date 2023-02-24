import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"


const Sidebar=()=>{
    return(
<>
<div className="admin_sidebar_start_with_link">
<h1>Dashboard</h1>

    <button>
    <Link to="/stocks" style={{textDecoration:"none",color:"white"}}>Stocks</Link>
    </button><br/>

<button>
    <Link to="/addstocks" style={{textDecoration:"none",color:"white"}}>Add Stocks</Link>
    </button><br/>

    <button>
    <Link to="/users" style={{textDecoration:"none",color:"white"}}>Users</Link>
    </button><br/>

<button>
<Link to="/reviews" style={{textDecoration:"none",color:"white"}}>Reviews</Link>
</button><br/>

<button>
<Link to="/settings" style={{textDecoration:"none",color:"white"}}>Settings</Link>
</button><br/>

<button>
<Link to="/profile" style={{textDecoration:"none",color:"white"}}>Profile</Link>
</button><br/>

</div>
</>
    )
}

export default Sidebar