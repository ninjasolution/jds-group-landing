import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "../layout/base/Base";
import Home from "../pages/Home/Home";

function MyRoutes(props) {
  return (
    <div>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
          </Routes>
        </Base>
      </BrowserRouter>
    </div>
  );
}

export default MyRoutes;
