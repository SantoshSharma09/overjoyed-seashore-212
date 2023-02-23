import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductPage from "../ProductPage";
import SingleProduct from "../SingleProduct";
import HomePage from "../Pages/HomePage/HomePage"
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path={"/products"} element={<ProductPage />} />
        <Route path={"/singleproduct/:id"} element={<SingleProduct />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
