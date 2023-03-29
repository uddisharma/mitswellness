import React from "react";

const Delivery = () => {
  return (
    <div>
      <div className="card-body">
        <form>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label className="control-label">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  className="form-control border-form-control"
                  type="text"
                  name="name"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label className="control-label">
                  Phone <span className="required">*</span>
                </label>
                <input
                  type="number"
                  className="form-control border-form-control"
                  name="phone"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label className="control-label">
                  State <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className="form-control border-form-control"
                  name="states"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label className="control-label">
                  District <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className="form-control border-form-control"
                  name="district"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label className="control-label">
                  City <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className="form-control border-form-control"
                  name="city"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label className="control-label">
                  Area <span className="required">*</span>
                </label>
                <input
                  className="form-control border-form-control"
                  type="text"
                  name="area"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="form-group">
                <label className="control-label">
                  Shipping Address <span className="required">*</span>
                </label>
                <textarea
                  className="form-control border-form-control"
                  name="address"
                ></textarea>
                <small className="text-danger">
                  Please provide the number and street.
                </small>
              </div>
            </div>
          </div>
          <button
            type="button"
            data-toggle="collapse"
            data-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
            className="btn btn-secondary mb-2 btn-lg"
          >
            NEXT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Delivery;
