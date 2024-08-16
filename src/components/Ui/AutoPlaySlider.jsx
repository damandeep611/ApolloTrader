import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import imageOne from "../../../src/logos/sLogo.svg";
import imagep from "../../../src/logos/pLogo.svg";
import imagem from "../../../src/logos/mLogo.svg";
import imagedd from "../../../src/logos/ddLogo.svg";
import imaged from "../../../src/logos/dLogo.svg";

function AutoPlaySlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={imageOne} alt="" />
        </div>
        <div>
          <img src={imagedd} alt="" />
        </div>
        <div>
          <img src={imaged} alt="" />
        </div>
        <div>
          <img src={imagem} alt="" />
        </div>
        <div>
          <img src={imagem} alt="" />
        </div>
        <div>
          <img src={imagep} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlaySlider;
