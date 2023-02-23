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
  // const [fname,setfname]=useState("")
  // const [lname,setlname]=useState("")
  // const [email,setemail]=useState("")
  // const [cemail,setcemail]=useState("")
  // const [pass,setpass]=useState("")
  // const [cpass,setcpass]=useState("")
  // const [sq,setsq]=useState("")
  // const [sa,setsa]=useState("")

  const handleClick =()=>{
    console.log(obj)
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