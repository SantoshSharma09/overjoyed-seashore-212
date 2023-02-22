import { Box,        SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import "./Footer.css"
const Footer = () => {

  return (
   <Box backgroundColor="" color="#6c757d"fontSize="15px" className="CompleteFooter" >
    
    <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 4 }}  spacing={8}>
        <VStack>
            <ul>
                <li className='headElememt' >B&N SERVICES</li>
                <li>Affliate Program</li>
                <li>Publisher & Author<br/>Guidilines</li>
                <li>Bulk Order Discounts</li>
                <li>B&N Mobile Apps</li>
                <li>B&N Membership</li>
                <li>B&N Mastercard</li>
                <li>B&N Kids' Club</li>
                <li>B&N Educators</li>
                <li>B&N Bookfairs</li>
            </ul>
        </VStack>
        <VStack>
            <ul>
                <li className='headElememt' >ABOUT US</li>
                <li>About B&N</li>
                <li>Careers at B&N</li>
                <li>Barnes & Noble, Inc.</li>
                <li>B&N Kitchen</li>
                
            </ul>
        </VStack>
        <VStack>
            <ul>
                <li className='headElememt' >QUICK HELP</li>
                <li>Help Center</li>
                <li>Covid Safety</li>
                <li>Shippin & Returns</li>
                <li>Store Pickup</li>
                <li>Order Status</li>
                <li>Product Recalls</li>
                <li>Brand Directory</li>
                <li>Corrections & Updates</li>
                <li>Gift Cards</li>
                
            </ul>
        </VStack>
        <VStack>
            <ul>
                <li className='headElememt' >SHOP BY CATEGORY</li>
                <li>Books</li>
                <li>Fiction</li>
                <li>Nonfiction</li>
                <li>Kids</li>
                <li>Teens & YA</li>
                <li>eBooks</li>
                <li>Audiobooks</li>
                <li>NOOK Tablets & eReaders</li>
                <li>Holiday Gift Guide</li>
            </ul>
        </VStack>
        </SimpleGrid>
        <hr style={{width:"85%",margin:"auto"}} />
        
        <SimpleGrid gap={100} columns={{ base: 1, sm: 1, md: 2, lg: 2 }} id='Footer-bottom' >

            <VStack style={{alignItems:"flex-start"}} >
            <Text size='md' style={{color:"black",marginTop:"30px"}} colorScheme='black'>FIND A STORE</Text>
               <input type="text" id='storeInput' placeholder='Store name, location, or ZIP code' style={{fontSize:"16px", padding:"10px",border:"2px solid black" }} />
               <img src="https://user-images.githubusercontent.com/107903370/220611200-7c4d128e-cc8b-4a06-8423-1d6027a2b386.png" alt="connect-withus" />
                
            </VStack>
            <VStack style={{alignItems:"flex-start"}}>
            <Text size='sm' style={{color:"black",marginTop:"30px"}} colorScheme='black'>SIGN UP FOR SAVINGS,NEWS AND UPDATES</Text>
               <input id="emailInput" type="text" placeholder='Email Address' style={{fontSize:"16px", padding:"10px",border:"2px solid black"}} />
               <Text style={{fontSize:"12px",textAlign:"left"}} >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Nihil distinctio assumenda nesciunt, eveniet vel totam <br/> aut, a perferendis sint mollitia. 
               </Text>

            </VStack>
        </SimpleGrid>
   </Box>
  )
}

export default Footer