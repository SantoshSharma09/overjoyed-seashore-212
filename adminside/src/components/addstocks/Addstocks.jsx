import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Addstocks.css";

const Addstocks = () => {
  const navigate = useNavigate();
  const [title, settitle] = useState("");
  const [price, setprice] = useState("");
  const [rating, setrating] = useState("");
  const [category, setcategory] = useState("");
  const [author, setauthor] = useState("");
  const [desc, setdesc] = useState("");
  const [image, setimage] = useState("");

  const handlesubmit = () => {
    const bookadd = {
      title: title,
      price: price,
      ratings: rating,
      author: author,
      category: category,
      description: desc,
      image: image,
    };
    console.log(bookadd);

    fetch("https://real-blue-cormorant-cap.cyclic.app/kitab/post", {
      method: "POST",
      body: JSON.stringify(bookadd),
      headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.msg === "You are not admin") {
          alert(res.msg);
          navigate("/");
        } else {
          console.log(res);
          alert(res.msg);
          settitle("");
          setprice("");
          setrating("");
          setcategory("");
          setauthor("");
          setdesc("");
          setimage("");
          navigate("/stocks");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Navbar />
      <h1 className="allusers_admin_dashboard_page">Add Books</h1>

      <div className="addstocks_dashboard_admin_side">
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="Enter Price"
          value={price}
          onChange={(e) => setprice(e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="Enter Rating"
          value={rating}
          onChange={(e) => setrating(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Enter Category"
          value={category}
          onChange={(e) => setcategory(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Enter Author"
          value={author}
          onChange={(e) => setauthor(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Enter Description"
          value={desc}
          onChange={(e) => setdesc(e.target.value)}
        />
        <br />
        <input
          type="url"
          placeholder="Enter Image Url"
          value={image}
          onChange={(e) => setimage(e.target.value)}
        />
        <br />
        <button
          className="addstocks_button_admin_dashboard"
          onClick={handlesubmit}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default Addstocks;
