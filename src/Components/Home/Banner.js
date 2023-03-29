import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Styles/Global.css";
const Banner = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div  >
      <Slider {...settings}>
        <div  className="owl-item">
          <img src="img/banners/banner1.webp" alt="supermarket" />
        </div>
        <div className="owl-item">
          <img src="img/banners/banner2.webp" alt="supermarket" />
        </div>
        <div className="owl-item">
          <img src="img/banners/banner3.webp" alt="supermarket" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
