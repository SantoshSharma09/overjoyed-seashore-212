import { Box, Button, Heading, SimpleGrid } from '@chakra-ui/react'
import React, { useState } from 'react'
import './SignUpPage.css'
const SignUpPage = () => {
  /*const initialState ={
    fname:"",
    lname:"",
    email:"",
     cemail:"",
    pass:"",
     cpass:"",
    sq:"",
    sa:""

  }*/
  // const [obj,setObj] = useState(initialState);
  // const handleChange=(e)=>{
  //   setObj({...obj,[e.target.name]:e.target.value})
  // }
  // const {fname,lname,email,cemail,cpass,pass,sq,sa} = obj
  const [fname,setfname]=useState("")
  const [lname,setlname]=useState("")
  const [email,setemail]=useState("")
  const [cemail,setcemail]=useState("")
  const [pass,setpass]=useState("")
  const [cpass,setcpass]=useState("")
  const [sq,setsq]=useState("")
  const [sa,setsa]=useState("")

  const handleClick =()=>{
    const reg={
      f_name:fname,
      l_name:lname,
      email:email,
      confirm_email:cemail,
      pass:pass,
      confirm_pass:cpass,
      security_question:sq,
      security_answer:sa
  }
    console.log(reg)
    fetch("https://real-blue-cormorant-cap.cyclic.app/users/register",{
            method:"POST",
            body:JSON.stringify(reg),
            headers:{
                "Content-type":"application/json"
            }
        }).then(res=>res.json())
        .then(res=>{
          console.log(res)
          alert(res.msg)
        }
        )
        .catch(err=>console.log(err))
        
  }
  return (
    <Box id='SignUpPage'  >
       <Heading style={{padding:"20px 0px"}} >Create an Account</Heading>
       <Box  >
       <SimpleGrid style={{marginBottom:"10px"}} columns={{ base: 1, sm: 1, md: 2, lg: 2 }}  spacing={8}>

       <input value={fname}  onChange={(e)=>setfname(e.target.value)} type="text" placeholder='First Name' style={{border:"2px solid gray",padding:"07px"}} />

       <input type="text" value={lname} onChange={(e)=>setlname(e.target.value)} placeholder='Last Name' style={{border:"2px solid gray",padding:"07px"}} /> 
       </SimpleGrid> 


       <SimpleGrid style={{marginBottom:"10px"}} columns={{ base: 1, sm: 1, md: 1, lg: 1 }}  spacing={3}>

       <input value={email} onChange={(e)=>setemail(e.target.value)} type="email" placeholder='Enter Email' style={{border:"2px solid gray",padding:"07px"}} />

       <input type="email" value={cemail}  onChange={(e)=>setcemail(e.target.value)} placeholder='Confirm Email' style={{border:"2px solid gray",padding:"07px"}} /> 
       </SimpleGrid>


       <SimpleGrid style={{marginBottom:"10px"}} columns={{ base: 1, sm: 2, md: 2, lg: 2 }}  spacing={3}>
       <input type="password" value={pass} onChange={(e)=>setpass(e.target.value)} placeholder='Enter Password' style={{border:"2px solid gray",padding:"07px"}} />
       <input type="password" value={cpass} onChange={(e)=>setcpass(e.target.value)} placeholder='Confirm Password' style={{border:"2px solid gray",padding:"07px"}} />

       </SimpleGrid>
       <SimpleGrid columns={{ base: 1, sm: 2, md: 1, lg: 1 }}  spacing={3}>
       <input value={sq} onChange={(e)=>setsq(e.target.value)} type="text" placeholder='Question' style={{border:"2px solid gray",padding:"07px"}} />

<input type="text" placeholder='Answer'  value={sa} onChange={(e)=>setsa(e.target.value)} style={{border:"2px solid gray",padding:"07px"}} /> 
       </SimpleGrid>
       
       </Box> <br/>
       <Button onClick={handleClick} style={{backgroundColor:"#006400",color:"white",borderRadius:"0px",padding:"0px 25px"}}>Sign Up</Button>
      
    </Box>
  )
}

export default SignUpPage