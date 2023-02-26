import React from "react";
import "./Navbar.css"
import {NavDropdown, Nav,  DropdownButton, Dropdown} from "react-bootstrap"
import images_logo_admin from "../resources/logo_nem.jpg"
import { useNavigate } from "react-router-dom";


const Navbar=()=>{
    const navigate= useNavigate();
    let adminemail = (localStorage.getItem("admin_email"));
    function logoutfun()
    {
        localStorage.clear();
        navigate("/")
    }

    const homepagehandle=()=>{
        navigate("/dashboard")
    }

    return(
        <>
   <div className="admin_navabr_start">
     <img src={images_logo_admin} alt="nav_logo_admin" className="nav_admin_logo_img" onClick={homepagehandle} />
     <DropdownButton title={adminemail} className='mainnav_dashboard_admin_email'>
                <Dropdown.Item onClick={logoutfun} style={{textDecoration:"none"}} >logout</Dropdown.Item>
                </DropdownButton>
     </div>
        </>
    )
}

export default Navbar