import React from "react";
import HistoryComp from "./HistoryComp";
import Img1853 from "../../assets/images/history/steinway-14-st-1000x500.jpg";
function History1853(props) {
  return (
    <HistoryComp
      title={"1853"}
      subtitle={"STEINWAY & SONS"}
      description={`Steinway & Sons is founded on March 5, 1853 by German immigrant Henry Engelhard Steinway in a Manhattan loft on Varick Street. By the 1860s, Steinway has built a new factory at Park Avenue and 53rd Street, the present site of the Seagram Building, where it covers a whole block. With a workforce of 350 men, production increases from 500 to 1,800 pianos per year. Steinway’s pianos win several important prizes at exhibitions in New York City, Paris and London, and over the next thirty years, Henry and his sons, C. F. Theodore, Charles, Henry Jr., William, and Albert, patent 127 inventions and contribute to the development of the modern piano.`}
      img={Img1853}
      prev_year={``}
      next_year={`1887`}
    ></HistoryComp>
  );
}

export default History1853;
