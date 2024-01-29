import React from "react";
import HistoryComp from "./HistoryComp";
import Img2019 from "../../assets/images/history/111-central-park3-1000x500.jpg";

function History2019(props) {
  return (
    <HistoryComp
      title={"Today"}
      subtitle={"111 WEST 57TH STREET"}
      description={`In 2019 Steinway Hall will be completed followed by the iconic new tower in 2020. From a historical foundation to a contemporary landmark, 111 aligns old and new, art and engineering, nature and culture, and is situated perfectly symmetrical to beautiful Central Park. The tower lifts history into the iconic Manhattan skyline, and adapts Steinway Hall’s classic pre-war layouts into character-rich residences.`}
      img={Img2019}
      prev_year={`2013`}
      prev_year_link={`history/2013`}
      next_year={``}
      next_year_link={``}
    ></HistoryComp>
  );
}

export default History2019;
