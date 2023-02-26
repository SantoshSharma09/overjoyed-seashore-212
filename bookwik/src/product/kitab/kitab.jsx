import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";
import Sort from "./Sort";
import Category from "./Category";
import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./kitab.css";

const KitabPage = () => {
  const [obj, setObj] = useState({});
  const [sort, setSort] = useState({ sort: "ratings", order: "desc" });
  const [filterCategory, setFilterCategory] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const url = `http://localhost:8000/kitab/getdata?page=${page}&sort=${
          sort.sort
        }&category=${filterCategory.toString()}&search=${search}`;
        const data = await axios.get(url);
        // setObj(data.data.BooksList);
        // console.log(data);
        // setData(data.data.BooksList);
        setData(data.data);
        setObj(data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllMovies();
  }, [sort, filterCategory, page, search]);
  //   console.log(obj);

  return (
    <>
      {/* Search bar */}
      <div id="sorting_filtering">
        <Search setSearch={(search) => setSearch(search)} />
      </div>

      {/* Filtering */}
      <div className="filter_container">
        <Sort sort={sort} setSort={(sort) => setSort(sort)} />
        <Category
          filterCategory={filterCategory}
          categories={
            obj.categories ? obj.categories : ["fiction", "non-fiction", "kids"]
          }
          setFilterCategory={(category) => setFilterCategory(category)}
        />
      </div>

      {/* All Books */}
      <SimpleGrid
        style={{ width: "80%", margin: "auto" }}
        columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
        spacing={10}
      >
        {data &&
          data.map((prod) => {
            return (
              <div
                key={prod.id}
                className="single_prod"
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
              >
                <div
                  className="img_and_button"
                  style={{ marginBottom: "10px" }}
                >
                  <Link to={`/kitab/${prod._id}`}>
                    <Box>
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        src={prod.image}
                        width={"270px"}
                        height={"250px"}
                        style={{ padding: "20px" }}
                      />
                    </Box>
                    {/* <br /> */}
                    <Button className="add_to_cart_button">View Details</Button>
                  </Link>
                </div>
                <Text
                  style={{
                    fontSize: "18px",
                    letterSpacing: "1px",
                    padding: "10px",
                    fontWeight: "600",
                  }}
                >
                  {prod.title}
                </Text>
                <Text
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                  }}
                >
                  ${prod.price}
                </Text>
                <Text
                  style={{
                    fontSize: "15px",
                    padding: "10px",
                    fontWeight: "500",
                    opacity: "0.7",
                  }}
                >
                  Rating: {prod.ratings}
                </Text>
              </div>
            );
          })}
      </SimpleGrid>

      {/* Ending */}
      <div className="more_about_fiction_book">
        <h1>More About Books</h1>
        <p>
          Exercise your mind and creativity with good books. Find an extensive
          collection of books at Barnes & Noble including must-read fiction
          books for 2022. Browse thousands of bestsellers, new releases, and
          classic novels from a wide range of genres, including general fiction,
          literary fiction, mystery, thrillers, historical fiction, and romance
          to find your next read. You can challenge your imagination with
          fantasy fiction or increase analytical and problem-solving skills with
          mystery and thriller fiction. We've got a book for every type of
          reader. Looking for something to read ASAP? Download fiction eBooks to
          your phone, tablet or NOOK device and start reading today! Find your
          next favorite fiction book at Barnes & Noble®. Some of the best
          fiction books this year are:
        </p>
        <div>
          <ul>
            <li>Tomorrow, and Tomorrow, and Tomorrow by Gabrielle Zevin</li>
            <li>The Night Ship by Jess Kidd</li>
            <li>The Marriage Portrait by Maggie O'Farrell</li>
            <li>The Passenger by Cormac McCarthy</li>
            <li>Our Missing Hearts by Celeste Ng</li>
            <li>Lessons in Chemistry by Bonnie Garmus</li>
            <li>The Rabbit Hutch by Tess Gunty</li>
            <li>Lessons by Ian McEwan</li>
            <li>People Person by Candice Carty-Williams</li>
            <li>Now Is Not the Time to Panic by Kevin Wilson</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default KitabPage;
