import React from "react";

const Footer = () => {
  return (
    <>
    {/*- Start Footer !*/}
    <footer className="footer bg-light-black">
      <div className="footer-sec">
        <div className="container">
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
              <div className="footer-widget">
                <div className="footer-widget-logo">
                  <div className="footer-logo">
                    <a href="index.html">
                      <img
                        src="images/logo/Prasav Tour small2.png"
                        alt="Footer Logo"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 ">
              <div className="footer-widget footer-widget-info">
                <div className="footer-widget-contact">
                  <div className="footer-contact">
                    <div className="contact-icon">
                      <i className="fa-solid fa-location-dot" />
                    </div>
                    <div className="contact-text">
                      <span>Jl. Raya Ubud No.70, Ubud - Bali</span>
                    </div>
                  </div>
                  <div className="footer-widget-contact">
                    <div className="footer-contact">
                      <div className="contact-icon">
                        <i className="fa-solid fa-envelope" />
                      </div>
                      <div className="contact-text">
                        <a href="mailto:info@gmail.com">info@gmail.com</a>
                      </div>
                    </div>
                  </div>
                  <div className="footer-widget-contact">
                    <div className="footer-contact">
                      <div className="contact-icon">
                        <i className="fa-solid fa-phone" />
                      </div>
                      <div className="contact-text">
                        <a href="tel:+012-345-6789">012-345-6789</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6">
              <div className="footer-widget-menu-wrapper">
                <div className="footer-widget widget_nav_menu">
                  <h2 className="footer-widget-title">Quick links</h2>
                  <ul className="menu">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="tour.html">Tour</a>
                    </li>
                    <li>
                      <a href="destination.html">Destination</a>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-widget widget_nav_menu">
                  <h2 className="footer-widget-title">Other pages</h2>
                  <ul className="menu">
                    <li>
                      <a href="tour-details.html">Adventure tour</a>
                    </li>
                    <li>
                      <a href="tour-details.html">Couple tour</a>
                    </li>
                    <li>
                      <a href="tour-details.html">Family tour</a>
                    </li>
                    <li>
                      <a href="tour-details.html">Group tour</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="divider" />
        </div>
      </div>
    </footer>
    {/*- End Footer !*/}
    {/* Header Search Bar Modal Start */}
    <div className="search-form-wrapper">
      <div className="search-form-inner">
        <div className="search-content-filed">
          <form role="search" method="get" className="search-form" action="#">
            <input type="hidden" name="post_type" defaultValue="post" />
            <div className="search-form-input">
              <div className="search-icon">
                <i className="icon-search" />
              </div>
              <input type="search" placeholder="Search" />
              <button
                className="theme-btn"
                type="submit"
                title="Search"
                aria-label="Search"
              >
                Search
              </button>
            </div>
          </form>
          <span className="search-close">
            <i className="fa-light fa-xmark" />
          </span>
        </div>
      </div>
    </div>
    {/* Header Search Bar Modal End */}
    {/* Scroll Up Section Start */}
    <div id="scrollTop" className="scrollup-wrapper">
      <div className="scrollup-btn">
        <i className="fa-solid fa-arrow-up" />
      </div>
    </div>
    {/* Scroll Up Section End */}
  </>
  
  );
};

export default Footer;
