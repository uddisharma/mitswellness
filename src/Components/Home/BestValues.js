import React from "react";
import "../../Styles/Bestvalues.css";
const BestValues = () => {
  return (
    <div>
      <div>
        <div className="section145">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="main-title-tt">
                  <div className="main-title-left">
                    <span>CONCERNS</span>
                    <h2>Shop by Cencerns</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <a href="#" className="best-offer-item">
                  <img src="img/best-offers/Daily_Wellness.webp" alt />
                </a>
              </div>
              <div className="col-lg-3 col-md-6">
                <a href="#" className="best-offer-item">
                  <img src="img/best-offers/Immunity.webp" alt />
                </a>
              </div>
              <div className="col-lg-3 col-md-6">
                <a href="#" className="best-offer-item">
                  <img src="img/best-offers/Weight_Management.webp" alt />
                </a>
              </div>
              <div className="col-lg-3 col-md-6">
                <a href="#" className="best-offer-item offr-none">
                  <img src="img/best-offers/Hair_Skin.webp" alt />
                  <div className="cmtk_dt">
                    <div
                      className="product_countdown-timer offer-counter-text"
                      data-countdown="2021/01/06"
                    >
                      165 days 01:28:33
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-12">
                <a href="#" className="code-offer-item">
                  <img src="img/best-offers/Wide_Banner.webp" alt />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestValues;
