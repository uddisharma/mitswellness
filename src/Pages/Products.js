import React from "react";
import ProductCards from "../Components/Products/ProductCards";
import "../Styles/Global.css";
import "../Styles/Product.css";
import { Pagination } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";
import FormControl from "@mui/material/FormControl";
import { RxHamburgerMenu } from "react-icons/rx";
import Footer from "../Components/Common/Footer";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { Button } from "@mui/material";
import BreadCrumb from "../Components/Products/Breadcrumb";
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
  {
    img: "https://cdn.shopify.com/s/files/1/0426/1724/1760/products/A_60637895-0404-4feb-a1ab-cdcd4da5ecb8_400x.jpg?v=1666914336",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0426/1724/1760/products/A_60637895-0404-4feb-a1ab-cdcd4da5ecb8_400x.jpg?v=1666914336",
  },
];
const Products = () => {
  const [age, setAge] = React.useState("");
  const { collapseSidebar } = useProSidebar();

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <div className="banner" style={{ paddingBottom: "100px" }}>
        <img
          src="https://cdn.shopify.com/s/files/1/0426/1724/1760/files/collection_page_banner_4.jpg?v=1667398765"
          alt="not found"
        />
        <br />
        <div style={{ display: "flex" }}>
          <div style={{ paddingTop: "50px", backgroundColor: "#ddf1ff" }}>
            {/* <ProductSidebar /> */}
            <div>
              <div>
                <Button
                  onClick={() => collapseSidebar()}
                  // variant="contained"
                  style={{
                    height: "30px",
                    width: "30px",
                    borderRadius: "10px",
                  }}
                >
                  <RxHamburgerMenu />
                </Button>

                {/* <BreadCrumb /> */}
              </div>
              <Sidebar
                style={{ paddingTop: "50px", backgroundColor: "#ddf1ff" }}
              >
                <Menu>
                  <SubMenu
                    label="Product Categories"
                    style={{ backgroundColor: "#addbff" }}
                  >
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                  </SubMenu>
                  <SubMenu
                    label="Flavours"
                    style={{ backgroundColor: "#addbff" }}
                  >
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                  </SubMenu>
                  <SubMenu label="Goal" style={{ backgroundColor: "#addbff" }}>
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                  </SubMenu>
                  <SubMenu label="Price" style={{ backgroundColor: "#addbff" }}>
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                    <MenuItem> Pie charts </MenuItem>
                  </SubMenu>
                </Menu>
              </Sidebar>
            </div>
          </div>

          <div className="container">
            <div
              className="maincont"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <BreadCrumb
                previous={"Products"}
                previouslink={"products"}
                current={""}
              />
              <div>
                <h1
                  className="heading"
                  style={{
                    color: "gray",
                    marginLeft: "30px",
                    margin: "50px",
                    color: "#bd0b35",
                  }}
                >
                  All Products
                </h1>
              </div>

              <div>
                <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Sort By
                  </InputLabel>
                  <NativeSelect
                    defaultValue={"None"}
                    inputProps={{
                      name: "age",
                      id: "uncontrolled-native",
                    }}
                  >
                    <option value={"None"}>None</option>
                    <option value={"-rate"}>Price : High to Low</option>
                    <option value={"rate"}>Price : Low to High</option>
                    <option value={"-name"}>Name : A to Z</option>
                    <option value={"name"}>Name : Z to A</option>
                  </NativeSelect>
                </FormControl>
              </div>
            </div>
            <div className="grids">
              {data.map((e) => (
                <ProductCards {...e} />
              ))}
            </div>
            <div>
              <Pagination
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "40px",
                  paddingBottom: "40px",
                }}
                count={10}
                variant="outlined"
                shape="rounded"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Products;
