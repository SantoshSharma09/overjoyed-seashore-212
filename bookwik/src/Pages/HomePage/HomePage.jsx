import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Box, Image, Text } from '@chakra-ui/react';

import BookData1 from "./BookData/BookData1.json";
import BookData2 from "./BookData/BookData2.json";

import BookData3 from "./BookData/BookData3.json";
import BookData4 from "./BookData/BookData4.json";
import BookData5 from "./BookData/BookData5.json";
import BookData6 from "./BookData/BookData6.json"
import Carousel2 from './SliderAlt';
import Carousel3 from './Carousel3';

const HomePage = () => {
  return (
    <Box>
        <Box style={{backgroundColor:"#6c757d",marginTop:"5px"}} >
            <Text style={{fontWeight:"bold",color:"white",padding:"3px 0px"}} >Free Shipping on Orders of $40 or More</Text>
        </Box>
  <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay  style={{display:"flex",justifyContent:"center"}} >
          <Box className='carouselImage' >
            <img src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/02/14/25817_Quote_A1_Questions_02-14.jpg" alt="first" />
          </Box>
          <Box className='carouselImage' >
            <img src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/02/14/25817_Quote_A3_MurderYourEmployer_02-14.jpg" alt="first" />
          </Box>
          <Box className='carouselImage' >
            <img src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/01/24/25647_Quote_A4_Scorched_Grace_01-24.jpg" alt="first" />
          </Box>
          <Box className='carouselImage' >
            <img _hover={{cursor:"pointer"}} src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/02/21/25819_Quote_A4_Shadow_of_Perseus_02-21.jpg" alt="first" />
          </Box>
         
          
      </Carousel>
      <Carousel2  data={BookData2} title={"B&N Top 100 Books"} />
<Image _hover={{cursor:"pointer"}} style={{width:"90%",margin:"auto"}} src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/02/21/25819_BB_B_30Off-Pre-Orders_02-21.jpg" />

<Carousel2  data={BookData1} title={"Buy One, Get One 50% Off Thousands of Books"} />
<Carousel2  data={BookData3} title={"Believe in a Thing Called Love"} />


<Carousel2  data={BookData4} title={"Out of This World Sci-Fi and Fantasy"} />
<Carousel2 data={BookData5} title={"Our Favorite Reads Now in Paperback"} />
<Carousel3  data={BookData6} title={"Games that are in Trending"} />


 
      
    </Box>
  )
}

export default HomePage