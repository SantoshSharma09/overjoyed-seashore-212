import { Box, Hide, Image, Show } from '@chakra-ui/react';
import {Link} from "react-router-dom"
import React from 'react'
import "./Navbar.css"
import DrawerExample from './Drawer';
import DrawerExample2 from './Drawer2';
import Menu1 from './Menu1';
const Navbar = () => {
  return (
    <>
    <Box id='Navbar' >
  
      <Box id='Navbar-Top'  >
    <Box id='Navbar-TopLeft'   >
        <Show breakpoint='(max-width: 770px)'>
          <DrawerExample/>
           
        </Show>
     <Link>  <span style={{display:"flex",gap:"5px"}} > <img className='location-icon' src="https://user-images.githubusercontent.com/107903370/220405588-919d8ce9-a146-4355-9818-8f137288ca45.png" alt="location-icon" /> <Hide breakpoint='(max-width: 770px)' > STORES & EVENTS </Hide></span> </Link> 
     <Hide below="md"> <span>BLOG & PODCAST </span>
        <span>MEMBERSHIP </span>
        <span>COUPONS & DEALS</span>
        <span>BESTSELLERS </span>
        <span> GIFT CARDS</span> </Hide>
       
    </Box>
    <Show breakpoint='(max-width: 770px)' > 
        
        <img  className='logo'  src="https://user-images.githubusercontent.com/107903370/220422422-7ee82cb2-7889-4ace-96aa-f5df0be687fd.jpeg" alt="logo" />
         </Show>
    <Box id='Navbar-TopRight' >
    <Hide below="md">  <span style={{display:"flex",gap:"5px"}} > <Image src="https://user-images.githubusercontent.com/107903370/220407239-b9fdd3f7-4a4e-4443-9a90-f140ca9dc53b.png" w="4" h="4" /> MY ACCOUNT</span> </Hide>
       <span style={{display:"flex",gap:"5px"}}> <img className='wishlist-icon' src="https://user-images.githubusercontent.com/107903370/220409397-c7ac7310-071b-4408-98eb-540a616298a5.png" alt="wishlist-icon-logo" /> <Hide breakpoint='(max-width: 770px)' >  WISHLIST</Hide></span>
       <Show breakpoint='(max-width: 770px)'>
       
        <DrawerExample2/>
       </Show>
    </Box>
    </Box>
    {/* Nav-Top ends here */}


    {/* Nav-mid Starts here */}
    <Box id='Nav-mid'>
    <Hide breakpoint='(max-width: 770px)' >  <img  id="logo2" alt="Nav-mid-logo" src="https://user-images.githubusercontent.com/107903370/220422422-7ee82cb2-7889-4ace-96aa-f5df0be687fd.jpeg"  /> </Hide>
    <Box  id="inputBox" style={{border:"2px solid black",display:"flex"}} >
      <Menu1/>
    <input   id="SearchInputBox" type="text" placeholder='input bar' style={{border:"1px solid black"}} />
    <button>
    <img src="https://user-images.githubusercontent.com/107903370/220546869-01f44250-323f-4c63-982f-d30a9406ae9a.png" alt="search-icon" style={{width:"37px" ,padding:"0 6px"}} />
    </button>
    </Box>
      
    <Hide breakpoint='(max-width: 770px)' >   <DrawerExample2/> </Hide>
    </Box>
    {/* Nav-mid ens Here */}
    {/* Nav-bottom starts here */}
    <Box id='Nav-bottom' >
       <Link> <span>Books</span> </Link> 
         <span>Fiction</span>
         <span>Nonfiction</span>
         <span>eBooks</span>
         <span>Audiobooks</span>
         <span>Teens & YA</span>
         <span>Kids</span>
         <span>Toys & Games</span>
         <span>Stationery & Gifts</span>
         <span>Music & Movies</span>
    </Box>
    
    </Box>
    </>
  )
}

export default Navbar