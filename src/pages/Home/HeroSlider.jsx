import React, { useState } from "react";
import Slider from "react-slick";
import SliderImg1 from "../../assets/images/home/1.jpeg";
import SliderImg2 from "../../assets/images/home/2.jpeg";
import SliderImg3 from "../../assets/images/home/3.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LightboxScreen from "../../components/LightboxScreen";
function HeroSlider(props) {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  const [lightboxShow, setLightboxShow] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState("");
  return (
    <div>
      <div className="container_wrapper">
        <Slider {...settings}>
          <div className="relative">
            <div className="bg-[#8e8f90cc] transition transition-color duration-500 hover:bg-[#8e8f90] absolute bottom-8 z-[10] start-10 end-10 px-[25px] pb-[25px] text-center flex jusitfy-center items-center flex-col">
              <h2 className="pt-[40px] text-white text-[22px] uppercase">
                The Classic Modern Terrace
              </h2>
              <p className="text-[#bbb4aa] text-base">
                Exclusive Residences for The Exclusive Street
              </p>
              <p className="text-[#bbb4aa] text-base">
                Pymble's Exclusive New Residences
              </p>
              <p className="text-[#bbb4aa] text-base">
                Expansive Living and Gardens
              </p>
              <p className="text-[#bbb4aa] text-base">
                Via Private Lifts and 24/7 Security
              </p>
            </div>
            <button
              onClick={() => {
                setLightboxShow(true);
                setLightboxSrc(SliderImg1);
              }}
              className="w-8 h-8 absolute end-5 top-5 group bg-[#E53B16] hover:bg-white cursor-pointer flex items-center justify-center z-50"
            >
              <svg
                width={10}
                height={10}
                viewBox="0 0 10 10"
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFF"
                className="group-hover:fill-current rotate-45 group-hover:text-[#E53B16]"
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
            <img
              className="h-[74vh] object-cover w-full z-0"
              src={SliderImg1}
            />
          </div>
          <div className="relative">
            <div className="bg-[#8e8f90cc] transition transition-color duration-500 hover:bg-[#8e8f90] absolute bottom-8 z-[10] start-10 end-10 px-[25px] pb-[25px] text-center flex jusitfy-center items-center flex-col">
              <h2 className="pt-[40px] text-white text-[22px] uppercase">
                The Classic Modern Terrace
              </h2>
              <p className="text-[#bbb4aa] text-base">
                Exclusive Residences for The Exclusive Street
              </p>
              <p className="text-[#bbb4aa] text-base">
                Pymble's Exclusive New Residences
              </p>
              <p className="text-[#bbb4aa] text-base">
                Expansive Living and Gardens
              </p>
              <p className="text-[#bbb4aa] text-base">
                Via Private Lifts and 24/7 Security
              </p>
            </div>
            <button
              onClick={() => {
                setLightboxShow(true);
                setLightboxSrc(SliderImg2);
              }}
              className="w-8 h-8 absolute end-5 top-5 group bg-[#E53B16] hover:bg-white cursor-pointer flex items-center justify-center z-50"
            >
              <svg
                width={10}
                height={10}
                viewBox="0 0 10 10"
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFF"
                className="group-hover:fill-current rotate-45 group-hover:text-[#E53B16]"
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
            <img
              className="h-[74vh] object-cover w-full z-0"
              src={SliderImg2}
            />
          </div>

          <div className="relative">
            <div className="bg-[#8e8f90cc] transition transition-color duration-500 hover:bg-[#8e8f90] absolute bottom-8 z-[10] start-10 end-10 px-[25px] pb-[25px] text-center flex jusitfy-center items-center flex-col">
              <h2 className="pt-[40px] text-white text-[22px] uppercase">
                The Classic Modern Terrace
              </h2>
              <p className="text-[#bbb4aa] text-base">
                Exclusive Residences for The Exclusive Street
              </p>
              <p className="text-[#bbb4aa] text-base">
                Pymble's Exclusive New Residences
              </p>
              <p className="text-[#bbb4aa] text-base">
                Expansive Living and Gardens
              </p>
              <p className="text-[#bbb4aa] text-base">
                Via Private Lifts and 24/7 Security
              </p>
            </div>
            <button
              onClick={() => {
                setLightboxShow(true);
                setLightboxSrc(SliderImg3);
              }}
              className="w-8 h-8 absolute end-5 top-5 group bg-[#E53B16] hover:bg-white cursor-pointer flex items-center justify-center z-50"
            >
              <svg
                width={10}
                height={10}
                viewBox="0 0 10 10"
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFF"
                className="group-hover:fill-current rotate-45 group-hover:text-[#E53B16]"
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
            <img
              className="h-[74vh] object-cover w-full z-0"
              src={SliderImg3}
            />
          </div>
        </Slider>

        <LightboxScreen
          isShow={lightboxShow}
          src={lightboxSrc}
          setLightboxShow={setLightboxShow}
        ></LightboxScreen>
      </div>
    </div>
  );
}

export default HeroSlider;
