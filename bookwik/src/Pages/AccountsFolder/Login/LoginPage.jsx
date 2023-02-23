import { Box, Button, Heading, SimpleGrid } from '@chakra-ui/react'
import React, { useState } from 'react'
import './LoginPage.css'
const LoginPage = () => {
  const initialState ={
      email:"",
     pass:""}
  const [obj,setObj] = useState(initialState);
  const handleChange=(e)=>{
    setObj({...obj,[e.target.name]:e.target.value})
  }
  const {email,pass} = obj

  const handleClick =()=>{
    console.log(obj)
    fetch("http://localhost:8000/users/login",{
      method:"POST",
      body:JSON.stringify(obj),
      headers:{
          "Content-type":"application/json"
      },
     
  }).then(res=>res.json()).then((res)=>{
    console.log(res.msg)
    alert(res.msg)
    
  })
    
  }
  return (
    <Box id='LoginPage'  >
       <Heading style={{padding:"20px 0px"}} >Create an Account</Heading>
       <Box  >
       
       <SimpleGrid columns={{ base: 1, sm: 2, md: 1, lg: 1 }}  spacing={3}>
       <input value={email}  onChange={handleChange} name="email" type="email" placeholder='Enter Email' style={{border:"2px solid gray",padding:"07px"}} />

<input type="password" placeholder='Enter Password'  value={pass} onChange={handleChange} name='pass' style={{border:"2px solid gray",padding:"07px"}} /> 
       </SimpleGrid>
       
       </Box> <br/>
       <Button onClick={handleClick} style={{backgroundColor:"#006400",color:"white",borderRadius:"0px",padding:"0px 25px"}}>Log in</Button>
      
    </Box>
  )
}

export default LoginPage