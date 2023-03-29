import React from "react";

const Register = () => {
  return (
    <div>
      <div>
        <h5 className="heading-design-h5">Register Now!</h5>
        <fieldset className="form-group">
          <label>First Name</label>
          <input type="text" className="form-control" name="firstName" />
          {/* {formErrors.firstName.length > 0 && (
                        <span className="errorMessage">{formErrors.firstName}</span>
                    )} */}
        </fieldset>
        <fieldset className="form-group">
          <label>Enter Email/Mobile number</label>
          <input type="text" className="form-control" name="email" />
          {/* {formErrors.email.length > 0 && (
                        <span className="errorMessage">{formErrors.email}</span>
                    )} */}
        </fieldset>
        <fieldset className="form-group">
          <label>Enter Password</label>
          <input type="password" className="form-control" name="password" />
          {/* {formErrors.password.length > 0 && (
                        <span className="errorMessage">{formErrors.password}</span>
                      )} */}
        </fieldset>
        <fieldset className="form-group">
          <label>Enter Confirm Password </label>
          <input
            type="password"
            className="form-control"
            placeholder="********"
          />
        </fieldset>
        <fieldset className="form-group">
          <button type="submit" className="btn btn-lg btn-secondary btn-block">
            Create Your Account
          </button>
        </fieldset>
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck2"
          />
          <label className="custom-control-label" htmlFor="customCheck2">
            I Agree with <a href="#">Term and Conditions</a>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Register;
