import React from "react";
import Slider from "react-slick";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { FcReading } from "react-icons/fc";
const blogs = [
  {
    name: "Blog1",
  },
  {
    name: "Blog1",
  },
  {
    name: "Blog1",
  },
  {
    name: "Blog1",
  },
  {
    name: "Blog1",
  },
  {
    name: "Blog1",
  },
  {
    name: "Blog1",
  },
];
const Blogs = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div style={{ paddingTop: "30px" }} className="container">
      <div className="col-md-12">
        <div className="main-title-tt">
          <div className="main-title-left">
            <span>BLOGS</span>
            <h2>Explore Our Blogs</h2>
          </div>
        </div>
      </div>
      <Slider {...settings}>
        {blogs.map((e) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea style={{ margin: "10px" }}>
              <CardMedia
                component="img"
                height="140"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {e.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Read More
              </Button>
            </CardActions>
          </Card>
        ))}
      </Slider>
      <div
        style={{
          marginTop: "30px",
          textAlign: "center",
        }}
      >
        <Button
          style={{ color: "white", height: "50px", fontWeight: 600 }}
          className="btn btn-secondary"
          endIcon={<FcReading />}
        >
          Read all Articles
        </Button>
      </div>
    </div>
  );
};

export default Blogs;
