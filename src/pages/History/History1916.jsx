import React from "react";
import HistoryComp from "./HistoryComp";
import Img1916 from "../../assets/images/history/MNY239337-4-1000x500.jpg";
function History1916(props) {
  return (
    <HistoryComp
      title={"1916"}
      subtitle={"STEINWAY HALL ON 57TH STREET"}
      description={`In 1916, Steinway announces its plans to construct a new ten-story building with the purchase of adjacent town house properties on West 57th and 58th Streets, for nearly one million dollars. Steinway & Sons selects the architectural firm of Warren & Wetmore, which files for construction of a 16-story building in 1923. Steinway Hall’s design makes the front page of The New York Times, in October of 1923, in an article that hails the planned building as “an important addition to the new center of the fine arts.” Construction begins in June 1924 and is completed in April 1925.`}
      img={Img1916}
      prev_year={`1887`}
      prev_year_link={`history/1887`}
      next_year={`1925`}
      next_year_link={`history/1925`}
    ></HistoryComp>
  );
}

export default History1916;
