import React from "react";
import Slider from "react-slick";
const SimilarProducts = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
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
              <h5 className="heading-design-h5">
                Frequently Bought Together{" "}
                {/* <span className="badge badge-primary">20% OFF</span> */}
                <a className="float-right text-secondary" href="shop.html">
                  View All
                </a>
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
                        src="https://cdn.shopify.com/s/files/1/0426/1724/1760/products/1_9_08c95ed7-4fa7-4a1f-a324-f8edfb7e74ab_400x.jpg?v=1674452983"
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
                        src="https://cdn.shopify.com/s/files/1/0426/1724/1760/products/1_9_08c95ed7-4fa7-4a1f-a324-f8edfb7e74ab_400x.jpg?v=1674452983"
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
                        src="https://cdn.shopify.com/s/files/1/0426/1724/1760/products/1_9_08c95ed7-4fa7-4a1f-a324-f8edfb7e74ab_400x.jpg?v=1674452983"
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
                        src="https://cdn.shopify.com/s/files/1/0426/1724/1760/products/1_9_08c95ed7-4fa7-4a1f-a324-f8edfb7e74ab_400x.jpg?v=1674452983"
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
                        src="https://cdn.shopify.com/s/files/1/0426/1724/1760/products/1_9_08c95ed7-4fa7-4a1f-a324-f8edfb7e74ab_400x.jpg?v=1674452983"
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
                        src="https://cdn.shopify.com/s/files/1/0426/1724/1760/products/1_9_08c95ed7-4fa7-4a1f-a324-f8edfb7e74ab_400x.jpg?v=1674452983"
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

        {/* More like product */}
        <section className="product-items-slider section-padding">
          <div className="container" id="header-category-bk">
            <div className="section-header">
              <span>For You</span>
              <h5 className="heading-design-h5">
                Most Popular{" "}
                {/* <span className="badge badge-primary">20% OFF</span> */}
                <a className="float-right text-secondary" href="shop.html">
                  View All
                </a>
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
                        src="https://assets.hyugalife.com/catalog/product/cache/556772d0715f98efd13e4e8e0673b819/h/s/hsnj47l0_1_tqfgx9mriklnxmrv.jpg?compress=true&q=75&format=webp"
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
                        src="https://assets.hyugalife.com/catalog/product/cache/556772d0715f98efd13e4e8e0673b819/h/s/hsnj47l0_1_tqfgx9mriklnxmrv.jpg?compress=true&q=75&format=webp"
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
                        src="https://assets.hyugalife.com/catalog/product/cache/556772d0715f98efd13e4e8e0673b819/h/s/hsnj47l0_1_tqfgx9mriklnxmrv.jpg?compress=true&q=75&format=webp"
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
                        src="https://assets.hyugalife.com/catalog/product/cache/556772d0715f98efd13e4e8e0673b819/h/s/hsnj47l0_1_tqfgx9mriklnxmrv.jpg?compress=true&q=75&format=webp"
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
                        src="https://assets.hyugalife.com/catalog/product/cache/556772d0715f98efd13e4e8e0673b819/h/s/hsnj47l0_1_tqfgx9mriklnxmrv.jpg?compress=true&q=75&format=webp"
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
                        src="https://assets.hyugalife.com/catalog/product/cache/556772d0715f98efd13e4e8e0673b819/h/s/hsnj47l0_1_tqfgx9mriklnxmrv.jpg?compress=true&q=75&format=webp"
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

export default SimilarProducts;
