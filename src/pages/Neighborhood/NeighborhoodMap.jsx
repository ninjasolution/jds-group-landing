import React, { useState } from "react";

function NeighborhoodMap(props) {
  const [shoppingShow, setShoppingShow] = useState(true);
  const [medicalShow, setMedicalShow] = useState(true);
  const [golfShow, setGolfShow] = useState(true);

  return (
    <div className="w-full h-full bg-[#EFF8F5] relative ">
      <div className="page" id="page-neighbourhood">
        <div className="map-filter">
          {/* <button class="map-filter-item js-map-filter" data-type="all">All</button> */}
          <button
            onClick={() => setShoppingShow(!shoppingShow)}
            className={`map-filter-item js-map-filter !flex items-center flex-nowrap ${
              shoppingShow ? "" : "opacity-50"
            }`}
            data-type="shop"
          >
            {" "}
            <img
              className="imgneigh"
              src="http://paulm160.sg-host.com/pymble/maps/shopping_brown.svg"
            />{" "}
            Shopping and Retail
          </button>
          <button
            onClick={() => setMedicalShow(!medicalShow)}
            className={`map-filter-item js-map-filter !flex items-center flex-nowrap ${
              medicalShow ? "" : "opacity-50"
            }`}
            data-type="dining"
          >
            <img
              className="imgneigh"
              src="http://paulm160.sg-host.com/pymble/maps/med_brown.svg"
            />{" "}
            Medical &amp; Hospital
          </button>
          <button
            onClick={() => setGolfShow(!golfShow)}
            className={`map-filter-item js-map-filter !flex items-center flex-nowrap ${
              golfShow ? "" : "opacity-50"
            }`}
            data-type="culture"
          >
            {" "}
            <img
              className="imgneigh"
              src="http://paulm160.sg-host.com/pymble/maps/park_brown.svg"
            />
            Golf And Parks
          </button>
        </div>
        <div id="map-container" className="dragdealer">
          <div id="map-wrapper" className="handle">
            <img
              src="http://paulm160.sg-host.com/pymble/newmap.jpg"
              alt="111 West 57th Street and neighbourhood"
            />
            <ul className="places">
              {shoppingShow && (
                <li
                  className="map-marker map-marker-type-shop"
                  aria-haspopup="true"
                  style={{ left: "55.0101%", top: "15.5%" }}
                >
                  <a href="#" className="tooltip">
                    Saint Ives Shopping Village{" "}
                  </a>
                </li>
              )}

              {shoppingShow && (
                <li
                  className="map-marker map-marker-type-shop"
                  aria-haspopup="true"
                  style={{ left: "48.8101%", top: "44.4%" }}
                >
                  <a href="#" className="tooltip">
                    Pymble Train Station{" "}
                  </a>
                </li>
              )}

              {shoppingShow && (
                <li
                  className="map-marker map-marker-type-shop"
                  aria-haspopup="true"
                  style={{ left: "49.1101%", top: "64.8%" }}
                >
                  <a href="#" className="tooltip">
                    Gordon Center{" "}
                  </a>
                </li>
              )}

              {shoppingShow && (
                <li
                  className="map-marker map-marker-type-shop"
                  aria-haspopup="true"
                  style={{ left: "28.7%", top: "86.91%" }}
                >
                  <a href="#" className="tooltip">
                    Mackquarie Central{" "}
                  </a>
                </li>
              )}
              {medicalShow && (
                <li
                  className="map-marker map-marker-type-dining"
                  aria-haspopup="true"
                  style={{ left: "30.5578%", top: "76.91%" }}
                >
                  <a href="#" className="tooltip">
                    Mackquarie University Hospital{" "}
                  </a>
                </li>
              )}
              {medicalShow && (
                <li
                  className="map-marker map-marker-type-dining"
                  aria-haspopup="true"
                  style={{ left: "25.3%", top: "28.2%" }}
                >
                  <a href="#" className="tooltip">
                    Sydney Adventist Hospital{" "}
                  </a>
                </li>
              )}
              {golfShow && (
                <li
                  className="map-marker map-marker-type-culture"
                  aria-haspopup="true"
                  style={{ left: "37.6%", top: "52.5%" }}
                >
                  <a href="#" className="tooltip">
                    Avondale Golf Club{" "}
                  </a>
                </li>
              )}
              {golfShow && (
                <li
                  className="map-marker map-marker-type-culture"
                  aria-haspopup="true"
                  style={{ left: "33%", top: "65.7%" }}
                >
                  <a href="#" className="tooltip">
                    Lane Cove National Park{" "}
                  </a>
                </li>
              )}
              {golfShow && (
                <li
                  className="map-marker map-marker-type-culture"
                  aria-haspopup="true"
                  style={{ left: "53.9871%", top: "20.6369%" }}
                >
                  <a href="#" className="tooltip">
                    Pymble Golf Club{" "}
                  </a>
                </li>
              )}
              {golfShow && (
                <li
                  className="map-marker map-marker-type-culture"
                  aria-haspopup="true"
                  style={{ left: "56.1871%", top: "28.2369%" }}
                >
                  <a href="#" className="tooltip">
                    Robert Pymble Park{" "}
                  </a>
                </li>
              )}
              {golfShow && (
                <li
                  className="map-marker map-marker-type-culture"
                  aria-haspopup="true"
                  style={{ left: "53.1101%", top: "50.9%" }}
                >
                  <a href="#" className="tooltip">
                    Richmond Park{" "}
                  </a>
                </li>
              )}
              {golfShow && (
                <li
                  className="map-marker map-marker-type-culture"
                  aria-haspopup="true"
                  style={{ left: "47.1101%", top: "71.2%" }}
                >
                  <a href="#" className="tooltip">
                    Gordon's Golf Club{" "}
                  </a>
                </li>
              )}
              {golfShow && (
                <li
                  className="map-marker map-marker-type-culture"
                  aria-haspopup="true"
                  style={{ left: "51.6%", top: "80.2%" }}
                >
                  <a href="#" className="tooltip">
                    Killara's Golf Club{" "}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NeighborhoodMap;
