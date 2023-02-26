import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  Image,
  SimpleGrid,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import "./singleBook.css";
import { Link } from "react-router-dom";

const SingleBookPage = () => {
  //Toast:
  const toast = useToast();

  //navigate:
  const navigate = useNavigate();

  const { id } = useParams();
  //   console.log(id);
  const [book, setBook] = React.useState("");
  const [click, setClick] = React.useState(false);

  //Getting Single book:
  const getSingleBook = () => {
    axios
      .get(`https://real-blue-cormorant-cap.cyclic.app/kitab/${id}`)
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
  // let token = localStorage.getItem("user_token");

  const handleCart = () => {
    fetch("https://real-blue-cormorant-cap.cyclic.app/cart/addtocart", {
      method: "POST",
      body: JSON.stringify({
        title: book.title,
        author: book.author,
        price: book.price,
        image: book.image,
        ratings: book.ratings,
        description: book.description,
      }),
      headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("user_token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.Msg === "Please Login") {
          alert(res.Msg);
          navigate("/login");
          console.log(res);
        } else {
          console.log(res);
          alert(res.Msg);
          navigate("/cart");
          // toast({
          //   position: "top",
          //   title: "Successfull",
          //   description: "Added to Cart",
          //   status: "success",
          //   duration: 3000,
          //   isClosable: true,
          // });
        }
      })
      .catch((err) => console.log(err));
  };

  // const handleCart = () => {
  //   // console.log(book);

  //   setClick(true);
  //   axios
  //     .post(`http://localhost:8000/cart/addtocart`, book)
  //     .then((res) => {
  //       // console.log(res);
  //       console.log(token);
  //       // alert("Added to cart");
  //       // if (res.data.Msg == "Please Login") {
  //       //   alert(res.data.Msg);
  //       //   navigate("/login");
  //       // } else {
  //       //   toast({
  //       //     position: "top",
  //       //     title: "Successfull",
  //       //     description: "Added to Cart",
  //       //     status: "success",
  //       //     duration: 3000,
  //       //     isClosable: true,
  //       //   });
  //       // }
  //       if (token) {
  //         toast({
  //           position: "top",
  //           title: "Successfull",
  //           description: "Added to Cart",
  //           status: "success",
  //           duration: 3000,
  //           isClosable: true,
  //         });
  //       } else {
  //         alert(res.data.Msg);
  //         navigate("/login");
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };

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
              fontWeight: "700",
              letterSpacing: "2px",
            }}
            _hover={{ cursor: "pointer" }}
          >
            {book.title}
          </Text>
          <Text
            id="book_author"
            style={{
              textAlign: "left",
              fontSize: "20px",
              marginTop: "10px",
              fontFamily: "sans-serif",
            }}
          >
            <span
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              Author:{" "}
            </span>{" "}
            {book.author}
          </Text>
          <Text
            id="book_price"
            style={{
              textAlign: "left",
              fontSize: "20px",
              marginTop: "5px",
            }}
          >
            <span
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              Price:{" "}
            </span>
            ${book.price}
          </Text>
          <Text
            id="book_rating"
            style={{
              textAlign: "left",
              fontSize: "18px",
              marginTop: "10px",
              // opacity: "0.8",
            }}
          >
            <span style={{ fontWeight: "bold", fontSize: "18px" }}>
              Rating:{" "}
            </span>{" "}
            {book.ratings}/10
          </Text>
          <br />
          <Text
            id="book_descrip"
            style={{
              textAlign: "left",
              fontSize: "17px",
              letterSpacing: "1.5px",
            }}
          >
            <span style={{ fontWeight: "bold", fontSize: "19px" }}>
              Description:{" "}
            </span>{" "}
            {book.description}
          </Text>
          <br />
          <Link to={"/cart"}>
            <div>
              {click ? (
                <Button
                  id="book_cart_button"
                  onClick={handleCart}
                  style={{
                    width: "150px",
                    borderRadius: "10px",
                    color: "white",
                    backgroundColor: "coral",
                  }}
                  _hover={{ transform: "scale(1.1)" }}
                  isDisabled={click}
                >
                  Add to Cart
                </Button>
              ) : (
                <Button
                  id="book_cart_button"
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
              )}
            </div>
          </Link>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default SingleBookPage;
