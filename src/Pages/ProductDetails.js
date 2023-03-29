import React from "react";
import { Paper } from "@material-ui/core";
import Slider from "react-slick";
import BreadCrumb from "../Components/Products/Breadcrumb";
import SimilarProducts from "../Components/Products/SimilarProducts";
import Footer from "../Components/Common/Footer";
const data = [
  {
    img: "https://cdn.shopify.com/s/files/1/0426/1724/1760/products/A_60637895-0404-4feb-a1ab-cdcd4da5ecb8_400x.jpg?v=1666914336",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0426/1724/1760/products/A_60637895-0404-4feb-a1ab-cdcd4da5ecb8_400x.jpg?v=1666914336",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0426/1724/1760/products/A_60637895-0404-4feb-a1ab-cdcd4da5ecb8_400x.jpg?v=1666914336",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0426/1724/1760/products/A_60637895-0404-4feb-a1ab-cdcd4da5ecb8_400x.jpg?v=1666914336",
  },
];
const ProductDetails = () => {
  const settings = {
    customPaging: function (i) {
      return (
        <div id="sync1" className="owl-carousel">
          <div className="item">
            <img src={data[i].img} />
          </div>
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div >
        <section >
          <div  className="container">
            <div   className="row">
              <div className="col-md-12">
                <a href="#">
                  <strong>
                    <span className="mdi mdi-home" /> Home
                  </strong>
                </a>{" "}
                <span className="mdi mdi-chevron-right" />{" "}
                <a href="#">Products</a>{" "}
                <span className="mdi mdi-chevron-right" />{" "}
                <a href="#">Product name</a>
              </div>
            </div>
            
          </div>
        </section>

        <section  className="shop-single section-padding ">
          <div className="container">
            {/* {product ? ( */}
            <div className="row">
              <div className="col-md-6">
                <div className="shop-detail-left">
                  <Paper className="shop-detail-slider">
                    <Slider {...settings}>
                      {data
                        ? data.map((r, index) => {
                            return (
                              <div key={index}>
                                <img
                                  alt
                                  src={r.img}
                                  className="img-fluid img-center"
                                />
                              </div>
                            );
                          })
                        : "Please Upload Image"}
                    </Slider>
                  </Paper>
                </div>
              </div>
              <div className="col-md-6">
                <div className="shop-detail-right">
                  <span className="badge badge-success">50 % OFF</span>
                  <h2>{"product.name"}</h2>
                  <h6>
                    <strong>
                      <span className="mdi mdi-approval" /> Available in
                    </strong>{" "}
                    - 5
                  </h6>
                  <div className="pdp-product__old-price">
                    <span className="space__right--2-unit">Product MRP:</span>
                    <span className="regular-price">&#x20B9;{"500"}</span>
                  </div>

                  <div className="pdp-product__new-price">
                    <span className="space__right--2-unit">Selling price:</span>
                    <span className="pdp-product__price--new">
                      &#x20B9;{"1000"}
                    </span>
                    <div className="pdp-product__tax-disclaimer">
                      (Inclusive of all taxes)
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn btn-secondary btn-lg"
                    // onClick={() => this.props.addToCart(product)}
                  >
                    <i className="mdi mdi-cart-outline" /> Add To Cart
                  </button>
                  <h6 className="mb-3 mt-4">Why shop from Groci?</h6>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="feature-box">
                        <i className="mdi mdi-truck-fast" />
                        <h6 className="text-info">
                          <span>Easy Returns &amp; Refunds</span>
                        </h6>
                        <p>
                          Return products at doorstep and get refund in seconds.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="feature-box">
                        <i className="mdi mdi-basket" />
                        <h6 className="text-info">Lowest price guaranteed</h6>
                        <p>
                          Get difference refunded if you find it cheaper
                          anywhere else.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="pdpt-bg">
                  <div className="pdpt-title">
                    <h4>Product Details</h4>
                  </div>
                  <div className="pdpt-body scrollstyle_4">
                    <div className="pdct-dts-1 short-desc">
                      {/* {parse(product.desc)}  */}
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Delectus, a impedit quod natus nemo maiores? A sed
                      dignissimos quos velit inventore numquam fugit earum
                      corporis libero id quidem, odio possimus, illum corrupti.
                      Nulla tenetur ratione ab sit soluta neque magni delectus,
                      a, quia praesentium nostrum! Harum, accusantium dolorem.
                      Sint error impedit, modi, alias animi earum sapiente omnis
                      laborum odit totam quae velit mollitia doloribus vero
                      voluptate perspiciatis itaque repudiandae ipsam harum
                      eaque. Eos quo suscipit rerum neque quaerat voluptas et
                      voluptatem eius saepe. Exercitationem repudiandae rerum a,
                      cum illum quidem vel est quam, modi perspiciatis,
                      reprehenderit facilis blanditiis dolorem dicta? Aspernatur
                      molestias, iste in excepturi, blanditiis quae soluta
                      nesciunt nostrum ea voluptates iusto, sunt vitae ducimus
                      expedita officia repudiandae necessitatibus provident
                      itaque laboriosam qui perferendis libero minima. Dolor
                      deleniti animi est sunt. Eveniet, quae aspernatur? Culpa
                      deserunt recusandae, non rem voluptate quae numquam
                      possimus natus, omnis quo animi! Magnam, nisi.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <SimilarProducts />
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
