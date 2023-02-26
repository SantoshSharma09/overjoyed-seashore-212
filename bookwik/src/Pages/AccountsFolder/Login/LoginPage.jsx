import { Box, Button, Heading, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
const LoginPage = () => {
  const navigate = useNavigate();
  const initialState = {
    email: "",
    pass: "",
  };
  const [obj, setObj] = useState(initialState);
  const handleChange = (e) => {
    setObj({ ...obj, [e.target.name]: e.target.value });
  };
  const { email, pass } = obj;

  const handleClick = () => {
    console.log(obj);
    fetch("https://real-blue-cormorant-cap.cyclic.app/users/login", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        console.log(email);
        if (res.msg === "login success") {
          alert(res.msg);
          localStorage.setItem("user_token", res.token);
          localStorage.setItem("user_email", email);
          navigate("/kitabpage");
        } else {
          alert(res.msg);
          setObj(initialState);
          // setpassword("")
          navigate("/login");
        }
      });
  };
  return (
    <Box id="LoginPage">
      <Heading style={{ padding: "20px 0px" }}>Log In</Heading>
      <Box>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 1, lg: 1 }} spacing={3}>
          <input
            value={email}
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Enter Email"
            style={{ border: "2px solid gray", padding: "07px" }}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={pass}
            onChange={handleChange}
            name="pass"
            style={{ border: "2px solid gray", padding: "07px" }}
          />
        </SimpleGrid>
      </Box>{" "}
      <br />
      <Button
        onClick={handleClick}
        style={{
          backgroundColor: "#006400",
          color: "white",
          borderRadius: "0px",
          padding: "0px 25px",
        }}
      >
        Log in
      </Button>
    </Box>
  );
};

export default LoginPage;
