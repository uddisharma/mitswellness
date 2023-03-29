import React, { useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Delivery from "./Delivery";
import Login from "../Auth/Login";
const Checkout = () => {
  const paymentmethod = "cash";
  const [isLoaded, setIsLoaded] = useState(true);
  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };
  const makePayment = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      //   toast({
      //     title: "Transaction failed",
      //     description: "Transaction failed",
      //     status: "failure",
      //     duration: 3000,
      //     isClosable: true,
      //   });
      return;
    }
    const options = {
      key: "rzp_test_1ZKrAXvsXDbLn3",
      currency: "INR",
      amount: amount * 100,
      name: "MITS Spectra",
      description: "thanks for purchase",
      image:
        "https://res.cloudinary.com/dvuphar2o/image/upload/v1679116392/ak5a3rzzdsls1wvzg1qb.png",
      handler: function (res) {
        // alert(res.razorpay_payment_id);
        // alert("Payment Successful");
        localStorage.setItem("razorpay_payment_id", res.razorpay_payment_id);
        // toast({
        //   title: "Payment Successfull Successfully.",
        //   description: "Now your order is placed",
        //   status: "success",
        //   duration: 3000,
        //   isClosable: true,
        // });
        // <Navigate to="/" />;
      },
      prefill: {
        name: "Deepak",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  return (
    <div>
      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <a href="/">
                <strong>
                  <span class="mdi mdi-home"></span> Home
                </strong>
              </a>{" "}
              <span class="mdi mdi-chevron-right"></span> <a>Checkout</a>
            </div>
          </div>
        </div>
      </section>

      <section className="checkout-page section-padding">
        <div className="container">
          {isLoaded ? (
            <div className="progress-bar-bk">
              <CircularProgress color="secondary" />
            </div>
          ) : (
            ""
          )}
          <div className="row">
            <div className="col-md-8">
              <div className="checkout-step">
                <div className="accordion" id="accordionExample">
                  <div className="card checkout-step-one">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link checkout-login-bk"
                          disabled
                        >
                          <span className="number">1</span> Login{" "}
                          <span className="mdi mdi-checkbox-marked-circle-outline"></span>
                        </button>
                        <div className="_2jDL7w">
                          <div>
                            <span className="dNZmcB">{"Deepak Sharma"} </span>
                            <span className="_3MeY5j">
                              {"uddibhardwaj08@gmail.com"}
                            </span>
                          </div>
                        </div>
                      </h5>
                    </div>

                    {/* try */}
                    <div className="card-header" id="headingFour">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          <span className="number">1</span> Login
                          <span className="mdi mdi-checkbox-marked-circle-outline"></span>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse"
                      aria-labelledby="headingFour"
                      data-parent="#accordionExample"
                    >
                      <a
                        data-target="#bd-example-modal"
                        data-toggle="modal"
                        className="btn btn-link"
                        style={
                          //   token ? { display: "none" } : { display: "block" }
                          { display: "block" }
                        }
                      >
                        <i className="mdi mdi-account-circle" /> Login/Sign Up
                      </a>
                    </div>
                  </div>
                  <div className="card checkout-step-two">
                    <div className="card-header" id="headingTwo">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <span className="number">2</span> Delivery Address
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <Delivery />
                      {/* <Deliverydetails
                        onSelectDeliveryAddress={this.handleDeliveryAddress}
                      /> */}
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <span className="number">3</span> Payment
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                    >
                      <div className="checkout-step-body">
                        <div className="payment_method-checkout">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="rpt100">
                                <ul className="radio--group-inline-container_1">
                                  <li>
                                    <div className="radio-item_1">
                                      <input
                                        id="cashondelivery1"
                                        value="cash"
                                        name="paymentmethod"
                                        type="radio"
                                        // onChange={this.handleRadioChange}
                                      />
                                      <label
                                        htmlFor="cashondelivery1"
                                        className="radio-label_1"
                                      >
                                        Cash on Delivery
                                      </label>
                                    </div>
                                  </li>
                                  <li>
                                    <div
                                      className="radio-item_1"
                                      onClick={() => makePayment(1000)}
                                      //   onClick={this.handlePaymentSystem}
                                    >
                                      {/* <input value="card" name="paymentmethod" type="button" onClick={this.handleRadioChange} /> */}
                                      <label
                                        htmlFor="card1"
                                        className="radio-label_1"
                                      >
                                        Pay With Card
                                      </label>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              {paymentmethod === "cash" ? (
                                <button className="next-btn16 hover-btn">
                                  Confirm Order
                                </button>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <h5 className="card-header">
                  My Cart{" "}
                  <span className="text-secondary float-right">
                    ({"1"} item)
                  </span>
                </h5>
                {/* {
                                        cartItems.map((row, index) => ( */}
                <div
                  className="card-body pt-0 pr-0 pl-0 pb-0"
                  key={Math.random()}
                >
                  <div className="cart-list-product">
                    <img
                      className="img-fluid"
                      src="https://chicnutrix-images.s3.us-east-2.amazonaws.com/images/product-images/chicnutrix-glow-skin-radiance-glow-1-2_1679914217.png"
                      alt="cart"
                    />
                    <span className="badge badge-success">{"10"}% OFF</span>
                    <h5>{"mits"}</h5>
                    <h6>
                      <strong>
                        <span className="mdi mdi-approval" /> Available in
                      </strong>{" "}
                      - {"500"} gm
                    </h6>
                    <p className="offer-price mb-0">
                      &#x20B9;{"2"} <i className="mdi mdi-tag-outline" />{" "}
                      <span className="regular-price">&#x20B9;{"200"}</span>
                    </p>
                  </div>
                </div>
                {/* ))
                                    } */}
                <div className="total-checkout-group">
                  <div className="cart-total-dil">
                    <h4>Sub Total</h4>
                    <span>&#x20B9;{"900"}</span>
                  </div>
                  <div className="cart-total-dil pt-3">
                    <h4>Delivery Charges</h4>
                    <span>&#x20B9;{"60"}</span>
                  </div>
                </div>
                <div className="cart-total-dil saving-total ">
                  <h4>Total Saving</h4>
                  <span>&#x20B9;{"20%"}</span>
                </div>
                <div className="main-total-cart">
                  <h2>Total</h2>
                  <span>&#x20B9;{"1000"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Login />
    </div>
  );
};

export default Checkout;
