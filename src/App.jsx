import React from "react";
import "./App.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Product from "./product/Product";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
