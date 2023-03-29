import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Products = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
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
    <div>
      <div>
        {/* New Item slider */}
        <section className="product-items-slider section-padding">
          <div className="container" id="header-category-bk">
            <div className="section-header">
              <span>For You</span>
              <h5 className="heading-design-h5 ">
                Top Products
                <span
                  style={{ marginLeft: "10px" }}
                  className="badge badge-primary"
                >
                  20% OFF
                </span>
                <Link to="/products" className="float-right text-secondary">
                  View All
                </Link>
              </h5>
            </div>

            <Slider {...settings}>
              <div className="item">
                <div className="product">
                  <a href="single.html">
                    <div className="product-header">
                      <span className="badge badge-success">50% OFF</span>
                      <img
                        className="img-fluid"
                        src="img/product/product1.webp"
                        alt="product"
                      />
                      <span className="veg text-success mdi mdi-circle" />
                    </div>
                    <div className="product-body">
                      <h5>Product Title Here</h5>
                      <h6>
                        <strong>
                          <span className="mdi mdi-approval" /> Available in
                        </strong>{" "}
                        - 500 gm
                      </h6>
                    </div>
                    <div className="product-footer">
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm float-right"
                      >
                        <i className="mdi mdi-cart-outline" /> Add To Cart
                      </button>
                      <p className="offer-price mb-0">
                        $450.99 <i className="mdi mdi-tag-outline" />
                        <br />
                        <span className="regular-price">$800.99</span>
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="product">
                  <a href="single.html">
                    <div className="product-header">
                      <span className="badge badge-success">50% OFF</span>
                      <img
                        className="img-fluid"
                        src="img/product/product1.webp"
                        alt="product"
                      />
                      <span className="non-veg text-danger mdi mdi-circle" />
                    </div>
                    <div className="product-body">
                      <h5>Product Title Here</h5>
                      <h6>
                        <strong>
                          <span className="mdi mdi-approval" /> Available in
                        </strong>{" "}
                        - 500 gm
                      </h6>
                    </div>
                    <div className="product-footer">
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm float-right"
                      >
                        <i className="mdi mdi-cart-outline" /> Add To Cart
                      </button>
                      <p className="offer-price mb-0">
                        $450.99 <i className="mdi mdi-tag-outline" />
                        <br />
                        <span className="regular-price">$800.99</span>
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="product">
                  <a href="single.html">
                    <div className="product-header">
                      <span className="badge badge-success">50% OFF</span>
                      <img
                        className="img-fluid"
                        src="img/product/product1.webp"
                        alt="product"
                      />
                      <span className="non-veg text-danger mdi mdi-circle" />
                    </div>
                    <div className="product-body">
                      <h5>Product Title Here</h5>
                      <h6>
                        <strong>
                          <span className="mdi mdi-approval" /> Available in
                        </strong>{" "}
                        - 500 gm
                      </h6>
                    </div>
                    <div className="product-footer">
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm float-right"
                      >
                        <i className="mdi mdi-cart-outline" /> Add To Cart
                      </button>
                      <p className="offer-price mb-0">
                        $450.99 <i className="mdi mdi-tag-outline" />
                        <br />
                        <span className="regular-price">$800.99</span>
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="product">
                  <a href="single.html">
                    <div className="product-header">
                      <span className="badge badge-success">50% OFF</span>
                      <img
                        className="img-fluid"
                        src="img/product/product1.webp"
                        alt="product"
                      />
                      <span className="veg text-success mdi mdi-circle" />
                    </div>
                    <div className="product-body">
                      <h5>Product Title Here</h5>
                      <h6>
                        <strong>
                          <span className="mdi mdi-approval" /> Available in
                        </strong>{" "}
                        - 500 gm
                      </h6>
                    </div>
                    <div className="product-footer">
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm float-right"
                      >
                        <i className="mdi mdi-cart-outline" /> Add To Cart
                      </button>
                      <p className="offer-price mb-0">
                        $450.99 <i className="mdi mdi-tag-outline" />
                        <br />
                        <span className="regular-price">$800.99</span>
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="product">
                  <a href="/">
                    <div className="product-header">
                      <span className="badge badge-success">50% OFF</span>
                      <img
                        className="img-fluid"
                        src="img/product/product1.webp"
                        alt="product"
                      />
                      <span className="veg text-success mdi mdi-circle" />
                    </div>
                    <div className="product-body">
                      <h5>Product Title Here</h5>
                      <h6>
                        <strong>
                          <span className="mdi mdi-approval" /> Available in
                        </strong>{" "}
                        - 500 gm
                      </h6>
                    </div>
                    <div className="product-footer">
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm float-right"
                      >
                        <i className="mdi mdi-cart-outline" /> Add To Cart
                      </button>
                      <p className="offer-price mb-0">
                        $450.99 <i className="mdi mdi-tag-outline" />
                        <br />
                        <span className="regular-price">$800.99</span>
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="product">
                  <a href="single.html">
                    <div className="product-header">
                      <span className="badge badge-success">50% OFF</span>
                      <img
                        className="img-fluid"
                        src="img/product/product1.webp"
                        alt="product"
                      />
                      <span className="veg text-success mdi mdi-circle" />
                    </div>
                    <div className="product-body">
                      <h5>Product Title Here</h5>
                      <h6>
                        <strong>
                          <span className="mdi mdi-approval" /> Available in
                        </strong>{" "}
                        - 500 gm
                      </h6>
                    </div>
                    <div className="product-footer">
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm float-right"
                      >
                        <i className="mdi mdi-cart-outline" /> Add To Cart
                      </button>
                      <p className="offer-price mb-0">
                        $450.99 <i className="mdi mdi-tag-outline" />
                        <br />
                        <span className="regular-price">$800.99</span>
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </Slider>
          </div>
        </section>
        {/* End New item slider */}
      </div>
    </div>
  );
};

export default Products;
