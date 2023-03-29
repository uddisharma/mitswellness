import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Styles/Availability.css";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";
const data = [
  {
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0426/1724/1760/files/ZINGAVITA_LABLE656_fe8110db-9ca9-4ee8-a0ed-aa0862ced084_100x.png?v=1614291068",
  },
  {
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0426/1724/1760/files/ZINGAVITA_LABLE656_fe8110db-9ca9-4ee8-a0ed-aa0862ced084_100x.png?v=1614291068",
  },
  {
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0426/1724/1760/files/ZINGAVITA_LABLE656_fe8110db-9ca9-4ee8-a0ed-aa0862ced084_100x.png?v=1614291068",
  },
  {
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0426/1724/1760/files/ZINGAVITA_LABLE656_fe8110db-9ca9-4ee8-a0ed-aa0862ced084_100x.png?v=1614291068",
  },
  {
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0426/1724/1760/files/ZINGAVITA_LABLE656_fe8110db-9ca9-4ee8-a0ed-aa0862ced084_100x.png?v=1614291068",
  },
  {
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0426/1724/1760/files/ZINGAVITA_LABLE656_fe8110db-9ca9-4ee8-a0ed-aa0862ced084_100x.png?v=1614291068",
  },
  {
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0426/1724/1760/files/ZINGAVITA_LABLE656_fe8110db-9ca9-4ee8-a0ed-aa0862ced084_100x.png?v=1614291068",
  },
  {
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0426/1724/1760/files/ZINGAVITA_LABLE656_fe8110db-9ca9-4ee8-a0ed-aa0862ced084_100x.png?v=1614291068",
  },
  {
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0426/1724/1760/files/ZINGAVITA_LABLE656_fe8110db-9ca9-4ee8-a0ed-aa0862ced084_100x.png?v=1614291068",
  },
  {
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0426/1724/1760/files/ZINGAVITA_LABLE656_fe8110db-9ca9-4ee8-a0ed-aa0862ced084_100x.png?v=1614291068",
  },
  {
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0426/1724/1760/files/ZINGAVITA_LABLE656_fe8110db-9ca9-4ee8-a0ed-aa0862ced084_100x.png?v=1614291068",
  },
  {
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0426/1724/1760/files/ZINGAVITA_LABLE656_fe8110db-9ca9-4ee8-a0ed-aa0862ced084_100x.png?v=1614291068",
  },
];
let slidesToShow = 5;
// const PreviousBtn = (props) => {
//   // console.log(props);
//   const { className, onClick, currentSlide } = props;
//   return (
//     <>
//       {currentSlide !== 0 && (
//         <div className={className} onClick={onClick}>
//           <AiFillCaretLeft style={{ color: "blue", fontSize: "30px" }} />
//         </div>
//       )}
//     </>
//   );
// };
// const NextBtn = (props) => {
//   const { className, onClick, slideCount, currentSlide } = props;
//   // console.log(props);

//   return (
//     <>
//       {currentSlide !== slideCount - slidesToShow && (
//         <div className={className} onClick={onClick}>
//           <AiFillCaretRight style={{ color: "blue", fontSize: "30px" }} />
//         </div>
//       )}
//     </>
//   );
// };

const carouselProperties = {
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 500,
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
  ],
};

const Availability = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  if (width <= 426) {
    slidesToShow = 1;
  } else if (width > 426 && width <= 769) {
    slidesToShow = 3;
  } else if (width > 769 && width <= 1025) {
    slidesToShow = 4;
  } else {
    slidesToShow = 5;
  }

  return (
    <div style={{ marginTop: "30px" }} className="container">
      <div className="col-md-12">
        <div className="main-title-tt">
          <div className="main-title-left">
            <span>AVAILABLITY</span>
            <h2>We Are Available at</h2>
          </div>
        </div>
      </div>
      <Slider {...carouselProperties}>
        {data.map((item) => (
          <Card item={item.imgUrl} />
        ))}
      </Slider>
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <div
      key={Math.random + Math.random}
      className="cards"
      style={{ textAlign: "center" }}
    >
      <img
        className="multi__image"
        src={item}
        alt=""
        style={{
          width: "100px",
          height: "40px",
          objectFit: "contain",
          marginBottom: "10px",
          // border: '2px solid red'
        }}
      />
    </div>
  );
};

export default Availability;
