import React from "react";

function HistoryInfo(props) {
  return (
    <div className="container_wrapper">
      <div className="bg-[#292929] h-[75vh] w-full relative p-5">
        <div className="bg-[#343534] flex justify-center items-center flex-col h-full w-full text-white">
          <h2 className="text-sm uppercase mb-[10px]">History</h2>
          <p className="max-w-[600px] text-[26px] mx-auto text-[#bbb4aa] text-center">
            The history of 111 West 57th Street is a piece of music in two great
            movements, bringing together the best of New York City’s prewar
            Golden Age of architectural design, with the best of today’s
            contemporary creativity in design innovation, engineering, and
            construction.
          </p>
          <div className="text-center mt-5">
            <button className="arrow_btn"></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryInfo;
