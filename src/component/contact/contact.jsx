import React from "react";


const Contact = () => {
  return (
    <>
    {/* Contact-info Section Start !*/}
    <div className="contact-info-area">
      <div className="container">
        <div className="row gx-xl-5 gy-4">
          <div className="col-xl-4 col-md-6">
            <div className="icon-card style-2">
              <div className="icon">
                <i className="fa-solid fa-phone-volume" />
              </div>
              <div className="content">
                <h2 className="title">Contact number</h2>
                <div className="info">
                  <a href="tel:+65-48596-5789" className="desc">
                    (+65) - 48596 - 5789
                  </a>
                  <a href="tel:+65-48596-5790" className="desc">
                    (+65) - 48596 - 5790
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="icon-card style-2">
              <div className="icon">
                <i className="fa-solid fa-calendar" />
              </div>
              <div className="content">
                <h2 className="title">Mail address</h2>
                <div className="info">
                  <a href="mailto:info@travon.com" className="desc">
                    info@travon.com
                  </a>
                  <a href="mailto:info.example@gmail.com" className="desc">
                    info.example@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="icon-card style-2">
              <div className="icon">
                <i className="fa-solid fa-message" />
              </div>
              <div className="content">
                <h2 className="title">Office address</h2>
                <div className="info">
                  <span className="address-desc">
                    Burnsville, MN 55337 Street,
                    <br />
                    United States
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Contact-info Section End */}
  </>
  

  );
};

export default Contact;