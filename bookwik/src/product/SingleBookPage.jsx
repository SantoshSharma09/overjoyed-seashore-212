import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import "./singleBook.css";

const SingleBookPage = () => {
  const { id } = useParams();
  //   console.log(id);
  const [book, setBook] = React.useState("");

  //Getting Single book:
  const getSingleBook = () => {
    axios
      .get(`http://localhost:8000/kitab/${id}`)
      .then((res) => {
        // console.log(res);
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getSingleBook();
  }, []);

  //Adding to cart:
  const handleCart = () => {
    // console.log(book);
    axios
      .post(`http://localhost:8000/cart/addtocart`, book)
      .then((res) => {
        // console.log(res);
        alert("Added to cart");
      })
      .catch((err) => console.log(err));
  };

  //   const alert = () => {
  //     <Alert status="success">
  //       <AlertIcon />
  //       Added to Cart!
  //     </Alert>;
  //   };

  return (
    <Box id="single_book_page">
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 2 }} spacing={2}>
        <Box>
          <Image src={book.image} alt={book.title} />
          <br />
          <Flex style={{ alignItems: "center" }}>
            <TiTick />
            <Text style={{ textAlign: "left", fontSize: "17px" }}>
              Barnes & Noble Exclusives
            </Text>
          </Flex>
          <Flex style={{ alignItems: "center" }}>
            <TiTick />
            <Text style={{ textAlign: "left", fontSize: "17px" }}>
              Bookseller Favorites
            </Text>
          </Flex>
          <Flex style={{ alignItems: "center" }}>
            <TiTick />
            <Text style={{ textAlign: "left", fontSize: "17px" }}>
              Up to 30% Off the Biggest Books: Pre-Order Now
            </Text>
          </Flex>
        </Box>
        <Box style={{ alignItems: "center" }}>
          <Text
            id="book_title"
            style={{
              textAlign: "left",
              fontSize: "30px",
              fontFamily: "sans-serif",
              letterSpacing: "2px",
            }}
          >
            Title: {book.title}
          </Text>
          <Text
            style={{
              textAlign: "left",
              fontSize: "26px",
              fontFamily: "sans-serif",
              letterSpacing: "1.5px",
            }}
            _hover={{ cursor: "pointer", textDecoration: "underline" }}
          >
            Author: {book.author}
          </Text>
          <Text style={{ textAlign: "left", fontSize: "20px" }}>
            Rating: {book.ratings}/10
          </Text>
          <br />
          <Text
            style={{
              textAlign: "left",
              fontSize: "20px",
              letterSpacing: "1.5px",
            }}
          >
            <span style={{ fontWeight: "bold" }}>Description</span>: Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Eum, optio. Suscipit
            magnam optio illo. Qui maxime optio inventore quidem consequatur
            suscipit aliquid.
          </Text>
          <br />
          <Button
            onClick={handleCart}
            style={{
              width: "150px",
              borderRadius: "10px",
              color: "white",
              backgroundColor: "coral",
            }}
            _hover={{ transform: "scale(1.1)" }}
          >
            Add to Cart
          </Button>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default SingleBookPage;
