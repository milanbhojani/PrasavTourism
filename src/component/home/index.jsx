import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
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

  {/* Banner Section Start !*/}
  <div
    className="slider-area style-1"
    style={{ backgroundImage: 'url("images/hero-section/bg-1.jpg")' }}
  >
    <img
      className="banner-shape-1 wow slideInLeft"
      src="images/shape/wave.png"
      alt="Shape"
    />
    <img
      className="banner-shape-2 wow slideInLeft"
      data-wow-delay="0ms"
      data-wow-duration="1500ms"
      src="images/shape/send-msg.png"
      alt="Shape"
    />
    <img
      className="banner-shape-3 wow slideInDown"
      src="images/shape/sky.png"
      alt="Shape"
    />
    <img
      className="banner-shape-4 wow zoomInUp"
      src="images/shape/dots.png"
      alt="Shape"
    />
    <div className="slider-wrapper">
      <div>
        <div className="single-slider">
          <div className="container h-100 align-self-center">
            <div className="content-wrapper">
              <div className="row h-100">
                <div className="col-md-5 align-self-center order-2 order-md-1">
                  <div className="slider-content-wrapper">
                    <div className="slider-content">
                      <img
                        className="topbar-shape"
                        src="images/shape/highlight.png"
                        alt="Shape"
                      />
                      <span className="slider-short-title">
                        Tour and travels
                      </span>
                      <h1 className="slider-title">
                        Discover the World with Prasav Tourism
                      </h1>
                      <img
                        className="bottom-shape"
                        src="images/shape/bottom-bar.png"
                        alt="Bottom Shape"
                      />
                      <p className="slider-short-desc">
                        "Embark on a journey of a lifetime with our exclusive
                        tour and travel packages.Let's explore the world
                        together"
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 align-self-center order-1 order-md-2">
                  <div className="slider-image">
                    <img
                      src="images/hero-section/image-1.png"
                      alt="feature image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Banner Section End !*/}
  {/*- Location Slider Area Start !*/}
  <div className="location-slider-area style-1">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title">
            <div className="sec-content">
              <img
                className="topbar-shape-2"
                src="images/shape/three-line-shape.png"
                alt="Shape"
              />
              <span className="short-title">Destination</span>
              <h2 className="title">Popular destination</h2>
              <img
                className="bottom-shape"
                src="images/shape/bottom-bar.png"
                alt="Bottom Shape"
              />
            </div>
            <div className="location-slider-arrow">
              <button
                type="button"
                className="location-arrow-btn prev-btn"
                id="trigger_location_prev"
              >
                <i className="fa-solid fa-arrow-left" />
              </button>
              <button
                type="button"
                className="location-arrow-btn next-btn"
                id="trigger_location_next"
              >
                <i className="fa-solid fa-arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="location-slider-wrapper" id="location-slider-wrapper">
        {/*- Single Location Start !*/}
        <div className="location-card style-1 wow fadeInUp" data-wow-delay="0s">
          <div className="image-wrapper">
            <a className="image-inner" href="destination-details.html">
              <img src="images/location-card/img1.jpg" alt="Location Image" />
            </a>
            <div className="rating">
              <div className="ratting-inner">
                <span>
                  <i className="fa-solid fa-star" />
                </span>
                <span className="counter">4.5</span>
              </div>
            </div>
          </div>
          <div className="content-wrapper">
            <div className="content-inner">
              <h3 className="content-title">
                <a href="destination-details.html">Hava Mahel Jaipur</a>
              </h3>
              <a href="destination-details.html" className="icon">
                <i className="icon-up-arrow" />
              </a>
            </div>
          </div>
        </div>
        {/*- Single Location End !*/}
        {/*- Single Location Start !*/}
        <div
          className="location-card style-1 wow fadeInUp"
          data-wow-delay=".4s"
        >
          <div className="image-wrapper">
            <a href="destination-details.html" className="image-inner">
              <img src="images/location-card/img2.jpg" alt="Location Image" />
            </a>
            <div className="rating">
              <div className="ratting-inner">
                <span>
                  <i className="fa-solid fa-star" />
                </span>
                <span className="counter">3.5</span>
              </div>
            </div>
          </div>
          <div className="content-wrapper">
            <div className="content-inner">
              <h3 className="content-title">
                <a href="destination-details.html">Jaiselmer Rajsthan</a>
              </h3>
              <a href="destination-details.html" className="icon">
                <i className="icon-up-arrow" />
              </a>
            </div>
          </div>
        </div>
        {/*- Single Location End !*/}
        {/*- Single Location Start !*/}
        <div
          className="location-card style-1 wow fadeInUp"
          data-wow-delay=".8s"
        >
          <div className="image-wrapper">
            <a href="destination-details.html" className="image-inner">
              <img src="images/location-card/img3.jpg" alt="Location Image" />
            </a>
            <div className="rating">
              <div className="ratting-inner">
                <span>
                  <i className="fa-solid fa-star" />
                </span>
                <span className="counter">3.5</span>
              </div>
            </div>
          </div>
          <div className="content-wrapper">
            <div className="content-inner">
              <h3 className="content-title">
                <a href="destination-details.html">Tajmahal Agra</a>
              </h3>
              <a href="destination-details.html" className="icon">
                <i className="icon-up-arrow" />
              </a>
            </div>
          </div>
        </div>
        {/*- Single Location End !*/}
        {/*- Single Location Start !*/}
        <div
          className="location-card style-1 wow fadeInUp"
          data-wow-delay="1.2s"
        >
          <div className="image-wrapper">
            <a href="destination-details.html" className="image-inner">
              <img src="images/location-card/img4.jpg" alt="Location Image" />
            </a>
            <div className="rating">
              <div className="ratting-inner">
                <span>
                  <i className="fa-solid fa-star" />
                </span>
                <span className="counter">3.5</span>
              </div>
            </div>
          </div>
          <div className="content-wrapper">
            <div className="content-inner">
              <h3 className="content-title">
                <a href="destination-details.html">
                  Jungle Safari Kanha National Park{" "}
                </a>
              </h3>
              <a href="destination-details.html" className="icon">
                <i className="icon-up-arrow" />
              </a>
            </div>
          </div>
        </div>
        {/*- Single Location End !*/}
        {/*- Single Location Start !*/}
        <div className="location-card style-1 wow fadeInUp" data-wow-delay="0s">
          <div className="image-wrapper">
            <a className="image-inner" href="destination-details.html">
              <img src="images/location-card/img5.jpg" alt="Location Image" />
            </a>
            <div className="rating">
              <div className="ratting-inner">
                <span>
                  <i className="fa-solid fa-star" />
                </span>
                <span className="counter">3.5</span>
              </div>
            </div>
          </div>
          <div className="content-wrapper">
            <div className="content-inner">
              <h3 className="content-title">
                <a href="destination-details.html">City Palace Udaipur</a>
              </h3>
              <a href="destination-details.html" className="icon">
                <i className="icon-up-arrow" />
              </a>
            </div>
          </div>
        </div>
        {/*- Single Location End !*/}
        {/*- Single Location Start !*/}
        <div
          className="location-card style-1 wow fadeInUp"
          data-wow-delay=".4s"
        >
          <div className="image-wrapper">
            <a href="destination-details.html" className="image-inner">
              <img src="images/location-card/img6.jpg" alt="Location Image" />
            </a>
            <div className="rating">
              <div className="ratting-inner">
                <span>
                  <i className="fa-solid fa-star" />
                </span>
                <span className="counter">3.5</span>
              </div>
            </div>
          </div>
          <div className="content-wrapper">
            <div className="content-inner">
              <h3 className="content-title">
                <a href="destination-details.html">Kerala National Park</a>
              </h3>
              <a href="destination-details.html" className="icon">
                <i className="icon-up-arrow" />
              </a>
            </div>
          </div>
        </div>
        {/*- Single Location End !*/}
        {/*- Single Location Start !*/}
        <div
          className="location-card style-1 wow fadeInUp"
          data-wow-delay=".8s"
        >
          <div className="image-wrapper">
            <a href="destination-details.html" className="image-inner">
              <img src="images/location-card/img7.jpg" alt="Location Image" />
            </a>
            <div className="rating">
              <div className="ratting-inner">
                <span>
                  <i className="fa-solid fa-star" />
                </span>
                <span className="counter">3.5</span>
              </div>
            </div>
          </div>
          <div className="content-wrapper">
            <div className="content-inner">
              <h3 className="content-title">
                <a href="destination-details.html">Kasol Himachal Prades</a>
              </h3>
              <a href="destination-details.html" className="icon">
                <i className="icon-up-arrow" />
              </a>
            </div>
          </div>
        </div>
        {/*- Single Location End !*/}
        {/*- Single Location Start !*/}
        <div
          className="location-card style-1 wow fadeInUp"
          data-wow-delay="1.2s"
        >
          <div className="image-wrapper">
            <a href="destination-details.html" className="image-inner">
              <img src="images/location-card/img8.jpg" alt="Location Image" />
            </a>
            <div className="rating">
              <div className="ratting-inner">
                <span>
                  <i className="fa-solid fa-star" />
                </span>
                <span className="counter">3.5</span>
              </div>
            </div>
          </div>
          <div className="content-wrapper">
            <div className="content-inner">
              <h3 className="content-title">
                <a href="destination-details.html">Simala Manali</a>
              </h3>
              <a href="destination-details.html" className="icon">
                <i className="icon-up-arrow" />
              </a>
            </div>
          </div>
        </div>
        {/*- Single Location End !*/}
      </div>
    </div>
  </div>
  {/*- Location Slider Area Start !*/}
  {/* About Us Area Start */}
  <div
    className="about-us-area style-1"
    style={{ backgroundImage: 'url("images/about-us-area/bg-1.png")' }}
  >
    <img
      className="shape-1 wow zoomInDown"
      src="images/shape/dots.png"
      alt="Shape"
    />
    <div className="container">
      <div className="about-us-wrapper">
        <div className="row">
          <div
            className="col-xl-5 order-xl-1 order-2 wow fadeInLeft"
            data-wow-delay=".4s"
          >
            <div className="about-us-content-wrapper-1">
              <div className="section-title">
                <div className="sec-content">
                  <span className="short-title">About us</span>
                  <h2 className="title">
                    We create journeys for the excited traveler
                  </h2>
                  <img
                    className="bottom-shape"
                    src="images/shape/bottom-bar.png"
                    alt="Bottom Shape"
                  />
                </div>
              </div>
              <div className="info-card style-1">
                <div className="icon-wrapper">
                  <img src="images/icon/folding-map.png" alt="Icon" />
                </div>
                <div className="content">
                  <h6 className="title">Holiday On Budget</h6>
                  <p className="desc">
                    Enjoy the best luxury and comfort with our carefully chosen
                    top hotels from around the world.We redefine hospitality,
                    ensuring your stay is nothing short of extraordinary.
                  </p>
                </div>
              </div>
              <div className="info-card style-1">
                <div className="icon-wrapper">
                  <img src="images/icon/ticket.png" alt="Icon" />
                </div>
                <div className="content">
                  <h6 className="title">World Class Travel</h6>
                  <p className="desc">
                    Discover ultimate luxury and easy travel with World Class
                    Travel, your top choice for vacations. We provide
                    outstanding service, handpicked experiences, and a love for
                    adventure, all dedicated to making your dream trips come
                    true
                  </p>
                </div>
              </div>
              <div className="meta-wrapper">
                <a href="about.html" className="theme-btn">
                  Learn more
                </a>
                <div className="meta-user">
                  <a href="#" className="image-inner">
                    <img src="images/meta-user/meta-user-1.jpg" alt="User" />
                  </a>
                  <a href="#" className="image-inner">
                    <img src="images/meta-user/meta-user-2.jpg" alt="User" />
                  </a>
                  <a href="#" className="image-inner">
                    <img src="images/meta-user/meta-user-3.jpg" alt="User" />
                  </a>
                  <a href="#" className="image-inner">
                    <i className="fa-solid fa-plus" />
                  </a>
                </div>
                <div className="counter-wrapper">
                  <h6 className="counter-inner">
                    <span className="counter">100</span>+
                  </h6>
                  <span className="customers">Customers</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-7 order-xl-2 order-1 wow fadeInRight"
            data-wow-delay=".4s"
          >
            <div className="about-us-image-wrapper-1">
              <img
                className="bg-shape"
                src="images/about-us-area/image-wrapper-bg-1.png"
                alt="Shape"
              />
              <div className="image-wrapper style-1">
                <img
                  src="images/about-us-area/img2.jpg"
                  alt=" Vacation Image"
                />
              </div>
              <div className="image-wrapper style-2">
                <img
                  src="images/about-us-area/img3.jpg"
                  alt=" Vacation Image"
                />
              </div>
              <div className="image-wrapper style-3">
                <img
                  src="images/about-us-area/img1.jpg"
                  alt=" Vacation Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About Us Area Start */}
  {/* Location Area Start */}
  <div className="location-area style-1">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title  align-content-center justify-content-center text-center">
            <div className="sec-content">
              <span className="short-title">Popular packages</span>
              <h2 className="title">Find popular tours</h2>
              <img
                className="bottom-shape"
                src="images/shape/bottom-bar.png"
                alt="Bottom Shape"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row gy-4">
        {/*- Single Location Start !*/}
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0s">
          <div className="location-card style-2">
            <div className="image-wrapper">
              <div className="image-inner">
                <a href="tour-details.html">
                  <img
                    src="images/location-card/img13.jpg"
                    alt="Location Image"
                  />
                </a>
              </div>
              <div className="rating">
                <div className="ratting-inner">
                  <span>
                    <i className="fa-solid fa-star" />
                  </span>
                  <span className="counter">4.5</span>
                </div>
              </div>
              <a href="#" className="favourite-icon active">
                <i className="fa-solid fa-heart" />
              </a>
            </div>
            <div className="content-wrapper">
              <div className="content-inner">
                <span className="price">₹45,000</span>
                <h3 className="content-title">
                  <a href="tour-details.html">Asian discovery</a>
                </h3>
                <div className="time-zone">
                  <div className="time-zone-inner">
                    <i className="fa-solid fa-location-dot" />
                    <p className="title">Agoda, surulere lagos</p>
                  </div>
                  <div className="time-zone-inner">
                    <i className="fa-solid fa-clock" />
                    <p className="title">6 Days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*- Single Location End !*/}
        {/*- Single Location Start !*/}
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
          <div className="location-card style-2">
            <div className="image-wrapper">
              <div className="image-inner">
                <a href="tour-details.html">
                  <img
                    src="images/location-card/img88.jpg"
                    alt="Location Image"
                  />
                </a>
              </div>
              <div className="rating">
                <div className="ratting-inner">
                  <span>
                    <i className="fa-solid fa-star" />
                  </span>
                  <span className="counter">4.1</span>
                </div>
              </div>
              <a href="#" className="favourite-icon">
                <i className="fa-solid fa-heart" />
              </a>
            </div>
            <div className="content-wrapper">
              <div className="content-inner">
                <span className="price">₹49,000</span>
                <h3 className="content-title">
                  <a href="tour-details.html">Mountain hiking tour</a>
                </h3>
                <div className="time-zone">
                  <div className="time-zone-inner">
                    <i className="fa-solid fa-location-dot" />
                    <p className="title">Agoda, surulere lagos</p>
                  </div>
                  <div className="time-zone-inner">
                    <i className="fa-solid fa-clock" />
                    <p className="title">4 Days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*- Single Location End !*/}
        {/*- Single Location Start !*/}
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
          <div className="location-card style-2">
            <div className="image-wrapper">
              <div className="image-inner">
                <a href="tour-details.html">
                  <img
                    src="images/location-card/img9.jpg"
                    alt="Location Image"
                  />
                </a>
              </div>
              <div className="rating">
                <div className="ratting-inner">
                  <span>
                    <i className="fa-solid fa-star" />
                  </span>
                  <span className="counter">4.8</span>
                </div>
              </div>
              <a href="#" className="favourite-icon active">
                <i className="fa-solid fa-heart" />
              </a>
            </div>
            <div className="content-wrapper">
              <div className="content-inner">
                <h5 className="price">₹1,24,000</h5>
                <span className="content-title">
                  <a href="tour-details.html">Adventure maldivs</a>
                </span>
                <div className="time-zone">
                  <div className="time-zone-inner">
                    <i className="fa-solid fa-location-dot" />
                    <p className="title">Agoda, surulere lagos</p>
                  </div>
                  <div className="time-zone-inner">
                    <i className="fa-solid fa-clock" />
                    <p className="title">4 Days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*- Single Location End !*/}
        {/*- Single Location Start !*/}
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
          <div className="location-card style-2">
            <div className="image-wrapper">
              <div className="image-inner">
                <a href="tour-details.html">
                  <img
                    src="images/location-card/img10.jpg"
                    alt="Location Image"
                  />
                </a>
              </div>
              <div className="rating">
                <div className="ratting-inner">
                  <span>
                    <i className="fa-solid fa-star" />
                  </span>
                  <span className="counter">4.3</span>
                </div>
              </div>
              <a href="#" className="favourite-icon">
                <i className="fa-solid fa-heart" />
              </a>
            </div>
            <div className="content-wrapper">
              <div className="content-inner">
                <h5 className="price">₹98,000</h5>
                <h3 className="content-title">
                  <a href="tour-details.html">The minimalist sea</a>
                </h3>
                <div className="time-zone">
                  <div className="time-zone-inner">
                    <i className="fa-solid fa-location-dot" />
                    <p className="title">Agoda, surulere lagos</p>
                  </div>
                  <div className="time-zone-inner">
                    <i className="fa-solid fa-clock" />
                    <p className="title">4 Days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*- Single Location End !*/}
        {/*- Single Location Start !*/}
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="1.2s">
          <div className="location-card style-2">
            <div className="image-wrapper">
              <div className="image-inner">
                <a href="tour-details.html">
                  <img
                    src="images/location-card/img11.jpg"
                    alt="Location Image"
                  />
                </a>
              </div>
              <div className="rating">
                <div className="ratting-inner">
                  <span>
                    <i className="fa-solid fa-star" />
                  </span>
                  <span className="counter">4.0</span>
                </div>
              </div>
              <a href="#" className="favourite-icon active">
                <i className="fa-solid fa-heart" />
              </a>
            </div>
            <div className="content-wrapper">
              <div className="content-inner">
                <h5 className="price">₹1,38,000</h5>
                <h3 className="content-title">
                  <a href="tour-details.html">Antique europe</a>
                </h3>
                <div className="time-zone">
                  <div className="time-zone-inner">
                    <i className="fa-solid fa-location-dot" />
                    <p className="title">Agoda, surulere lagos</p>
                  </div>
                  <div className="time-zone-inner">
                    <i className="fa-solid fa-clock" />
                    <p className="title">4 Days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*- Single Location End !*/}
        {/*- Single Location Start !*/}
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="1.6s">
          <div className="location-card style-2">
            <div className="image-wrapper">
              <div className="image-inner">
                <a href="tour-details.html">
                  <img
                    src="images/location-card/img12.jpg"
                    alt="Location Image"
                  />
                </a>
              </div>
              <div className="rating">
                <div className="ratting-inner">
                  <span>
                    <i className="fa-solid fa-star" />
                  </span>
                  <span className="counter">4.7</span>
                </div>
              </div>
              <a href="#" className="favourite-icon">
                <i className="fa-solid fa-heart" />
              </a>
            </div>
            <div className="content-wrapper">
              <div className="content-inner">
                <h5 className="price">₹1,52,000</h5>
                <h3 className="content-title">
                  <a href="tour-details.html">Awesome island</a>
                </h3>
                <div className="time-zone">
                  <div className="time-zone-inner">
                    <i className="fa-solid fa-location-dot" />
                    <p className="title">Agoda, surulere lagos</p>
                  </div>
                  <div className="time-zone-inner">
                    <i className="fa-solid fa-clock" />
                    <p className="title">4 Days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*- Single Location End !*/}
      </div>
    </div>
  </div>
  {/* Location Area End */}
  {/* Why Choose Us Area  Start*/}
  <div className="why-choose-us-area style-1">
    <img
      className="shape-1 wow zoomInDown"
      src="images/shape/half-circle-2.png"
      alt="Shape"
    />
    <img
      className="shape-2 wow zoomInUp"
      src="images/shape/dots.png"
      alt="Shape"
    />
    <div className="container">
      <div className="row gy-4">
        <div className="col-xl-4 col-lg-6 wow fadeInLeft" data-wow-delay=".4s">
          <div className="section-title">
            <div className="sec-content">
              <span className="short-title">Why choose us</span>
              <h2 className="title">
                Explore, Experience, Entertainment Prasav Tourism Makes it
                Possible{" "}
              </h2>
              <img
                className="bottom-shape"
                src="images/shape/bottom-bar.png"
                alt="Bottom Shape"
              />
            </div>
            <div className="sec-desc">
              <p className="desc">
                "Prasav Tourism brings your travel dreams to life online!
                Explore breathtaking destinations, experience local culture, and
                enjoy endless entertainment, all at your fingertips."
              </p>
            </div>
            <div className="sec-btn">
              <a href="#" className="theme-btn">
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-xl-4 col-lg-6 align-self-center wow fadeInDown"
          data-wow-delay=".6s"
        >
          <div className="image-wrapper">
            <img
              src="images/why-choose-us-area/choose-us-img-1.png"
              alt="Choose Us Image"
            />
          </div>
        </div>
        <div className="col-xl-4 wow fadeInRight" data-wow-delay=".4s">
          <div className="info-wrapper">
            <div className="info-card style-1">
              <div className="icon-wrapper">
                <img src="images/icon/folding-map.png" alt="Icon" />
              </div>
              <div className="content">
                <h6 className="title">Tour guide</h6>
                <p className="desc">
                  "Your friendly expert, making sure you never miss a beat while
                  exploring."
                </p>
              </div>
            </div>
            <div className="info-card style-1">
              <div className="icon-wrapper">
                <img src="images/icon/ticket.png" alt="Icon" />
              </div>
              <div className="content">
                <h6 className="title">Friendly price</h6>
                <p className="desc">
                  "Amazing experiences that won't cost a fortune, creating
                  budget-friendly memories."
                </p>
              </div>
            </div>
            <div className="info-card style-1">
              <div className="icon-wrapper">
                <img src="images/icon/calender.png" alt="Icon" />
              </div>
              <div className="content">
                <h6 className="title">Custom Planning</h6>
                <p className="desc">
                  "We plan your trip just for you, making it special and exactly
                  what you want."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Why Choose Us Area  End*/}
  {/* Process Step Area Start  */}
  <div className="process-step-area style-1">
    <div className="container">
      <img className="bg-shape" src="images/shape/elements.png" alt="Shape" />
      <div className="section-title justify-content-center text-center">
        <div className="sec-content">
          <span className="short-title">Our process</span>
          <h2 className="title">Revolutionising the ways we travel</h2>
          <img
            className="bottom-shape"
            src="images/shape/bottom-bar.png"
            alt="Bottom Shape"
          />
        </div>
      </div>
      <div className="row gy-4">
        <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="0s">
          <div className="process-card style-1">
            <div className="img-wrapper wow">
              <img src="images/process-step-area/image-1.png" alt="Shape" />
            </div>
            <div className="content-wrapper">
              <h4 className="title">Book &amp; relax</h4>
              <p className="desc">
                Effortlessly book your getaway and unwind as we handle the
                details, ensuring a stress-free and relaxing travel experience
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
          <div className="process-card style-1">
            <div className="img-wrapper">
              <img src="images/process-step-area/image-2.png" alt="Shape" />
            </div>
            <div className="content-wrapper">
              <h4 className="title">Smart checklist</h4>
              <p className="desc">
                Our smart checklist takes care of all your travel essentials,
                ensuring you're well-prepared for your journey, leaving you more
                time to enjoy your adventure.
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
          <div className="process-card style-1 ">
            <div className="img-wrapper">
              <img src="images/process-step-area/image-3.png" alt="Shape" />
            </div>
            <div className="content-wrapper">
              <h4 className="title">Save more</h4>
              <p className="desc">
                Enjoy significant savings on your travel expenses, allowing you
                to make the most of your trip without compromising on quality,
                comfort, or experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Process Step Area End  */}
  {/* Testimonial Slider Area Start */}
  <div className="testimonial-slider-area style-1">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 wow fadeInLeft">
          <div className="testimonial-slider-image-wrapper">
            <div className="single-img-wrapper style-1">
              <div className="img-inner">
                <div className="image">
                  <img src="images/testimonial/user-1.png" alt="User Image" />
                </div>
                <div className="content">
                  <span className="desc">
                    <i className="fa-solid fa-location-dot" />
                    Colombia
                  </span>
                </div>
              </div>
            </div>
            <div className="single-img-wrapper style-2">
              <div className="img-inner">
                <div className="image">
                  <img src="images/testimonial/user-3.png" alt="User Image" />
                </div>
                <div className="content">
                  <span className="desc">
                    <i className="fa-solid fa-location-dot" />
                    Russia
                  </span>
                </div>
              </div>
            </div>
            <div className="single-img-wrapper style-3">
              <div className="img-inner">
                <div className="image">
                  <img src="images/testimonial/user-2.png" alt="User Image" />
                </div>
                <div className="content style-2">
                  <span className="desc">
                    <i className="fa-solid fa-location-dot" />
                    Istanbul
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 wow fadeInRight">
          <div className="testimonial-content-wrapper">
            <div className="section-title">
              <div className="sec-content">
                <span className="short-title">Testimonial</span>
                <h2 className="title">What traveler says</h2>
                <img
                  className="bottom-shape"
                  src="images/shape/bottom-bar.png"
                  alt="Bottom Shape"
                />
              </div>
            </div>
            <div className="testimonial-slider-wrapper" id="testimonial_one">
              {/* Single Slider Content Start */}
              <div>
                <div className="testimonial-card style-1">
                  <div className="content-wrapper">
                    <div className="content">
                      <p className="text">
                        “Their service is absolutely wonderful and cheaper than
                        the direct or any other booking site, You back to us
                        strait away and no issues at all in the other end.”
                      </p>
                    </div>
                    <div className="user-rating">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Slider Content End */}
              {/* Single Slider Content Start */}
              <div>
                <div className="testimonial-card style-1">
                  <div className="content-wrapper">
                    <div className="content">
                      <p className="text">
                        “Their service is absolutely wonderful and cheaper than
                        the direct or any other booking site, You back to us
                        strait away and no issues at all in the other end.”
                      </p>
                    </div>
                    <div className="user-rating">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Slider Content End */}
              {/* Single Slider Content Start */}
              <div>
                <div className="testimonial-card style-1">
                  <div className="content-wrapper">
                    <div className="content">
                      <p className="text">
                        “Their service is absolutely wonderful and cheaper than
                        the direct or any other booking site, You back to us
                        strait away and no issues at all in the other end.”
                      </p>
                    </div>
                    <div className="user-rating">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Slider Content End */}
              {/* Single Slider Content Start */}
              <div>
                <div className="testimonial-card style-1">
                  <div className="content-wrapper">
                    <div className="content">
                      <p className="text">
                        “Their service is absolutely wonderful and cheaper than
                        the direct or any other booking site, You back to us
                        strait away and no issues at all in the other end.”
                      </p>
                    </div>
                    <div className="user-rating">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Slider Content End */}
              {/* Single Slider Content Start */}
              <div>
                <div className="testimonial-card style-1">
                  <div className="content-wrapper">
                    <div className="content">
                      <p className="text">
                        “Their service is absolutely wonderful and cheaper than
                        the direct or any other booking site, You back to us
                        strait away and no issues at all in the other end.”
                      </p>
                    </div>
                    <div className="user-rating">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Slider Content End */}
            </div>
            <div className="testimonial-user-slider">
              <div className="testimonial-user-wrapper ">
                {/* Single User Wrapper Start */}
                <div className="single-user">
                  <img src="images/testimonial/user-4.png" alt="user" />
                </div>
                {/* Single User Wrapper End */}
                {/* Single User Wrapper Start */}
                <div className="single-user">
                  <img src="images/testimonial/user-5.png" alt="user" />
                </div>
                {/* Single User Wrapper End */}
                {/* Single User Wrapper Start */}
                <div className="single-user">
                  <img src="images/testimonial/user-6.png" alt="user" />
                </div>
                {/* Single User Wrapper End */}
                {/* Single User Wrapper Start */}
                <div className="single-user">
                  <img src="images/testimonial/user-7.png" alt="user" />
                </div>
                {/* Single User Wrapper End */}
                {/* Single User Wrapper Start */}
                <div className="single-user">
                  <img src="images/testimonial/user-8.png" alt="user" />
                </div>
                {/* Single User Wrapper End */}
              </div>
              {/* Single User Wrapper Start */}
              <div className="arrow-btn" id="user-slider-arrow">
                <i className="fa-regular fa-arrow-right" />
              </div>
              {/* Single User Wrapper End */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial Slider Area End */}
</>

  );
};

export default Home;
