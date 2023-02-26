import { Box, Button, Image, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';


const AccountMenu = () => {
  let usertoken= localStorage.getItem("user_token");
  let user_email = localStorage.getItem("user_email")
  return (
    <>
    <Menu style={{border:"1px solid black"}} >
  {/* <MenuButton >
    All
  </MenuButton> */}
  <Button as={MenuButton} colorScheme='#6c757d' variant='ghost'>
  <span style={{display:"flex",gap:"5px",fontSize:"13px",fontWeight:"400"}} > <Image src="https://user-images.githubusercontent.com/107903370/220407239-b9fdd3f7-4a4e-4443-9a90-f140ca9dc53b.png" w="4" h="4" />{usertoken?user_email:"My Account"}</span>
  
  </Button>

  <MenuList style={{alignContent:"center"}} >
    <Box style={{borderBottom:"1px solid black",paddingBottom:"5px"}} >
      <Link to="/login" > <Button style={{backgroundColor:"#006400",color:"white",borderRadius:"0px",padding:"0px 25px"}}  >Sign In</Button></Link> 
        <br/>
        <Link to="/signup" > <span style={{textDecoration:"underline"}} >Create An Account</span> </Link>
    </Box>
  <Link to='#'> <MenuItem _hover={{cursor:"pointer",textDecoration:"underline"}} > Manage Account</MenuItem></Link> 
  <Link to='#'> <MenuItem _hover={{cursor:"pointer",textDecoration:"underline"}} > Order Status</MenuItem></Link> 
  <Link to='#'> <MenuItem _hover={{cursor:"pointer",textDecoration:"underline"}} > My Digital Library</MenuItem></Link> 
  <Link to='#'> <MenuItem _hover={{cursor:"pointer",textDecoration:"underline"}} > Address Book</MenuItem></Link> 
  <Link to='#'> <MenuItem _hover={{cursor:"pointer",textDecoration:"underline"}} > Payement Methods</MenuItem></Link> 
  </MenuList>
</Menu>
    </>
  )
}

export default AccountMenu