import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import { SlPlus, SlMinus } from "react-icons/sl";
import Typography from "@mui/material/Typography";
import { MdRemoveShoppingCart } from "react-icons/md";
const CartSidebar = () => {
  const theme = useTheme();
  return (
    <div>
      <div>
        <span data-toggle="offcanvas" className="btn btn-link border-none bs-canvas-close open">
          <i className="mdi mdi-cart" /> My Cart{" "}
          <small className="cart-value">5</small>
        </span>
        <div className="cart-sidebar">
          <div className="bs-canvas-header side-cart-header p-3 ">
            <button
              className="btn btn-secondary btn-lg btn-block text-left"
              type="button"
            >
              <span className="float-center">
                <i className="mdi mdi-cart-outline" /> My Cart 2 Items
              </span>
            </button>

            <button
              type="button"
              className="bs-canvas-close close"
              data-toggle="offcanvas"
            >
              <i className="mdi mdi-close"></i>
            </button>
          </div>
          <div className="cart-sidebar-body">
            <Card
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                // alignItems: "center",

                marginTop: "15px",
                height: "fit-content",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",

                  // height: "50px",
                }}
              >
                {/* <CardContent sx={{ flex: "1 0 auto" }}> */}
                {/* <Typography component="div" variant="h6">
                    Product Name
                  </Typography> */}
                <p>
                  product{" "}
                  <strong className="float-right text-danger">
                    &#x20B9;250
                  </strong>
                </p>
                <p>
                  Total Price{" "}
                  <strong className="float-right text-danger">
                    &#x20B9;1000
                  </strong>
                </p>
                {/* <h6>Product Name</h6>
                <h5> ₹ 1000</h5> */}
                {/* <Typography component="div" variant="h6">
                    Price : ₹ 1000
                  </Typography> */}
                {/* </CardContent> */}

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <IconButton aria-label="decrease">
                    <SlMinus />
                    {/* {theme.direction === "rtl" ? <SlMinus /> : <SlMinus />} */}
                  </IconButton>
                  {/* <p>1</p> */}
                  {/* <IconButton aria-label="play/pause"> */}

                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    1
                  </Typography>
                  {/* </IconButton> */}
                  <IconButton aria-label="increase">
                    <SlPlus />
                    {/* {theme.direction === "rtl" ? <SlPlus /> : <SlPlus />} */}
                  </IconButton>
                  <IconButton aria-label="remove from cart">
                    <MdRemoveShoppingCart />
                  </IconButton>
                </Box>
              </Box>
              <CardMedia
                component="img"
                sx={{
                  width: 100,
                  height: 100,
                }}
                image="https://mui.com/static/images/cards/live-from-space.jpg"
                alt="Live from space album cover"
              />
            </Card>
          </div>
          <div className="cart-sidebar-footer">
            <div className="cart-store-details">
              <p>
                Sub Total <strong className="float-right">&#x20B9;</strong>
              </p>
              <p>
                Delivery Charges{" "}
                <strong className="float-right text-danger">
                  + &#x20B9;60
                </strong>
              </p>
              <h6>
                Your total savings{" "}
                <strong className="float-right text-danger">
                  &#x20B9;50 (12.31%)
                </strong>
              </h6>
            </div>
            <a href="/checkout">
              <button
                className="btn btn-secondary btn-lg btn-block text-left"
                type="button"
              >
                <span className="float-left">
                  <i className="mdi mdi-cart-outline" /> Proceed to Checkout{" "}
                </span>
                <span className="float-right">
                  <strong>
                    &#x20B9; 1060
                    {/* {cartItems.reduce((sum, i) => (
                                sum += i.qty * i.netPrice
                            ), 0)} */}
                  </strong>{" "}
                  <span className="mdi mdi-chevron-right" />
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
