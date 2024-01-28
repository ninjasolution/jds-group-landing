import React from "react";
import HistoryComp from "./HistoryComp";
import Img1925 from "../../assets/images/history/opening-night2-1-1000x500.jpg";
function History1925(props) {
  return (
    <HistoryComp
      title={"1925"}
      subtitle={"STEINWAY HALL OPENING NIGHT"}
      description={`The official opening night takes place on October 27, 1925 with a performance by Willem Mengelberg and 35 musicians from the New York Philharmonic before 300 invited guests of the New York society. The entire performance is broadcast over the radio. As the flagship home of the premier maker of pianos, Steinway & Sons, Steinway Hall includes acoustically ideal rooms for musical performances by such virtuosos as Sergei Rachmaninoff and Vladimir Horowitz, as well as spaces for making and tuning instruments.`}
      img={Img1925}
      prev_year={`1916`}
      next_year={`1928–2014`}
    ></HistoryComp>
  );
}

export default History1925;
