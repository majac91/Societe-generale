import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = () => {
  var settings = {
    lazyLoad: true,
    accessibility: true,
    arrows: true,
    slidesToShow: 1,
    swipe: true,
    useCss: true,
    responsive: [
      {
        breakpoint: 481,
        settings: {
          centerPadding: "0",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          centerPadding: "0",
        },
      },
    ],
  };

  return (
    <header className="header">
      <Slider {...settings}>
        <div className="header__slide header__slide--slide1">
          <h3>caption</h3>
        </div>
        <div className="header__slide header__slide--slide2">
          <h3>2</h3>
        </div>
        <div className="header__slide header__slide--slide3">
          <h3>3</h3>
        </div>
      </Slider>
    </header>
  );
};

export default Header;
