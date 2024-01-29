import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import ViewImg from "../../assets/images/views/a-new-york-penthouse-1000-feet-above-street-level-fetches-50-million-plus-1680x845.jpg";
import LightboxScreen from "../../components/LightboxScreen";
function ViewsSlide(props) {
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleWheel = (event) => {
      if (event.deltaY > 0) {
        // Scrolling down
        sliderRef.current.slickNext();
      } else {
        // Scrolling up
        sliderRef.current.slickPrev();
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []); // Empty dependency array ensures that this effect runs only once

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
  const [slideAside2, setSlideAside2] = useState(true);
  const [slideAside3, setSlideAside3] = useState(true);
  const [slideAside4, setSlideAside4] = useState(true);
  const [slideAside5, setSlideAside5] = useState(true);

  const slideContentList = [
    {
      id: 1,
      title: "",
      description: ``,
      img: "",
      iframe: (
        <iframe
          src="https://player.vimeo.com/video/795306661?background=1&loop=true&autoplay=true&muted=true&gesture=media&playsinline=true&h=9e7e8bd584&byline=false&portrait=false&title=false&speed=false&transparent=false&customControls=true"
          allowFullScreen
          allow="autoplay; fullscreen; encrypted-media"
        />
      ),
      slide: slideAside1,
      setSlide: setSlideAside1,
    },
    {
      id: 2,
      title: "Views",
      img: ViewImg,
      description: `111 aligns old and new, art and engineering, nature and culture, into perfect symmetry: a new line along the skyline, along the center of the park at the center of the island at the center of the world.`,
      slide: slideAside2,
      setSlide: setSlideAside2,
    },
  ];
  const [lightboxShow, setLightboxShow] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState("");

  return (
    <div className="w-full h-full full_screen_slider">
      <Slider ref={sliderRef} {...settings} className="w-full h-full">
        {slideContentList.map((value, index) => {
          return (
            <div className="h-full w-full !flex flex-nowrapp" key={value.id}>
              {value.title && (
                <div
                  className={`${
                    value.slide ? "w-[420px] " : "w-[50px] short_slide "
                  } transition-all duration-700 h-full bg-primary text-white   relative
          `}
                >
                  <div
                    className={`absolute top-[50%]  ${
                      value.slide ? "p-[50px]" : ""
                    } w-full'}`}
                    style={{ transform: "translateY(-50%)" }}
                  >
                    <h3
                      className={`uppercase mb-3 text-base transition-all duration-100 ${
                        value.slide ? "opacity-1" : "opacity-0"
                      }`}
                    >
                      {value.title}
                    </h3>
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
                </div>
              )}

              {value.title ? (
                <div
                  className="content_screen w-full h-full relative"
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
              ) : (
                <div className="content_screen w-full h-full">
                  <iframe
                    className="w-full h-full pointer-events-none"
                    src="https://player.vimeo.com/video/795306661?background=1&loop=true&autoplay=true&muted=true&gesture=media&playsinline=true&h=9e7e8bd584&byline=false&portrait=false&title=false&speed=false&transparent=false&customControls=true"
                    allowFullScreen
                    allow="autoplay; fullscreen; encrypted-media"
                  />
                </div>
              )}
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
  );
}

export default ViewsSlide;
