import React, { useState, useEffect } from "react";

function NeighborhoodInfo(props) {
  const [hideInfoScreen, setHideInfoScreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideInfoScreen(true);
      console.log("scroll");
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once after component mount

  return (
    <div
      className={`info_screen bg-[#8E8F90] z-[12] absolute top-[40px] bottom-[40px] start-[40px] end-[40px]  ${
        hideInfoScreen ? "hide_screen" : ""
      }`}
    >
      <div className="bg-[#8E8F90] flex justify-center items-center flex-col z-10 w-full h-full  text-white ">
        <h2 className="text-sm uppercase mb-[10px] transition-all opacity-1">
          MIDTOWN NEIGHBORHOOD
        </h2>
        <p className="max-w-[600px] text-[26px] transition-all opacity-1 mx-auto text-[#bbb4aa] text-center leading-[32px]">
          111 West 57th Street anchors a neighborhood of premier cultural
          landmarks; Carnegie Hall and Lincoln Center to the West; the Museum of
          Modern Art a few blocks South; and the living green heart of New York
          City, Central Park, just steps to the North.
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

export default NeighborhoodInfo;
