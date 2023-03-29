import React, { useState } from "react";
import Login from "../../Auth/Login";
import CartSidebar from "./CartSidebar";
import MenuIcon from "@mui/icons-material/Menu";
import TreeView from "@mui/lab/TreeView/TreeView";
import TreeItem from "@mui/lab/TreeItem/TreeItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import { TreeItem, TreeView } from "@mui/lab";
import { Link } from "react-router-dom";
import "../../Styles/Global.css";
import SearchModal from "./SearchModal";
import CartDrawer from "./CartDrawer";
export default function Navbar() {
  const [val, setVal] = useState("");
  const handleChange = (e) => {
    setVal(e.target.value);
  };
  const handleClickSearch = (e) => {
    console.log(val);
  };
  return (
    <div>
      <div >
        <header className="header clearfix">
          <div className="navbar-top bg-success pt-2 pb-2">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <a href="/" className="mb-0 text-white">
                    10% cashback for new users | Code:{" "}
                    <strong>
                      <span className="text-light">
                        MITSIANS <span className="mdi mdi-tag-faces" />
                      </span>
                    </strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <nav className="navbar navbar-light navbar-expand-lg bg-dark bg-faded osahan-menu">
            <div className="container-fluid">
            {/* <MenuIcon /> */}
              <Link className="navbar-brand" to="/">
                {" "}
                <img
                  style={{ width: "130px", height: "30px" }}
                  src="/img/logo.png"
                  alt="logo"
                />
              </Link>
              {/* <button
                className="navbar-toggler navbar-toggler-white"
                type="button"
                data-toggle="collapse"
                data-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button> */}
              <div className="navbar-collapse" id="navbarNavDropdown">
                <div className="navbar-nav mr-auto mt-2 mt-lg-0 margin-auto top-categories-search-main">
                  <SearchModal />
                </div>
                {/* <div className="navbar-nav mr-auto mt-2 mt-lg-0 margin-auto top-categories-search-main">
                  <div
                    onClick={() => console.log("clicked")}
                    style={{ border: "2px solid red" }}
                    className="top-categories-search"
                  >
                    <div className="input-group">
                      <input
                        className="form-control"
                        placeholder="Search products"
                        aria-label="Search products"
                        type="text"
                        name="searchtxt"
                        value={val}
                        onChange={(e) => handleChange(e)}
                      />
                      <span className="input-group-btn">
                        <button
                          className="btn btn-secondary"
                          type="submit"
                          onClick={handleClickSearch}
                        >
                          <i className="mdi mdi-file-find" /> Search
                        </button>
                      </span>
                    </div>
                  </div>
                </div> */}

                {/* <div style={{ border: "2px solid red" }}>
                  <TreeView
                    aria-label="multi-select"
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                    multiSelect
                    sx={{
                      color: "white",
                    }}
                  >
                    <TreeItem nodeId="5" label="Pages">
                      <TreeItem nodeId="6" label="Shop">
                        <TreeItem nodeId="7" label="Products">
                          <TreeItem nodeId="8" label="Men" />
                          <TreeItem nodeId="9" label="Women" />
                          <TreeItem nodeId="10" label="Combos" />
                        </TreeItem>
                      </TreeItem>
                      <TreeItem nodeId="11" label="About us" />
                      <TreeItem nodeId="12" label="Contact us" />
                      <TreeItem nodeId="13" label="Blog " />
                    </TreeItem>
                  </TreeView>
                </div> */}
                <div className="my-2 my-lg-0">
                  <ul className="list-inline main-nav-right">
                    <li className="list-inline-item">
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
                      <div
                        className="dropdown"
                        style={
                          //   "token" ? { display: "block" } : { display: "block" }
                          { display: "none" }
                        }
                      >
                        <button
                          className="btn btn-account dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-account-circle" /> user
                        </button>

                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a className="dropdown-item" href="/account/view">
                            <i className="uil uil-apps" />
                            Dashboard
                          </a>
                          <a className="dropdown-item" href="/account/profile">
                            <i
                              className="mdi mdi-account-outline"
                              aria-hidden="true"
                            ></i>
                            My Profile
                          </a>
                          <a className="dropdown-item" href="/account/wishlist">
                            <i
                              className="mdi mdi-heart-outline"
                              aria-hidden="true"
                            ></i>
                            Wish List
                          </a>
                          <a
                            className="dropdown-item"
                            href="/account/order/list"
                          >
                            <i
                              className="mdi mdi-format-list-bulleted"
                              aria-hidden="true"
                            ></i>{" "}
                            Orders List
                          </a>
                          <div class="dropdown-divider"></div>
                          <span
                            className="dropdown-item"
                            // onClick={this.handleLogout}
                          >
                            <i className="mdi mdi-lock" aria-hidden="true"></i>{" "}
                            Logout
                          </span>
                        </div>
                      </div>
                    </li>
                    <li  className="list-inline-item cart-btn">
                      <CartSidebar />
                      {/* <CartDrawer/> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </header>
        {/* login popup */}
        <Login />
      </div>
    </div>
  );
}
