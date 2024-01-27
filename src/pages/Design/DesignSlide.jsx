import React from "react";
import Slider from "react-slick";
function DesignSlide(props) {
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

  return (
    <div className="w-full h-full full_screen_slider">
      <Slider {...settings} className="w-full h-full">
        <div className="h-full w-full">
          <div className="w-[420px] h-full bg-primary p-[50px] text-white flex flex-col  justify-center relative">
            <h3 className="uppercase mb-3 text-base">MODERN MASTERS</h3>
            <p className="text-sm">
              111 West 57th Street will be composed of the original landmarked
              Steinway Hall building designed in 1925 by Warren and Wetmore and
              a new tower addition designed by SHoP Architects on the adjacent
              site, with interior design by Studio Sofield. The Result:
              A&nbsp;new&nbsp;landmark on the Manhattan skyline.
            </p>
            <button className="arrow-right"></button>
          </div>
        </div>
        <div className="h-full w-full">
          <div className="w-[420px] h-full bg-primary p-[50px] text-white flex flex-col  justify-center relative">
            <h3 className="uppercase mb-3 text-base">MODERN MASTERS</h3>
            <p className="text-sm">
              111 West 57th Street will be composed of the original landmarked
              Steinway Hall building designed in 1925 by Warren and Wetmore and
              a new tower addition designed by SHoP Architects on the adjacent
              site, with interior design by Studio Sofield. The Result:
              A&nbsp;new&nbsp;landmark on the Manhattan skyline.
            </p>
            <button className="arrow-right"></button>
          </div>
        </div>
        <div className="h-full w-full">
          <div className="w-[420px] h-full bg-primary p-[50px] text-white flex flex-col  justify-center relative">
            <h3 className="uppercase mb-3 text-base">MODERN MASTERS</h3>
            <p className="text-sm">
              111 West 57th Street will be composed of the original landmarked
              Steinway Hall building designed in 1925 by Warren and Wetmore and
              a new tower addition designed by SHoP Architects on the adjacent
              site, with interior design by Studio Sofield. The Result:
              A&nbsp;new&nbsp;landmark on the Manhattan skyline.
            </p>
            <button className="arrow-right"></button>
          </div>
        </div>
        <div className="h-full w-full">
          <div className="w-[420px] h-full bg-primary p-[50px] text-white flex flex-col  justify-center relative">
            <h3 className="uppercase mb-3 text-base">MODERN MASTERS</h3>
            <p className="text-sm">
              111 West 57th Street will be composed of the original landmarked
              Steinway Hall building designed in 1925 by Warren and Wetmore and
              a new tower addition designed by SHoP Architects on the adjacent
              site, with interior design by Studio Sofield. The Result:
              A&nbsp;new&nbsp;landmark on the Manhattan skyline.
            </p>
            <button className="arrow-right"></button>
          </div>
        </div>
        <div className="h-full w-full">
          <div className="w-[420px] h-full bg-primary p-[50px] text-white flex flex-col  justify-center relative">
            <h3 className="uppercase mb-3 text-base">MODERN MASTERS</h3>
            <p className="text-sm">
              111 West 57th Street will be composed of the original landmarked
              Steinway Hall building designed in 1925 by Warren and Wetmore and
              a new tower addition designed by SHoP Architects on the adjacent
              site, with interior design by Studio Sofield. The Result:
              A&nbsp;new&nbsp;landmark on the Manhattan skyline.
            </p>
            <button className="arrow-right"></button>
          </div>
        </div>
        <div className="h-full w-full">
          <div className="w-[420px] h-full bg-primary p-[50px] text-white flex flex-col  justify-center relative">
            <h3 className="uppercase mb-3 text-base">MODERN MASTERS</h3>
            <p className="text-sm">
              111 West 57th Street will be composed of the original landmarked
              Steinway Hall building designed in 1925 by Warren and Wetmore and
              a new tower addition designed by SHoP Architects on the adjacent
              site, with interior design by Studio Sofield. The Result:
              A&nbsp;new&nbsp;landmark on the Manhattan skyline.
            </p>
            <button className="arrow-right"></button>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default DesignSlide;
