import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import LightboxScreen from "../../components/LightboxScreen";
function HistoryComp({
  title,
  subtitle,
  description,
  img,
  prev_year,
  next_year,
}) {
  const [hideInfoScreen, setHideInfoScreen] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  const [slideAside1, setSlideAside1] = useState(true);

  const slideContentList = [
    {
      id: 1,
      title: title,
      subtitle: subtitle,
      description: description,
      img: img,
      slide: slideAside1,
      setSlide: setSlideAside1,
      prev_year: prev_year,
      next_year: next_year,
    },
  ];

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

  const sliderRef = useRef(null);

  //   useEffect(() => {
  //     const handleWheel = (event) => {
  //       if (event.deltaY > 0) {
  //         // Scrolling down
  //         sliderRef.current.slickNext();
  //       } else {
  //         // Scrolling up
  //         sliderRef.current.slickPrev();
  //       }
  //     };

  //     window.addEventListener("wheel", handleWheel);

  //     return () => {
  //       window.removeEventListener("wheel", handleWheel);
  //     };
  //   }, []); // Empty dependency array ensures that this effect runs only once
  const [lightboxShow, setLightboxShow] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState("");

  return (
    <div>
      <div className="container_wrapper h-[75vh] relative bg-[#EFEFEF]">
        {/* =============Slide Content */}

        <div className="w-full h-full full_screen_slider">
          <Slider ref={sliderRef} {...settings} className="w-full h-full">
            {slideContentList.map((value, index) => {
              return (
                <div
                  className="h-full w-full !flex flex-nowrapp relative"
                  key={value.id}
                >
                  <div
                    className={`${
                      value.slide ? "w-[420px] " : "w-[50px] short_slide "
                    } transition-all duration-700 h-full bg-white text-primary   relative
          `}
                  >
                    <div
                      className={`absolute top-[50%]  ${
                        value.slide ? "p-[50px]" : ""
                      } w-full'}`}
                      style={{ transform: "translateY(-50%)" }}
                    >
                      <h3
                        className={`uppercase mb-3 text-primary text-center transition-all text-[42px] duration-100 ${
                          value.slide ? "opacity-1" : "opacity-0"
                        }`}
                      >
                        {value.title}
                      </h3>

                      <h6
                        className={`uppercase mb-3 text-primary text-center transition-all text-[22px] duration-100 ${
                          value.slide ? "opacity-1" : "opacity-0"
                        }`}
                      >
                        {value.subtitle}
                      </h6>

                      <p
                        className={`text-sm transition-all duration-100 ${
                          value.slide ? "opacity-1" : "opacity-0"
                        }`}
                      >
                        {value.description}
                      </p>
                    </div>
                    <button
                      onClick={() => value.setSlide(!value.slide)}
                      className={
                        value.slide
                          ? "arrow-right"
                          : "arrow-right arrow-rotate !end-[0px] start-[0%]"
                      }
                    ></button>

                    {/* controling */}
                    <div
                      className="absolute top-0 start-0 p-3 w-full"
                      style={{ borderBottom: "1px solid #7c7262" }}
                    >
                      <Link
                        to="/history"
                        className="text-primary flex items-center"
                      >
                        <svg
                          className="overflow-visible me-2 rotate-180 text-slate-300 group-hover:text-slate-200 dark:text-slate-500 dark:group-hover:text-slate-400"
                          width={3}
                          height={6}
                          viewBox="0 0 3 6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M0 0L3 3L0 6" />
                        </svg>
                        Timeline
                      </Link>
                    </div>

                    {value.prev_year && (
                      <div className="absolute start-0 bottom-0 p-3">
                        <Link
                          to={`/history/${String(value.next_year).replace(
                            /[-]g/,
                            ""
                          )}`}
                          className="text-primary flex items-center"
                        >
                          <svg
                            className="overflow-visible me-2 rotate-180 text-slate-300 group-hover:text-slate-200 dark:text-slate-500 dark:group-hover:text-slate-400"
                            width={3}
                            height={6}
                            viewBox="0 0 3 6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M0 0L3 3L0 6" />
                          </svg>
                          {value.prev_year}
                        </Link>
                      </div>
                    )}

                    {value.next_year && (
                      <div className="absolute end-0 bottom-0 p-3 px-4">
                        <Link
                          to={`/history/${value.next_year.replaceAll("-", "")}`}
                          className="text-primary flex items-center "
                        >
                          {value.next_year}

                          <svg
                            className="overflow-visible ms-2 text-slate-300 group-hover:text-slate-200 dark:text-slate-500 dark:group-hover:text-slate-400"
                            width={3}
                            height={6}
                            viewBox="0 0 3 6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M0 0L3 3L0 6" />
                          </svg>
                        </Link>
                      </div>
                    )}
                  </div>

                  <div
                    className="content_screen w-full h-full"
                    style={{
                      background: `url(${value.img}) center/cover no-repeat`,
                    }}
                  >
                    <button
                      onClick={() => {
                        setLightboxShow(true);
                        setLightboxSrc(value.img);
                      }}
                      className="w-8 h-8 absolute end-5 top-5 group bg-[#7c7262] hover:bg-white cursor-pointer flex items-center justify-center z-50"
                    >
                      <svg
                        width={10}
                        height={10}
                        viewBox="0 0 10 10"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FFF"
                        className="group-hover:fill-current rotate-45 group-hover:text-[#7c7262]"
                      >
                        <path
                          d="M4.328 5.036L1.146 1.854.793 1.5 1.5.793l.354.353 3.182 3.182 3.182-3.182.353-.353.708.707-.353.354-3.182 3.182 3.182 3.182.353.353-.707.708-.352-.353-3.182-3.182-3.182 3.182-.354.353-.707-.707.353-.352 3.182-3.182z"
                          fillRule="evenodd"
                        />
                        <path
                          d="M4.328 5.036L1.146 1.854.793 1.5 1.5.793l.354.353 3.182 3.182 3.182-3.182.353-.353.708.707-.353.354-3.182 3.182 3.182 3.182.353.353-.707.708-.352-.353-3.182-3.182-3.182 3.182-.354.353-.707-.707.353-.352 3.182-3.182z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </Slider>

          <LightboxScreen
            isShow={lightboxShow}
            src={lightboxSrc}
            setLightboxShow={setLightboxShow}
          ></LightboxScreen>
        </div>
      </div>
    </div>
  );
}

export default HistoryComp;
