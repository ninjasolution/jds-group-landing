import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import BedroomImg from '../../assets/images/residences/111-W57th_Primary-Bedroom_030-1280x720.jpg';
import CollinMillerImg from '../../assets/images/residences/2021-08-05-ColinMiller-111W57-17S-0006-1724-v3_50-1280x720.jpg';
import AmenetiesImg from '../../assets/images/residences/22073_press_111w57th_ameneties_118-1.jpg-1280x720-1674487961.png';
import StagingImg from '../../assets/images/residences/CH_ASH_Staging_111_W_57_NYC_031A-2-1280x720.jpg';
import CorcoramImg from '../../assets/images/residences/CH_Corcoran_111_W_57_Pent_75_NYC_153A-e1674488230929-1280x720-1675201916.jpg';
function ResidencesSlide(props) {
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
      title: "GREAT HALL",
      description: `The signature Great Hall, with ceiling heights up to 14’, is a soaring space perfect for all entertaining occasions. The floor to ceiling window wall, spanning the full width of the building from east to west, offers a perfectly centered view of Central Park.`,
      img: AmenetiesImg,
      slide: slideAside1,
      setSlide: setSlideAside1,
    },
    {
      id: 2,
      title: 'Master Bedroom',
      img: BedroomImg,
      description: `Master bedrooms feature floor to ceiling windows with bronze mullions and expansive, perfectly centered views of the Manhattan skyline or Central Park.`,
      slide: slideAside2,
      setSlide: setSlideAside2,
    },
    {
      id: 3,
      title: 'Kitchens',
      img: StagingImg,
      description: `Custom kitchens designed by Studio Sofield.`,
      slide: slideAside3,
      setSlide: setSlideAside3,
    },
    {
      id: 4,
      title: 'Master Bath',
      img: CorcoramImg,
      description: `Master baths feature walls and floors finished in veined white onyx, a custom antique polished free standing tub by William Holland, and custom Studio Sofield designed bronze fixtures cast by P.E. Guerin.`,
      slide: slideAside3,
      setSlide: setSlideAside3,
    },
    {
      id: 5,
      title: <>Second Master Bath <em>(in select residences)</em></>,
      img: CollinMillerImg,
      description: `Second master baths are detailed with gray onyx showers, vanity and floors with custom blackened steel and custom sconces P.E. Guerin fixtures designed by Studio Sofield.`,
      slide: slideAside3,
      setSlide: setSlideAside3,
    },
  ];
  return (
    <div className="w-full h-full full_screen_slider">
      <Slider ref={sliderRef} {...settings} className="w-full h-full">
        {slideContentList.map((value, index) => {
          return (
            <div className="h-full w-full !flex flex-nowrapp" key={value.id}>
              <div
                className={`${
                  value.slide ? "w-[420px] " : "w-[50px] short_slide "
                } transition-all duration-700 h-full bg-[#343534] text-white   relative
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

              <div
                className="content_screen w-full h-full"
                style={{
                  background: `url(${value.img}) center/cover no-repeat`,
                }}
              ></div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default ResidencesSlide;
