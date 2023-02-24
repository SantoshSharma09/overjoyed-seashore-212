import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductPage from "../product/ProductPage";
import SingleProduct from "../product/SingleProduct";
import HomePage from "../Pages/HomePage/HomePage";
import SignUpPage from "../Pages/AccountsFolder/SignUp/SignUpPage";
import LoginPage from "../Pages/AccountsFolder/Login/LoginPage";
import SingleBookPage from "../product/SingleBookPage";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={"/books"} element={<ProductPage />} />
        <Route path={"/books/:id"} element={<SingleBookPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
