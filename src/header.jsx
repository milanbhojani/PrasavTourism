import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
   
    {/* Header Start !*/}
    <header className="header-area style-1">
      {/* Header Nav Menu Start */}
      <div className="header-menu-area sticky-header">
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-6 col-6 d-flex align-items-center">
              <div className="logo">
                <Link to="/" className="standard-logo">
                  <img src="images/logo/Prasav Tour.png" alt="logo" />
                </Link>
                <Link to="/" className="sticky-logo">
                  <img src="images/logo/Prasav Tour.png" alt="logo" />
                </Link>
                <Link to="/" className="retina-logo">
                  <img src="images/logo/logo2.png" alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-xl-10 col-lg-10 col-md-6 col-6 d-flex align-items-center justify-content-end">
              <div className="menu d-inline-block">
                <nav id="main-menu" className="main-menu">
                  <ul>
                    <li className="active">
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/about">About</Link>
                    </li>
                    <li className="">
                    <Link to="/tour">Tour</Link>
                    </li>
                    <li>
                    <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* Mobile Menu Toggle Button Start !*/}
              <div className="mobile-menu-bar d-lg-none text-end">
                <a href="#" className="mobile-menu-toggle-btn">
                  <i className="fal fa-bars" />
                </a>
              </div>
              {/* Mobile Menu Toggle Button End !*/}
            </div>
          </div>
        </div>
      </div>
      {/* Header Nav Menu End */}
    </header>
    {/* Header End !*/}
    {/* Menu Sidebar Section Start */}
    <div className="menu-sidebar-area">
      <div className="menu-sidebar-wrapper">
        <div className="menu-sidebar-close">
          <button className="menu-sidebar-close-btn" id="menu_sidebar_close_btn">
            <i className="fal fa-times" />
          </button>
        </div>
        <div className="menu-sidebar-content">
          <div className="menu-sidebar-logo">
            <Link to="/">
              <img src="images/logo/logo2.png" alt="logo" />
            </Link>
          </div>
          <div className="mobile-nav-menu" />
          <div className="menu-sidebar-content">
            <div className="menu-sidebar-single-widget">
              <h5 className="menu-sidebar-title">Contact Info</h5>
              <div className="header-contact-info">
                <span>
                  <i className="fa-solid fa-location-dot" />
                  20, Bordeshi, Vadodara, Gujarat
                </span>
                <span>
                  <a href="mailto:hello@transico.com">
                    <i className="fa-solid fa-envelope" />
                    prasavtourism@gmail.com
                  </a>{" "}
                </span>
                <span>
                  <a href="tel:+123-456-7890">
                    <i className="fa-solid fa-phone" />
                    +91 9876543210
                  </a>
                </span>
              </div>
              <div className="social-profile">
                <a href="#">
                  <i className="fa-brands fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Menu Sidebar Section Start */}
  </>
  
  );
};

export default Header;
