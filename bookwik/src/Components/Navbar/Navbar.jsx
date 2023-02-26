import { Box, Button, Hide, Show } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import "./Navbar.css";
import DrawerExample from "./Drawer";
import DrawerExample2 from "./Drawer2";
import NavInputMenu from "./NavInputMenu";
import AccountMenu from "./AccountMenu";

const Navbar = () => {
  const navigate = useNavigate();
  let usertoken = localStorage.getItem("user_token");
  const handleLogout = () => {
    localStorage.clear();

    navigate("/");
  };
  return (
    <>
      <Box id="Navbar">
        <Box id="Navbar-Top">
          <Box id="Navbar-TopLeft">
            <Show breakpoint="(max-width: 770px)">
              <DrawerExample />
            </Show>
            <Link to="/books">
              {" "}
              <span style={{ display: "flex", gap: "5px" }}>
                {" "}
                <img
                  className="location-icon"
                  src="https://user-images.githubusercontent.com/107903370/220405588-919d8ce9-a146-4355-9818-8f137288ca45.png"
                  alt="location-icon"
                />{" "}
                <Hide breakpoint="(max-width: 770px)"> STORES & EVENTS </Hide>
              </span>{" "}
            </Link>
            <Hide below="md">
              {" "}
              <span>BLOG & PODCAST </span>
              <span>MEMBERSHIP </span>
              <span>COUPONS & DEALS</span>
              <span>BESTSELLERS </span>
              <span> GIFT CARDS</span>{" "}
            </Hide>
          </Box>
          <Show breakpoint="(max-width: 770px)">
            <Link to="/">
              {" "}
              <img
                className="logo"
                src="https://user-images.githubusercontent.com/107903370/220422422-7ee82cb2-7889-4ace-96aa-f5df0be687fd.jpeg"
                alt="logo"
              />{" "}
            </Link>
          </Show>
          <Box id="Navbar-TopRight">
            <Hide below="md">
              <AccountMenu />
            </Hide>
            <span style={{ display: "flex", gap: "5px" }}>
              {" "}
              <img
                className="wishlist-icon"
                src="https://user-images.githubusercontent.com/107903370/220409397-c7ac7310-071b-4408-98eb-540a616298a5.png"
                alt="wishlist-icon-logo"
              />{" "}
              <Hide breakpoint="(max-width: 770px)"> WISHLIST</Hide>
            </span>
            <span>
              {usertoken ? <Button onClick={handleLogout}>Logout</Button> : ""}
            </span>
            <Show breakpoint="(max-width: 770px)">
              <DrawerExample2 />
            </Show>
          </Box>
        </Box>
        {/* Nav-Top ends here */}

        {/* Nav-mid Starts here */}
        <Box id="Nav-mid">
          <Hide breakpoint="(max-width: 770px)">
            <Link to="/">
              {" "}
              <img
                id="logo2"
                alt="Nav-mid-logo"
                src="https://user-images.githubusercontent.com/107903370/220422422-7ee82cb2-7889-4ace-96aa-f5df0be687fd.jpeg"
              />{" "}
            </Link>{" "}
          </Hide>
          <Box
            id="inputBox"
            style={{ border: "2px solid black", display: "flex" }}
          >
            <NavInputMenu />
            <input
              id="SearchInputBox"
              type="text"
              placeholder="input bar"
              style={{ border: "1px solid black" }}
            />
            <button>
              <img
                src="https://user-images.githubusercontent.com/107903370/220546869-01f44250-323f-4c63-982f-d30a9406ae9a.png"
                alt="search-icon"
                style={{ width: "37px", padding: "0 6px" }}
              />
            </button>
          </Box>

          <Hide breakpoint="(max-width: 770px)">
            <Link to={"/cart"}>
              {" "}
              <img
                style={{ width: "35%", marginBottom: "10px" }}
                src="data:image/png;base64,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"
                alt="img"
              />{" "}
            </Link>
          </Hide>
        </Box>
        {/* Nav-mid ens Here */}
        {/* Nav-bottom starts here */}
        <Box id="Nav-bottom">
<<<<<<< HEAD
          <Link to="/kitab">
=======
          <Link to="/kitabpage">
>>>>>>> 8a0345a8b988a355a8c001448cddc2b1b276b2a1
            {" "}
            <span>Books</span>{" "}
          </Link>
          <span>Fiction</span>
          <span>Nonfiction</span>
          <span>eBooks</span>
          <span>Audiobooks</span>
          <span>Teens & YA</span>
          <span>Kids</span>
          <span>Toys & Games</span>
          <span>Stationery & Gifts</span>
          <span>Music & Movies</span>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
