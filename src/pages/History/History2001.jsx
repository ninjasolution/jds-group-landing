import React from "react";

import HistoryComp from "./HistoryComp";
import Img2001 from "../../assets/images/history/landmark-plaque-rev2-1-1000x500.jpg";

function History2001(props) {
  return (
    <HistoryComp
      title={"2001-2013"}
      subtitle={"LANDMARK STATUS"}
      description={`In 2001 Steinway Hall is designated as a landmark, being “a timeless monument to classical music and architecture.” Steinway Hall’s Reception Room and Hallway and its well-preserved interior rotunda are declared a New York City landmark in 2013.`}
      img={Img2001}
      prev_year={`1928–2014`}
      next_year={`2013`}
    ></HistoryComp>
  );
}

export default History2001;
