import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// ==========Pages =========
import Base from "../layout/base/Base";
import Home from "../pages/Home/Home";
import Contact from "../pages/Home/Contact/Contact";
function MyRoutes(props) {
  return (
    <div>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
          </Routes>
        </Base>
      </BrowserRouter>
    </div>
  );
}

export default MyRoutes;
