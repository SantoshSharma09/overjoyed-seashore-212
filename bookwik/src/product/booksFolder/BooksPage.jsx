import React from "react";
import axios from "axios";
import "./booksPage.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Box, Button, Select, SimpleGrid, Text } from "@chakra-ui/react";

const BooksPage = () => {
  const [prod, setProd] = React.useState([]);
  const [select, setSelect] = React.useState("");

  // const [category, setCategory]= React.useState(false);
  // const [rating, setRating]= React.useState(false);
  // const [price, setPrice]= React.useState(false);

  //Fetching the data:
  const getProd = () => {
    axios
      .get(`http://localhost:8000/books`)
      .then((res) => {
        // console.log(res.data);
        setProd(res.data);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getProd();
  }, []);

  return (
    <Box>
      <Select
        placeholder="Select option"
        onChange={(e) => {
          // console.log(e.target.value);
          // setCategory(true);
          setSelect(e.target.value);
        }}
      >
        <option value="fiction">Fiction</option>
        <option value="non-fiction">Non-Fiction</option>
        <option value="kids">Kids</option>
      </Select>
      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 2, lg: 2 }}
        spacing={5}
      ></SimpleGrid>
      <Box id="All_books_box">
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={5}>
          {prod &&
            prod.map((prod) => {
              return (
                <motion.div key={prod.id} className="single_prod">
                  <div className="img_and_button">
                    <Link to={`/books/${prod._id}`}>
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        src={prod.image}
                        alt=""
                        width={"150px"}
                      />
                      <br />
                      <Button
                        style={{ width: "100px" }}
                        colorScheme="blue"
                        className="add_to_cart_button"
                      >
                        View Details
                      </Button>
                    </Link>
                  </div>
                  <Text
                    style={{
                      fontFamily: "monospace",
                      fontSize: "16px",
                      padding: "10px",
                    }}
                  >
                    {prod.title}
                  </Text>
                  <Text>${prod.price}</Text>
                </motion.div>
              );
            })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default BooksPage;
