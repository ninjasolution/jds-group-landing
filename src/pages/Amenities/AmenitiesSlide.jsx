import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import PrivatePorteImg from '../../assets/images/amenities/amenities-3-e1671634988707-1280x720.jpg'
import ArrivalImg from '../../assets/images/amenities/amenities-4-1280x720-1675200088.jpg'
import PoolImg from '../../assets/images/amenities/22073_press_111w57_ameneties0003-1-scaled-1280x720-1675200288.jpg'
import TerraceImg from '../../assets/images/amenities/111-terrace-1280x720.jpg'

function AmenitiesSlide(props) {
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
      title: "Private Porte Cochère",
      description: `111 West 57th Street&nbsp;establishes a lifestyle of luxury – with a gracious and secure entrance experience featuring a rare, private and sheltered porte cochère with custom urn chandeliers, rusticated gray granite pavers, and intricate grill work doors inspired by the bronze filigree on the building’s exterior.`,
      img: PrivatePorteImg,
      slide: slideAside1,
      setSlide: setSlideAside1,
    },
    {
      id: 2,
      title: 'Arrival',
      img: ArrivalImg,
      description: `111 West 57th Street&nbsp;establishes a lifestyle of luxury – with a gracious and secure entrance experience featuring a rare, private and sheltered porte cochère with custom urn chandeliers, rusticated gray granite pavers, and intricate grill work doors inspired by the bronze filigree on the building’s exterior.`,
      slide: slideAside2,
      setSlide: setSlideAside2,
    },
    {
      id: 3,
      title: 'The Pool',
      img: PoolImg,
      description: `A beautiful and serene 82’ lap pool features double-height vaulted ceilings, alcove cabanas and lounge seating throughout, and custom ornate wall sconces.`,
      slide: slideAside3,
      setSlide: setSlideAside3,
    },
    {
      id: 4,
      title: 'The Pool',
      img: PoolImg,
      description: `A beautiful and serene 82’ lap pool features double-height vaulted ceilings, alcove cabanas and lounge seating throughout, and custom ornate wall sconces.`,
      slide: slideAside4,
      setSlide: setSlideAside4,
    },
    {
      id: 5,
      title: 'Terrace',
      img: TerraceImg,
      description: `The expansive outdoor terrace and lounge offers residents a private space for relaxing, al-fresco dining, or entertaining guests.`,
      slide: slideAside5,
      setSlide: setSlideAside5,
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

export default AmenitiesSlide;
