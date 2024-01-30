import React, { useState, useEffect } from "react";

function ViewsInfo(props) {
  const [hideInfoScreen, setHideInfoScreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideInfoScreen(true);
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
      className={`info_screen bg-primary z-10 absolute top-[0px] bottom-[0px] start-[0px] end-[0px] sm:top-[40px] sm:bottom-[40px] sm:start-[40px] sm:end-[40px] md:top-[20px] md:bottom-[20px] md:start-[20px] md:end-[20px]  xl:top-[40px] xl:bottom-[40px] xl:start-[40px] xl:end-[40px]  ${
        hideInfoScreen ? "hide_screen" : ""
      }`}
    >
      <div className="bg-primary flex justify-center items-center flex-col z-10 w-full h-full  text-white ">
        <h2 className="text-sm uppercase mb-[10px] transition-all opacity-1">
          VIEWS
        </h2>
        <p className="max-w-[600px] text-[16px] sm:text-[26px] px-[30px] transition-all opacity-1 mx-auto text-[#bbb4aa] text-center leading-[32px]">
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
