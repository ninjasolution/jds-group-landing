import React from "react";
import HistoryComp from "./HistoryComp";
import Img1887 from "../../assets/images/history/1887-history-lg-5-1000x500.jpg";

function History1887(props) {
  return (
    <HistoryComp
      title={"1887"}
      subtitle={"THE ORIGINAL ARCHITECTS: MASTERS OF MANHATTAN"}
      description={`The celebrated firm Warren & Wetmore is founded in 1887. The firm designs many of Manhattan's most refined residential and cultural buildings, from 927 Fifth Avenue to Grand Central Station, and go on to design Steinway Hall in 1923. Warren & Wetmore's artistic approach culminates in classical proportions, carefully carved stonework, and a picturesque roofline.`}
      img={Img1887}
      prev_year={`1853`}
      prev_year_link={`history/1853`}
      next_year={`1916`}
      next_year_link={`history/1916`}
    ></HistoryComp>
  );
}

export default History1887;
