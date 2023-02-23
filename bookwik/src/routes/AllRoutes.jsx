import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductPage from "../product/ProductPage";
import SingleProduct from "../product/SingleProduct";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path={"/products"} element={<ProductPage />} />
        <Route path={"/singleproduct/:id"} element={<SingleProduct />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
