import React from "react";

import HistoryComp from "./HistoryComp";
import Img2001 from "../../assets/images/history/IMG_4221-music-hall-2-1000x500.jpg";

function History19282014(props) {
  return (
    <HistoryComp
      title={"1928–2014"}
      subtitle={"FAMOUS RECITALS"}
      description={`The glorious Beaux Arts building sees the most renowned piano artists of all time walk through its doors to perform, and select performance instruments from the famed piano bank in the basement. In this Steinway Hall, Vladimir Horowitz and Sergei Rachmaninoff famously meet and practice together, and over its nine decades of service to the piano world, Steinway Hall welcomes regular visits from the likes of Arthur Rubinstein, Van Cliburn, Judy Collins, Lang Lang, Billy Joel, Evgeny Kissin, Diana Krall, and Harry Connick, Jr. Countless performances take place in both the glamorous upstairs recital hall (destroyed in 1958) and the glittering domed reception room.`}
      img={Img2001}
      prev_year={`1925`}
      prev_year_link={`1925`}
      next_year={`2001-2013`}
      next_year_link={`history/2013`}
    ></HistoryComp>
  );
}

export default History19282014;
