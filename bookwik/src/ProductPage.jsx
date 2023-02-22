import React from "react";
import axios from "axios";
import "./styles/prod.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const [prod, setProd] = React.useState([]);

  //Fetching the data:
  const getProd = () => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        console.log(res.data);
        setProd(res.data);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getProd();
  }, []);

  return (
    <motion.div>
      <h1>Products Page</h1>
      <div className="main_container">
        <div className="sidebar">
          <h2>Sidebar</h2>
        </div>
        <div className="prod_container">
          {prod &&
            prod.map((prod) => {
              return (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  key={prod.id}
                  className="single_prod"
                >
                  <Link to={`/singleproduct/${prod.id}`}>
                    <img src={prod.image} alt="" width={"100px"} />
                  </Link>
                  <h2>{prod.category}</h2>
                  <p>{prod.price}</p>
                  <button>Add to Cart</button>
                  {/* <hr /> */}
                </motion.div>
              );
            })}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductPage;
