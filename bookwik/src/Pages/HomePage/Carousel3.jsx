import React, { useState } from "react";
import {
  Box,
  IconButton,
  
  useBreakpointValue,
  Heading,
  
  Image,
  Text,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
// import ProductCard from "./ProductCard";
// import { Link } from "react-router-dom";

// Settings for the slider
const settings = {
  dots: false,
  arrows: false,

  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplaySpeed: Math.floor(Math.random() * (10000 - 5000) + 10000),
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1008,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 430,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Carousel3({  data,title }) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "50%", md: "50%" });
  const side = useBreakpointValue({ base: "10px", md: "10px" });

  

  return (
    <>
      <Box
        position={"relative"}
        width={"85%"}
        m="auto"
        mt="5%"
        overflow={"hidden"}
        textAlign={"center"}
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <Heading style={{textAlign:"left",fontStyle:"italic",fontWeight:"620",fontSize:"28px"}} fontWeight={200}>{title}</Heading>
        <IconButton
          aria-label="left-arrow"
          colorScheme="none"
          borderRadius="full"
          position="absolute"
          left={side}
          top={top}
          _hover={{ bg: "none" }}
          bg={"transparent"}
          transform={"translate(0%,10%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <IoIosArrowBack
            color="#111"
            fontSize={"3rem"}
            onClick={() => slider?.slickPrev()}
          />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          colorScheme="none"
          borderRadius="full"
          position="absolute"
          right={side}
          top={top}
          _hover={{ bg: "none" }}
          bg={"transparent"}
          transform={"translate(0%, 10%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <IoIosArrowForward color="#111" fontSize={"3rem"} />
        </IconButton>
        {/* Slider */}

        <Slider style={{width:"92%",margin:"auto"}} {...settings} ref={(slider) => setSlider(slider)}>
          

          {data && data.map((el)=>{
            return <Box style={{padding:"10px"}}  key={el.id} >
              <Image _hover={{cursor:"pointer"}} style={{transform:"scale(0.9)",}} src={el.src} alt={el.id} />
              <Text style={{textAlign:"left",paddingLeft:"10px"}} >OUR GAME OF THE MONGTH: YOU THINK YOU KNOW ME </Text>
            </Box>
          })}
        </Slider>
      </Box>
      <Box
        m="auto"
        p="2rem"
        w="20%"
        display={"flex"}
        alignItems={"center"}
        justifyContent="center"
      >
        
      </Box>
    </>
  );
}