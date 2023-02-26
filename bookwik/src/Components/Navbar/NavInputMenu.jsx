import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const NavInputMenu = () => {
  return (
    <>
      <Menu>
        {/* <MenuButton >
    All
  </MenuButton> */}
        <Button as={MenuButton} colorScheme="#6c757d" variant="ghost">
          All
        </Button>
        <MenuList>
          <Link to="#">
            {" "}
            <MenuItem
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              {" "}
              Books
            </MenuItem>
          </Link>
          <Link to="#">
            {" "}
            <MenuItem
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              {" "}
              Fiction
            </MenuItem>
          </Link>
          <Link to="#">
            {" "}
            <MenuItem
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              {" "}
              NonFiction
            </MenuItem>
          </Link>
          <Link to="#">
            {" "}
            <MenuItem
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              {" "}
              eBooks
            </MenuItem>
          </Link>
          <Link to="#">
            {" "}
            <MenuItem
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              {" "}
              Paper Back
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </>
  );
};

export default NavInputMenu;
