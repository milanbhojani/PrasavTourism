import React from "react";


const About = () => {
  return (
  
<>
  {/* Video Modal Area  Start */}
  <div className="video-modal-area style-1">
    <div className="container">
      <div className="section-title">
        <div className="sec-content wow fadeInLeft" data-wow-delay="0s">
          <span className="short-title">Destination</span>
          <h2 className="title">Experience the new adventure with us</h2>
          <img
            className="bottom-shape"
            src="images/shape/bottom-bar.png"
            alt="Bottom Shape"
          />
        </div>
        <div className="btn-sec-inner wow fadeInRight" data-wow-delay=".2s">
          <div className="sec-desc">
            <p className="desc">
              Nemo enim ipsam voluptatem quia voluptas sit asper natur aut
              oditut fugit seduia con senim ipsam volup.
            </p>
          </div>
          <div className="sec-btn">
            <a href="#" className="theme-btn">
              Discover more
            </a>
          </div>
        </div>
      </div>
      <div
        className="video-modal-card style-1 wow fadeInUp"
        data-wow-delay=".4s"
      >
        <div className="image-wrapper">
          <img src="images/video-modal/bg-2.jpg" alt="Video Modal" />
        </div>
        <div className="popup-video-wrapper">
          <div className="video-btn">
            <a
              href="https://www.youtube.com/watch?v=7e90gBu4pas"
              className="mfp-iframe video-play"
            >
              <i className="icon-play-button" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      <div className="counter-area">
        <div className="single-counter wow fadeInRight" data-wow-delay="0s">
          <p className="counter-inner">
            <span className="counter">25</span>K+
          </p>
          <p className="title">New users per week</p>
        </div>
        <div className="single-counter wow fadeInRight" data-wow-delay=".4s">
          <p className="counter-inner">
            <span className="counter">100</span>M+
          </p>
          <p className="title">Monthly active user</p>
        </div>
        <div className="single-counter wow fadeInRight" data-wow-delay=".8s">
          <p className="counter-inner">
            <span className="counter">25</span>K+
          </p>
          <p className="title">New users per week</p>
        </div>
        <div className="single-counter wow fadeInRight" data-wow-delay=".9s">
          <p className="counter-inner">
            <span className="counter">100</span>M+
          </p>
          <p className="title">Monthly active user</p>
        </div>
      </div>
    </div>
  </div>
  {/* Video Modal Area  End */}
  {/* location Image Card Area Start */}
  <div className="location-area style-2 bg-white">
    <div className="container">
      <div className="section-title  align-content-center justify-content-center text-center">
        <div className="sec-content">
          <h2 className="title">Our amazing team</h2>
          <img
            className="bottom-shape"
            src="images/shape/bottom-bar.png"
            alt="Bottom Shape"
          />
        </div>
      </div>
      <div className="location-card-wrapper">
        <div className="row gy-4">
          {/* Single Card Start */}
          <div
            className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
            data-wow-delay="0s"
          >
            <div className="location-image-card style-2">
              <div className="img-wrapper">
                <img
                  src="images/location-image-card/image-5.png"
                  alt="Place Image"
                />
              </div>
              <div className="content-inner">
                <h6 className="city">Jenny Wilson</h6>
                <p className="duration">CEO &amp; Founder</p>
              </div>
            </div>
          </div>
          {/* Single Card End */}
          {/* Single Card Start */}
          <div
            className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="location-image-card style-2">
              <div className="img-wrapper">
                <img
                  src="images/location-image-card/image-6.png"
                  alt="Place Image"
                />
              </div>
              <div className="content-inner">
                <h6 className="city">Robert Mayar</h6>
                <p className="duration">Manager</p>
              </div>
            </div>
          </div>
          {/* Single Card End */}
          {/* Single Card Start */}
          <div
            className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
            data-wow-delay=".8s"
          >
            <div className="location-image-card style-2">
              <div className="img-wrapper">
                <img
                  src="images/location-image-card/image-7.png"
                  alt="Place Image"
                />
              </div>
              <div className="content-inner">
                <h6 className="city">Annette Black</h6>
                <p className="duration">Tour Manager</p>
              </div>
            </div>
          </div>
          {/* Single Card End */}
          {/* Single Card Start */}
          <div
            className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
            data-wow-delay="1.2s"
          >
            <div className="location-image-card style-2">
              <div className="img-wrapper">
                <img
                  src="images/location-image-card/image-8.png"
                  alt="Place Image"
                />
              </div>
              <div className="content-inner">
                <h6 className="city">Bessie Cooper</h6>
                <p className="duration">Chief Agent</p>
              </div>
            </div>
          </div>
          {/* Single Card End */}
        </div>
      </div>
    </div>
  </div>
  {/* location Image Card Area End */}
  {/* Testimonial Slider Area Start */}
  <div className="testimonial-slider-area style-2 background-light-gray">
    <div className="container">
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
    </div>
    <div className="testimonial-marquee-wrapper style-2">
      <div className=" brand-marquee-wrapper first-marquee-wrapper">
        {/* Single Card Start */}
        <div className="testimonial-card-two">
          <div className="user-meta-info">
            <div className="user-info-inner">
              <div className="img-wrapper">
                <img src="images/testiomonial-slider/user-1.png" alt="User" />
              </div>
              <div className="content">
                <h5 className="user-name">Sabrina Meyla</h5>
                <p className="title">Indonesian tourists</p>
              </div>
            </div>
            <div className="rating">
              <div className="ratting-inner">
                <span>
                  <i className="fa-solid fa-star" />
                </span>
                <span className="counter">3.5</span>
              </div>
            </div>
          </div>
          <div className="desc-inner">
            <p className="desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia conse quuntur ma
            </p>
          </div>
        </div>
        {/* Single Card End */}
        {/* Single Card Start */}
        <div className="testimonial-card-two">
          <div className="user-meta-info">
            <div className="user-info-inner">
              <div className="img-wrapper">
                <img src="images/testiomonial-slider/user-2.png" alt="User" />
              </div>
              <div className="content">
                <h5 className="user-name">Darell Seward</h5>
                <p className="title">Indonesian tourists</p>
              </div>
            </div>
            <div className="rating">
              <div className="ratting-inner">
                <span>
                  <i className="fa-solid fa-star" />
                </span>
                <span className="counter">3.5</span>
              </div>
            </div>
          </div>
          <div className="desc-inner">
            <p className="desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia conse quuntur ma
            </p>
          </div>
        </div>
        {/* Single Card End */}
        {/* Single Card Start */}
        <div className="testimonial-card-two">
          <div className="user-meta-info">
            <div className="user-info-inner">
              <div className="img-wrapper">
                <img src="images/testiomonial-slider/user-3.png" alt="User" />
              </div>
              <div className="content">
                <h5 className="user-name">Camron Will</h5>
                <p className="title">Indonesian tourists</p>
              </div>
            </div>
            <div className="rating">
              <div className="ratting-inner">
                <span>
                  <i className="fa-solid fa-star" />
                </span>
                <span className="counter">3.5</span>
              </div>
            </div>
          </div>
          <div className="desc-inner">
            <p className="desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia conse quuntur ma
            </p>
          </div>
        </div>
        {/* Single Card End */}
        {/* Single Card Start */}
        <div className="testimonial-card-two">
          <div className="user-meta-info">
            <div className="user-info-inner">
              <div className="img-wrapper">
                <img src="images/testiomonial-slider/user-1.png" alt="User" />
              </div>
              <div className="content">
                <h5 className="user-name">Sabrina Meyla</h5>
                <p className="title">Indonesian tourists</p>
              </div>
            </div>
            <div className="rating">
              <div className="ratting-inner">
                <span>
                  <i className="fa-solid fa-star" />
                </span>
                <span className="counter">3.5</span>
              </div>
            </div>
          </div>
          <div className="desc-inner">
            <p className="desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia conse quuntur ma
            </p>
          </div>
        </div>
        {/* Single Card End */}
        {/* Single Card Start */}
        <div className="testimonial-card-two">
          <div className="user-meta-info">
            <div className="user-info-inner">
              <div className="img-wrapper">
                <img src="images/testiomonial-slider/user-2.png" alt="User" />
              </div>
              <div className="content">
                <h5 className="user-name">Darell Seward</h5>
                <p className="title">Indonesian tourists</p>
              </div>
            </div>
            <div className="rating">
              <div className="ratting-inner">
                <span>
                  <i className="fa-solid fa-star" />
                </span>
                <span className="counter">3.5</span>
              </div>
            </div>
          </div>
          <div className="desc-inner">
            <p className="desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia conse quuntur ma
            </p>
          </div>
        </div>
        {/* Single Card End */}
        {/* Single Card Start */}
        <div className="testimonial-card-two">
          <div className="user-meta-info">
            <div className="user-info-inner">
              <div className="img-wrapper">
                <img src="images/testiomonial-slider/user-3.png" alt="User" />
              </div>
              <div className="content">
                <h5 className="user-name">Camron Will</h5>
                <p className="title">Indonesian tourists</p>
              </div>
            </div>
            <div className="rating">
              <div className="ratting-inner">
                <span>
                  <i className="fa-solid fa-star" />
                </span>
                <span className="counter">3.5</span>
              </div>
            </div>
          </div>
          <div className="desc-inner">
            <p className="desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia conse quuntur ma
            </p>
          </div>
        </div>
        {/* Single Card End */}
        {/* Single Card Start */}
        <div className="testimonial-card-two">
          <div className="user-meta-info">
            <div className="user-info-inner">
              <div className="img-wrapper">
                <img src="images/testiomonial-slider/user-1.png" alt="User" />
              </div>
              <div className="content">
                <h5 className="user-name">Sabrina Meyla</h5>
                <p className="title">Indonesian tourists</p>
              </div>
            </div>
            <div className="rating">
              <div className="ratting-inner">
                <span>
                  <i className="fa-solid fa-star" />
                </span>
                <span className="counter">3.5</span>
              </div>
            </div>
          </div>
          <div className="desc-inner">
            <p className="desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia conse quuntur ma
            </p>
          </div>
        </div>
        {/* Single Card End */}
        {/* Single Card Start */}
        <div className="testimonial-card-two">
          <div className="user-meta-info">
            <div className="user-info-inner">
              <div className="img-wrapper">
                <img src="images/testiomonial-slider/user-2.png" alt="User" />
              </div>
              <div className="content">
                <h5 className="user-name">Darell Seward</h5>
                <p className="title">Indonesian tourists</p>
              </div>
            </div>
            <div className="rating">
              <div className="ratting-inner">
                <span>
                  <i className="fa-solid fa-star" />
                </span>
                <span className="counter">3.5</span>
              </div>
            </div>
          </div>
          <div className="desc-inner">
            <p className="desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia conse quuntur ma
            </p>
          </div>
        </div>
        {/* Single Card End */}
        {/* Single Card Start */}
        <div className="testimonial-card-two">
          <div className="user-meta-info">
            <div className="user-info-inner">
              <div className="img-wrapper">
                <img src="images/testiomonial-slider/user-3.png" alt="User" />
              </div>
              <div className="content">
                <h5 className="user-name">Camron Will</h5>
                <p className="title">Indonesian tourists</p>
              </div>
            </div>
            <div className="rating">
              <div className="ratting-inner">
                <span>
                  <i className="fa-solid fa-star" />
                </span>
                <span className="counter">3.5</span>
              </div>
            </div>
          </div>
          <div className="desc-inner">
            <p className="desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia conse quuntur ma
            </p>
          </div>
        </div>
        {/* Single Card End */}
      </div>
      <div className=" brand-marquee-wrapper second-marquee-wrapper">
        {/* Single Card Start */}
        <div className="testimonial-card-two">
          <div className="user-meta-info">
            <div className="user-info-inner">
              <div className="img-wrapper">
                <img src="images/testiomonial-slider/user-3.png" alt="User" />
              </div>
              <div className="content">
                <h5 className="user-name">Camron Will</h5>
                <p className="title">Indonesian tourists</p>
              </div>
            </div>
            <div className="rating">
              <div className="ratting-inner">
                <span>
                  <i className="fa-solid fa-star" />
                </span>
                <span className="counter">3.5</span>
              </div>
            </div>
          </div>
          <div className="desc-inner">
            <p className="desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia conse quuntur ma
            </p>
          </div>
        </div>
        {/* Single Card End */}
        {/* Single Card Start */}
        <div className="testimonial-card-two">
          <div className="user-meta-info">
            <div className="user-info-inner">
              <div className="img-wrapper">
                <img src="images/testiomonial-slider/user-4.png" alt="User" />
              </div>
              <div className="content">
                <h5 className="user-name">Annette Black</h5>
                <p className="title">Indonesian tourists</p>
              </div>
            </div>
            <div className="rating">
              <div className="ratting-inner">
                <span>
                  <i className="fa-solid fa-star" />
                </span>
                <span className="counter">3.5</span>
              </div>
            </div>
          </div>
          <div className="desc-inner">
            <p className="desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia conse quuntur ma
            </p>
          </div>
        </div>
        {/* Single Card End */}
        {/* Single Card Start */}
        <div className="testimonial-card-two">
          <div className="user-meta-info">
            <div className="user-info-inner">
              <div className="img-wrapper">
                <img src="images/testiomonial-slider/user-5.png" alt="User" />
              </div>
              <div className="content">
                <h5 className="user-name">Savan Nguyen</h5>
                <p className="title">Indonesian tourists</p>
              </div>
            </div>
            <div className="rating">
              <div className="ratting-inner">
                <span>
                  <i className="fa-solid fa-star" />
                </span>
                <span className="counter">3.5</span>
              </div>
            </div>
          </div>
          <div className="desc-inner">
            <p className="desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia conse quuntur ma
            </p>
          </div>
        </div>
        {/* Single Card End */}
        {/* Single Card Start */}
        <div className="testimonial-card-two">
          <div className="user-meta-info">
            <div className="user-info-inner">
              <div className="img-wrapper">
                <img src="images/testiomonial-slider/user-3.png" alt="User" />
              </div>
              <div className="content">
                <h5 className="user-name">Camron Will</h5>
                <p className="title">Indonesian tourists</p>
              </div>
            </div>
            <div className="rating">
              <div className="ratting-inner">
                <span>
                  <i className="fa-solid fa-star" />
                </span>
                <span className="counter">3.5</span>
              </div>
            </div>
          </div>
          <div className="desc-inner">
            <p className="desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia conse quuntur ma
            </p>
          </div>
        </div>
        {/* Single Card End */}
        {/* Single Card Start */}
        <div className="testimonial-card-two">
          <div className="user-meta-info">
            <div className="user-info-inner">
              <div className="img-wrapper">
                <img src="images/testiomonial-slider/user-4.png" alt="User" />
              </div>
              <div className="content">
                <h5 className="user-name">Annette Black</h5>
                <p className="title">Indonesian tourists</p>
              </div>
            </div>
            <div className="rating">
              <div className="ratting-inner">
                <span>
                  <i className="fa-solid fa-star" />
                </span>
                <span className="counter">3.5</span>
              </div>
            </div>
          </div>
          <div className="desc-inner">
            <p className="desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia conse quuntur ma
            </p>
          </div>
        </div>
        {/* Single Card End */}
        {/* Single Card Start */}
        <div className="testimonial-card-two">
          <div className="user-meta-info">
            <div className="user-info-inner">
              <div className="img-wrapper">
                <img src="images/testiomonial-slider/user-5.png" alt="User" />
              </div>
              <div className="content">
                <h5 className="user-name">Savan Nguyen</h5>
                <p className="title">Indonesian tourists</p>
              </div>
            </div>
            <div className="rating">
              <div className="ratting-inner">
                <span>
                  <i className="fa-solid fa-star" />
                </span>
                <span className="counter">3.5</span>
              </div>
            </div>
          </div>
          <div className="desc-inner">
            <p className="desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia conse quuntur ma
            </p>
          </div>
        </div>
        {/* Single Card End */}
        {/* Single Card Start */}
        <div className="testimonial-card-two">
          <div className="user-meta-info">
            <div className="user-info-inner">
              <div className="img-wrapper">
                <img src="images/testiomonial-slider/user-3.png" alt="User" />
              </div>
              <div className="content">
                <h5 className="user-name">Camron Will</h5>
                <p className="title">Indonesian tourists</p>
              </div>
            </div>
            <div className="rating">
              <div className="ratting-inner">
                <span>
                  <i className="fa-solid fa-star" />
                </span>
                <span className="counter">3.5</span>
              </div>
            </div>
          </div>
          <div className="desc-inner">
            <p className="desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia conse quuntur ma
            </p>
          </div>
        </div>
        {/* Single Card End */}
        {/* Single Card Start */}
        <div className="testimonial-card-two">
          <div className="user-meta-info">
            <div className="user-info-inner">
              <div className="img-wrapper">
                <img src="images/testiomonial-slider/user-4.png" alt="User" />
              </div>
              <div className="content">
                <h5 className="user-name">Annette Black</h5>
                <p className="title">Indonesian tourists</p>
              </div>
            </div>
            <div className="rating">
              <div className="ratting-inner">
                <span>
                  <i className="fa-solid fa-star" />
                </span>
                <span className="counter">3.5</span>
              </div>
            </div>
          </div>
          <div className="desc-inner">
            <p className="desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia conse quuntur ma
            </p>
          </div>
        </div>
        {/* Single Card End */}
        {/* Single Card Start */}
        <div className="testimonial-card-two">
          <div className="user-meta-info">
            <div className="user-info-inner">
              <div className="img-wrapper">
                <img src="images/testiomonial-slider/user-5.png" alt="User" />
              </div>
              <div className="content">
                <h5 className="user-name">Savan Nguyen</h5>
                <p className="title">Indonesian tourists</p>
              </div>
            </div>
            <div className="rating">
              <div className="ratting-inner">
                <span>
                  <i className="fa-solid fa-star" />
                </span>
                <span className="counter">3.5</span>
              </div>
            </div>
          </div>
          <div className="desc-inner">
            <p className="desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia conse quuntur ma
            </p>
          </div>
        </div>
        {/* Single Card End */}
      </div>
    </div>
  </div>
  {/* Testimonial Slider Area End */}
</>

  );
};

export default About;
