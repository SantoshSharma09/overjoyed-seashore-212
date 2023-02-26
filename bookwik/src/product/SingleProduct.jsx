import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { _id } = useParams();
  const [singleProd, setSingleProd] = React.useState("");

  const getSingleprod = () => {
    axios
      .get(`https://real-blue-cormorant-cap.cyclic.app/books/${_id}`)
      .then((res) => {
        console.log(res);
        setSingleProd(res.data);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getSingleprod();
  }, []);

  return (
    <div>
      <h1>Single Product Page</h1>
      <div>
        <div key={singleProd.id}>
          <img src={singleProd.image} alt="" width={"200px"} />
          <h1>{singleProd.category}</h1>
          <p>{singleProd.price}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
