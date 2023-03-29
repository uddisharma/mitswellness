import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import { AiOutlineHeart } from "react-icons/ai";
import { Tooltip } from "@mui/material";

import "../../Styles/Product.css";
const ProductCards = ({ img }) => {
  return (
    <div className="card">
      {/* {data.map((e) => ( */}
      <Card variant="outlined" sx={{ width: 320 }}>
        <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
          Yosemite National Park
        </Typography>
        <Typography level="body2">April 24 to May 02, 2021</Typography>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
        >
          <Tooltip title="wishlist" arrow>
            <IconButton>
              <AiOutlineHeart />
            </IconButton>
            {/* </Button> */}
          </Tooltip>
        </IconButton>
        <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
          <img
            src={img}
            srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <Box sx={{ display: "flex" }}>
          <div>
            <Typography level="body3">Total price:</Typography>
            <Typography fontSize="lg" fontWeight="lg">
              $2,900
            </Typography>
          </div>
          <Button
            variant="solid"
            size="sm"
            color="#ddf1ff"
            aria-label="Explore Bahamas Islands"
            sx={{ ml: "auto", fontWeight: 600, backgroundColor: "#ddf1ff" }}
          >
            Buy Now
          </Button>
        </Box>
      </Card>
      {/* ))} */}
    </div>
  );
};

export default ProductCards;
