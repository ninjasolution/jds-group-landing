import React, { useState } from "react";

function ResidencesInfo(props) {
  const [hideInfoScreen, setHideInfoScreen] = useState(false);
  return (
    <div
      className={`info_screen bg-[#7A766C] z-10 absolute top-[40px] bottom-[40px] start-[40px] end-[40px]  ${
        hideInfoScreen ? "hide_screen" : ""
      }`}
    >
      <div className="bg-[#7A766C] flex justify-center items-center flex-col z-10 w-full h-full  text-white ">
        <h2 className="text-sm uppercase mb-[10px] transition-all opacity-1">
          RESIDENCES
        </h2>
        <p className="max-w-[600px] text-[26px] transition-all opacity-1 mx-auto text-[#bbb4aa] text-center leading-[32px]">
          With graceful central entrance galleries featuring horizon-deep views
          north and south, and monumental ceiling heights, each full-floor tower
          residence combines a grand scale with comfortable, private settings
          for contemporary living.
        </p>
        <div className="text-center mt-5">
          <button
            className="arrow_btn"
            onClick={() => setHideInfoScreen(true)}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default ResidencesInfo;
