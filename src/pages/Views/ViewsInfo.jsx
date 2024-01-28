import React, { useState } from "react";

function ViewsInfo(props) {
  const [hideInfoScreen, setHideInfoScreen] = useState(false);
  return (
    <div
      className={`info_screen bg-primary z-10 absolute top-[40px] bottom-[40px] start-[40px] end-[40px]  ${
        hideInfoScreen ? "hide_screen" : ""
      }`}
    >
      <div className="bg-primary flex justify-center items-center flex-col z-10 w-full h-full  text-white ">
        <h2 className="text-sm uppercase mb-[10px] transition-all opacity-1">
          VIEWS
        </h2>
        <p className="max-w-[600px] text-[26px] transition-all opacity-1 mx-auto text-[#bbb4aa] text-center leading-[32px]">
          111 aligns old and new, art and engineering, nature and culture, into
          perfect symmetry: a new line along the skyline, along the center of
          the park at the center of the island at the center of the world.
          Justin Davidson, New York Magazine
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

export default ViewsInfo;
