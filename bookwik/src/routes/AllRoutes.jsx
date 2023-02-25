import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductPage from "../product/ProductPage";
import SingleProduct from "../product/SingleProduct";
import HomePage from "../Pages/HomePage/HomePage";
import SignUpPage from "../Pages/AccountsFolder/SignUp/SignUpPage";
import LoginPage from "../Pages/AccountsFolder/Login/LoginPage";

import Cartpage from "../Cart/Cartpage";

import SingleBookPage from "../product/SingleBookPage";
import BooksPage from "../product/booksFolder/BooksPage";
import KitabPage from "../product/kitab/kitab";
import Payment from "../payment/Payment";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path={"/cart"} element={<Cartpage />} />
        <Route path={"/payment"} element={<Payment />} />

        <Route path={"/books"} element={<ProductPage />} />
        <Route path={"/newbooks"} element={<BooksPage />} />
        <Route path={"/kitab"} element={<KitabPage />} />
        {/* <Route path={"/books/:id"} element={<SingleBookPage />} /> */}
        <Route path={"/kitab/:id"} element={<SingleBookPage />} />

        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
