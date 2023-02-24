import { Box, Hide, Show } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import "./Navbar.css";
import DrawerExample from "./Drawer";
import DrawerExample2 from "./Drawer2";
import NavInputMenu from "./NavInputMenu";
import AccountMenu from "./AccountMenu";
const Navbar = () => {
  return (
    <>
      <Box id="Navbar">
        <Box id="Navbar-Top">
          <Box id="Navbar-TopLeft">
            <Show breakpoint="(max-width: 770px)">
              <DrawerExample />
            </Show>
            <Link>
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
            {" "}
            <DrawerExample2 />{" "}
          </Hide>
        </Box>
        {/* Nav-mid ens Here */}
        {/* Nav-bottom starts here */}
        <Box id="Nav-bottom">
          <Link>
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
