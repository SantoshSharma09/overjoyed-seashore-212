import React from "react";
import axios from "axios";
import "../styles/prod.css";
import Carousel from "better-react-carousel";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button, SimpleGrid } from "@chakra-ui/react";

const ProductPage = () => {
  const [prod, setProd] = React.useState([]);
  const [fiction, setFiction] = React.useState([]);

  //Fetching the data:
  const getProd = () => {
    axios
      .get(`https://real-blue-cormorant-cap.cyclic.app/books`)
      .then((res) => {
        // console.log(res.data);
        setProd(res.data);
        //Filtering Fiction data:
        const fictionData = prod.filter((prod) => prod.category == "fiction");
        // console.log(fictionData);
        setFiction(fictionData);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getProd();
  }, []);

  const bnReads = [
    {
      src: "https://www.barnesandnoble.com/blog/wp-content/uploads/2023/02/PROD-25847_Blog_Social_PsychologicalFiction_1488x852-2.jpg?w=340&h=195&crop=1",
      text: "Don't Mind Your Own Business with Books That Take You Inside Their Characters' Brains",
    },
    {
      src: "https://www.barnesandnoble.com/blog/wp-content/uploads/2023/02/PROD-25844-BlogSocial_MultiIntergenNovels_1488x852-3.jpg?w=340&h=195&crop=1",
      text: "Stories That Move From One Generation to the Next",
    },
    {
      src: "https://www.barnesandnoble.com/blog/wp-content/uploads/2022/09/PROD-25318_Blog_BooksYouOnlyReadOnce_12-05_1488x852.jpg?w=340&h=195&crop=1",
      text: "Books You Only Read Once: Stories So Profound You Won’t Ever Be the Same",
    },
  ];

  return (
    <div>
      <div className="header">
        <h1>Fiction Books</h1>
        <p>
          Browse a variety of genres including general fiction, literature,
          romance and many more
        </p>
      </div>
      <div className="main_container">
        {/* sidebar */}
        <div className="sidebar">
          <div>
            <h3>BROWSE FICTION</h3>
            <section>
              <p>Bestsellers</p>
              <p>New Releases</p>
              <p>Coming Soon</p>
              <p>Fiction Audiobooks</p>
              <p>Fiction eBooks</p>
              <p>Fiction Home</p>
            </section>
          </div>
          <div>
            <h3>FICTION SUBJECTS</h3>
            <section>
              <p>General Fiction</p>
              <p>Graphic Novels & Comics</p>
              <p>Historical Fiction</p>
              <p>Horror</p>
              <p>Literature</p>
              <p>Manga</p>
              <p>Mystery & Crime</p>
              <p>Poetry</p>
              <p>Romance</p>
              <p>Science Fiction & Fantasy</p>
              <p>Thrillers</p>
              <p>Westerns</p>
              <p>Browse All Subjects</p>
            </section>
          </div>
          <div>
            <h3>CUSTOMER FAVORITES</h3>
            <section>
              <p>B&N Top 100</p>
              <p>Teens & YA Top 100</p>
              <p>Kids Top 100</p>
              <p>NY Times® Bestsellers</p>
              <p>New Releases</p>
              <p>Coming Soon</p>
              <p>Books by Subject</p>
            </section>
          </div>
          <div>
            <h3>SPECIAL VALUES</h3>
            <section>
              <p>Buy 1, Get 1 50% Off</p>
              <p>Bestsellers 30% Off</p>
              <p>Up to 30% Off Pre-Orders</p>
              <p>Book Annex</p>
              <p>B&N Collectible Editions</p>
              <p>Coupons & Deals</p>
            </section>
          </div>
          <div>
            <h3>SPECIAL COLLECTIONS</h3>
            <section>
              <p>Our Monthly Picks</p>
              <p>Book Club Selections</p>
              <p>Discover Pick of the Month</p>
              <p>Bookseller Favorites</p>
              <p>B&N Book of the Year</p>
              <p>B&N Discover Prize</p>
              <p>The Paperback Store</p>
              <p>Boxed Sets</p>
              <p>Signed Books</p>
            </section>
          </div>
        </div>

        {/* main container */}
        <div className="prod_container">
          <div className="special_sections">
            {/* <hr id="line" /> */}
            <h1>Special Sections</h1>
            <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5 }} spacing={3}>
              <img
                src="https://dispatch.barnesandnoble.com/content/dam/ccr/bnstores/books/customer-favorites/2022/Fiction/PROD-22557_Customer_Favorites_Romance-hover.jpg"
                alt=""
              />
              <img
                src="https://dispatch.barnesandnoble.com/content/dam/ccr/bnstores/books/customer-favorites/2022/Fiction/PROD-22557_Customer_Favorites_Sci_Fi-1-hover.jpg"
                alt=""
              />
              <img
                src="https://dispatch.barnesandnoble.com/content/dam/ccr/bnstores/books/customer-favorites/2022/Fiction/PROD-22557_Customer_Favorites_Manga-hover.jpg"
                alt=""
              />
              <img
                src="https://dispatch.barnesandnoble.com/content/dam/ccr/bnstores/books/customer-favorites/2022/Fiction/PROD-22557_Customer_Favorites_Horror-hover.jpg"
                alt=""
              />
              <img
                src="https://dispatch.barnesandnoble.com/content/dam/ccr/bnstores/books/customer-favorites/2022/Fiction/PROD-22557_Customer_Favorites_Mystery-hover.jpg"
                alt=""
              />
            </SimpleGrid>
          </div>
          <div className="booksellers_fav">
            <h1>Bookseller Favorites</h1>
            <Carousel cols={3} rows={1} gap={5}>
              {prod &&
                prod.map((prod) => {
                  return (
                    <Carousel.Item>
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
                        <h2>{prod.category}</h2>
                        <p>{prod.price}</p>

                        {/* <hr /> */}
                      </motion.div>
                    </Carousel.Item>
                  );
                })}
            </Carousel>
          </div>
          <div className="fiction_bestsellers">
            <h1>Fiction Bestsellers</h1>
            <Carousel cols={4} rows={1} gap={5}>
              {fiction &&
                fiction.map((prod) => {
                  return (
                    <Carousel.Item>
                      <motion.div key={prod.id} className="single_prod">
                        <div className="img_and_button">
                          <Link to={`/books/${prod._id}`}>
                            <motion.img
                              whileHover={{ scale: 1.1 }}
                              src={prod.image}
                              alt=""
                              width={"100px"}
                            />
                          </Link>
                          <Button
                            style={{ width: "100px" }}
                            colorScheme="blue"
                            className="add_to_cart_button"
                          >
                            View Details
                          </Button>
                        </div>
                        <h2>{prod.category}</h2>
                        <p>{prod.price}</p>
                      </motion.div>
                    </Carousel.Item>
                  );
                })}
            </Carousel>
          </div>
          <div className="bn_reads">
            <h1>B&N Reads</h1>
            <Carousel cols={3} rows={1} gap={50}>
              {bnReads.map((el) => {
                return (
                  <Carousel.Item>
                    <div className="bn_reads_box">
                      <img src={el.src} width={"250px"} />
                      <p>{el.text}</p>
                    </div>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
          <div className="our_fiction_monthly_picks">
            <h1>Our Fiction Monthly Picks</h1>
            <div className="inside_our_fiction_monthly_picks">
              <div className="picks_side">
                <h2>This Month's Pick: The Sweet Spot</h2>
                <p>
                  Amy Poeppel brings her signature “big-hearted, charming” (The
                  Washington Post) style to this wise and joyful novel that
                  celebrates love, hate, and all of the glorious absurdity in
                  between.
                </p>
              </div>
              <div className="picks_right">
                <Carousel cols={2} rows={1} gap={1}>
                  {bnReads.map((el) => {
                    return (
                      <Carousel.Item>
                        <img src={el.src} width={"200px"} height={"200px"} />
                        <p>{el.text}</p>
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
              </div>
            </div>
          </div>
          <div className="featured_sub">
            <h1>Featured Subjects</h1>
            <Carousel cols={4} rows={2} gap={5}>
              {prod &&
                prod.map((prod) => {
                  return (
                    <Carousel.Item>
                      <motion.div key={prod.id} className="single_prod">
                        <div className="img_and_button">
                          <Link to={`/singleproduct/${prod.id}`}>
                            <motion.img
                              whileHover={{ scale: 1.1 }}
                              src={prod.image}
                              alt=""
                              width={"100px"}
                            />
                          </Link>
                          <button className="add_to_cart_button">
                            Add to Cart
                          </button>
                        </div>
                        <h2>{prod.category}</h2>
                        <p>{prod.price}</p>

                        {/* <hr /> */}
                      </motion.div>
                    </Carousel.Item>
                  );
                })}
            </Carousel>
          </div>
          <div className="our_fiction_monthly_picks">
            <h1>Our Fiction Monthly Picks</h1>
            <div className="inside_our_fiction_monthly_picks">
              <div className="picks_side">
                <h2>This Month's Pick: The Sweet Spot</h2>
                <p>
                  Amy Poeppel brings her signature “big-hearted, charming” (The
                  Washington Post) style to this wise and joyful novel that
                  celebrates love, hate, and all of the glorious absurdity in
                  between.
                </p>
              </div>
              <div className="picks_right">
                <Carousel cols={2} rows={1} gap={1}>
                  {bnReads.map((el) => {
                    return (
                      <Carousel.Item>
                        <img src={el.src} width={"200px"} height={"200px"} />
                        <p>{el.text}</p>
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
              </div>
            </div>
          </div>
          <div className="featured_sub">
            <h1>Featured Subjects</h1>
            <Carousel cols={4} rows={2} gap={5}>
              {prod &&
                prod.map((prod) => {
                  return (
                    <Carousel.Item>
                      <motion.div key={prod.id} className="single_prod">
                        <div className="img_and_button">
                          <Link to={`/singleproduct/${prod.id}`}>
                            <motion.img
                              whileHover={{ scale: 1.1 }}
                              src={prod.image}
                              alt=""
                              width={"100px"}
                            />
                          </Link>
                          <button className="add_to_cart_button">
                            Add to Cart
                          </button>
                        </div>
                        <h2>{prod.category}</h2>
                        <p>{prod.price}</p>

                        {/* <hr /> */}
                      </motion.div>
                    </Carousel.Item>
                  );
                })}
            </Carousel>
          </div>
          <div className="our_fiction_monthly_picks">
            <h1>Our Fiction Monthly Picks</h1>
            <div className="inside_our_fiction_monthly_picks">
              <div className="picks_side">
                <h2>This Month's Pick: The Sweet Spot</h2>
                <p>
                  Amy Poeppel brings her signature “big-hearted, charming” (The
                  Washington Post) style to this wise and joyful novel that
                  celebrates love, hate, and all of the glorious absurdity in
                  between.
                </p>
              </div>
              <div className="picks_right">
                <Carousel cols={2} rows={1} gap={1}>
                  {bnReads.map((el) => {
                    return (
                      <Carousel.Item>
                        <img src={el.src} width={"200px"} height={"200px"} />
                        <p>{el.text}</p>
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
              </div>
            </div>
          </div>
          <div className="more_about_fiction_book">
            <h1>More About Fiction Books</h1>
            <p>
              Exercise your mind and creativity with good fiction books. Find an
              extensive collection of fiction books at Barnes & Noble including
              must-read fiction books for 2022. Browse thousands of bestsellers,
              new releases, and classic novels from a wide range of genres,
              including general fiction, literary fiction, mystery, thrillers,
              historical fiction, and romance to find your next read. You can
              challenge your imagination with fantasy fiction or increase
              analytical and problem-solving skills with mystery and thriller
              fiction. We've got a book for every type of reader. Looking for
              something to read ASAP? Download fiction eBooks to your phone,
              tablet or NOOK device and start reading today! Find your next
              favorite fiction book at Barnes & Noble®. Some of the best fiction
              books this year are:
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
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
