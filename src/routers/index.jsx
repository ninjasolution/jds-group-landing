import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// ==========================Pages ===============================
import Base from "../layout/base/Base";
import Home from "../pages/Home/Home";
import Contact from '../pages/Contact/Contact';
import History from "../pages/History/History";
import Design from "../pages/Design/Design";
import Residences from "../pages/Residences/Residences";
import Views from "../pages/Views/Views";
import Availability from "../pages/Availability/Availability";
import Amenities from "../pages/Amenities/Amenities";
import Neighborhood from "../pages/Neighborhood/Neighborhood";
import Team from "../pages/Team/Team";
import Legal from "../pages/Legal/Legal";
import Press from "../pages/Press/Press";
// ==========================Pages ===============================End

function MyRoutes(props) {
  return (
    <div>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/history" element={<History></History>}></Route>
            <Route path="/design" element={<Design></Design>}></Route>
            <Route path="/residences" element={<Residences></Residences>}></Route>
            <Route path="/views" element={<Views></Views>}></Route>
            <Route path="/availability" element={<Availability></Availability>}></Route>
            <Route path="/amenities" element={<Amenities></Amenities>}></Route>
            <Route path="/neighborhood" element={<Neighborhood></Neighborhood>}></Route>
            <Route path="/team" element={<Team></Team>}></Route>
            <Route path="/legal" element={<Legal></Legal>}></Route>
            <Route path="/press" element={<Press></Press>}></Route>
          </Routes>
        </Base>
      </BrowserRouter>
    </div>
  );
}

export default MyRoutes;
