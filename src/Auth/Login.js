import React from "react";
import Register from "./Register";

const Login = () => {
  return (
    <div>
      <div>
        <div className="modal fade login-modal-main" id="bd-example-modal">
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-body">
                <div className="login-modal">
                  <div className="row">
                    <div sclassName="col-lg-6 pad-right-0">
                      {/* <div style={{border:"2px solid green"}} className="login-modal-left">
                                            </div> */}
                      <div>
                        <img
                          style={{
                            height: "300px",
                            width: "300px",
                            marginTop: "50px",
                          }}
                          src="https://ouch-cdn2.icons8.com/-M8jScxbO1gY_nCg8EiikkUSU7icfakodLt7J3iwPCk/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNjE2/L2VjZTMxY2Y4LWIx/MDctNGM0NC1iNzFm/LTQzOGZiNTlhZTRk/OC5zdmc.png"
                          alt="not found"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 pad-left-0">
                      <button
                        type="button"
                        className="close close-top-right"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">
                          <i className="mdi mdi-close" />
                        </span>
                        <span className="sr-only">Close</span>
                      </button>
                      <form noValidate>
                        <div className="login-modal-right">
                          {/* Tab panes */}
                          <div className="tab-content">
                            <div
                              className="tab-pane active"
                              id="login"
                              role="tabpanel"
                            >
                              <h5 className="heading-design-h5">
                                Login to your account
                              </h5>
                              <fieldset className="form-group">
                                <label>Enter Email/Mobile number</label>
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                />
                              </fieldset>
                              <fieldset className="form-group">
                                <label>Enter Password</label>
                                <input
                                  type="password"
                                  className="form-control"
                                  name="password"
                                />

                                <span className="errorMessage"></span>
                              </fieldset>
                              <fieldset className="form-group">
                                <button
                                  type="submit"
                                  className="btn btn-lg btn-secondary btn-block"
                                >
                                  Enter to your account
                                </button>
                              </fieldset>
                              <div className="login-with-sites text-center">
                                <p>or Login with your social profile:</p>
                                <button className="btn-facebook login-icons btn-lg">
                                  <i className="mdi mdi-facebook" /> Facebook
                                </button>
                                <button className="btn-google login-icons btn-lg">
                                  <i className="mdi mdi-google" /> Google
                                </button>
                              </div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="customCheck1"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="customCheck1"
                                >
                                  Remember me
                                </label>
                              </div>
                            </div>
                            <div
                              className="tab-pane"
                              id="register"
                              role="tabpanel"
                            >
                              <Register />
                            </div>
                          </div>
                          <div className="clearfix" />
                          <div className="text-center login-footer-tab">
                            <ul className="nav nav-tabs" role="tablist">
                              <li className="nav-item">
                                <a
                                  className="nav-link active"
                                  data-toggle="tab"
                                  href="#login"
                                  role="tab"
                                >
                                  <i className="mdi mdi-lock" /> LOGIN
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  data-toggle="tab"
                                  href="#register"
                                  role="tab"
                                >
                                  <i className="mdi mdi-pencil" /> REGISTER
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="clearfix" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
