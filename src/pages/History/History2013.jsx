import React from "react";
import HistoryComp from "./HistoryComp";
import Img2013 from "../../assets/images/history/2013-history-lg-6-2-1000x500.jpg";

function History2013(props) {
  return (
    <HistoryComp
      title={"2013"}
      subtitle={"STEINWAY HALL— THE NEXT CHAPTER"}
      description={`In 2013 the next great chapter in Steinway Hall’s famous history is written. JDS Development Group and Property Markets Group acquire the landmark building and adjacent lot to build a one-of-a-kind, bold yet slender skyscraper in custom-cast terra cotta, bronze, and glass, designed by SHoP architects with interiors by Studio Sofield.`}
      img={Img2013}
      prev_year={`2001-2013`}
      next_year={`Today`}
    ></HistoryComp>
  );
}

export default History2013;
