import React from "react";


const Tour = () => {
  return (
    <>
    {/* Menu Sidebar Section Start */}
    <div className="body-overlay" />
    {/* Location Area Start */}
    <div className="tour-area">
      <div className="location-area style-1">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title  align-content-center justify-content-center text-center">
                <div className="sec-content">
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
          <div className="row">
            <div className="col-lg-12">
              <ul className="portfolio-filter">
                <li className="active" data-filter="*">
                  All
                </li>
                <li data-filter=".resort">Resort</li>
                <li data-filter=".mountain">Mountain Hiking</li>
                <li data-filter=".beach">Beach</li>
                <li data-filter=".forest">Forest</li>
              </ul>
            </div>
          </div>
          <div className="isotope-grid">
            <div className="row gy-4">
              {/*- Single Location Start !*/}
              <div
                className="col-lg-4 col-md-6 masonry-portfolio-item resort beach wow fadeInUp"
                data-wow-delay="0s"
              >
                <div className="location-card style-2">
                  <div className="image-wrapper">
                    <a href="tour-details.html" className="image-inner">
                      <img
                        src="images/location-card/img13.jpg"
                        alt="Location Image"
                      />
                    </a>
                    <div className="favourite-icon">
                      <i className="fa-solid fa-heart" />
                    </div>
                  </div>
                  <div className="content-wrapper">
                    <div className="content-inner">
                      <h5 className="price">
                        $<span className="counter">62.24</span>
                      </h5>
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
                          <p className="title">4 Days</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*- Single Location End !*/}
              {/*- Single Location Start !*/}
              <div
                className="col-lg-4 col-md-6 masonry-portfolio-item mountain forest wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="location-card style-2">
                  <div className="image-wrapper">
                    <a href="tour-details.html" className="image-inner">
                      <img
                        src="images/location-card/img88.jpg"
                        alt="Location Image"
                      />
                    </a>
                    <div className="favourite-icon">
                      <i className="fa-solid fa-heart" />
                    </div>
                  </div>
                  <div className="content-wrapper">
                    <div className="content-inner">
                      <h5 className="price">
                        $<span className="counter">64.48</span>
                      </h5>
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
              <div
                className="col-lg-4 col-md-6 masonry-portfolio-item beach forest wow fadeInUp"
                data-wow-delay=".8s"
              >
                <div className="location-card style-2">
                  <div className="image-wrapper">
                    <a href="tour-details.html" className="image-inner">
                      <img
                        src="images/location-card/img9.jpg"
                        alt="Location Image"
                      />
                    </a>
                    <div className="favourite-icon">
                      <i className="fa-solid fa-heart" />
                    </div>
                  </div>
                  <div className="content-wrapper">
                    <div className="content-inner">
                      <h5 className="price">
                        $<span className="counter">66.62</span>
                      </h5>
                      <h3 className="content-title">
                        <a href="tour-details.html">Adventure maldivs</a>
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
              <div
                className="col-lg-4 col-md-6 masonry-portfolio-item resort beach wow fadeInUp"
                data-wow-delay="1.2s"
              >
                <div className="location-card style-2">
                  <div className="image-wrapper">
                    <a href="tour-details.html" className="image-inner">
                      <img
                        src="images/location-card/img10.jpg"
                        alt="Location Image"
                      />
                    </a>
                    <div className="favourite-icon">
                      <i className="fa-solid fa-heart" />
                    </div>
                  </div>
                  <div className="content-wrapper">
                    <div className="content-inner">
                      <h5 className="price">
                        $<span className="counter">74.66</span>
                      </h5>
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
              <div
                className="col-lg-4 col-md-6 masonry-portfolio-item mountain forest wow fadeInUp"
                data-wow-delay="1.6s"
              >
                <div className="location-card style-2">
                  <div className="image-wrapper">
                    <a href="tour-details.html" className="image-inner">
                      <img
                        src="images/location-card/img11.jpg"
                        alt="Location Image"
                      />
                    </a>
                    <div className="favourite-icon">
                      <i className="fa-solid fa-heart" />
                    </div>
                  </div>
                  <div className="content-wrapper">
                    <div className="content-inner">
                      <h5 className="price">
                        $<span className="counter">72.28</span>
                      </h5>
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
              <div
                className="col-lg-4 col-md-6 masonry-portfolio-item resort beach wow fadeInUp"
                data-wow-delay="2s"
              >
                <div className="location-card style-2">
                  <div className="image-wrapper">
                    <a href="tour-details.html" className="image-inner">
                      <img
                        src="images/location-card/img12.jpg"
                        alt="Location Image"
                      />
                    </a>
                    <div className="favourite-icon">
                      <i className="fa-solid fa-heart" />
                    </div>
                  </div>
                  <div className="content-wrapper">
                    <div className="content-inner">
                      <h5 className="price">
                        $<span className="counter">68.44</span>
                      </h5>
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
          <div className="basic-pagination">
            <ul className="justify-content-center">
              <li>
                <span aria-current="page" className="page-numbers current">
                  1
                </span>
              </li>
              <li>
                <a className="page-numbers" href="#">
                  2
                </a>
              </li>
              <li>
                <a className="page-numbers" href="#">
                  3
                </a>
              </li>
              <li>
                <span className="page-numbers dots">…</span>
              </li>
              <li>
                <a className="page-numbers" href="#">
                  5
                </a>
              </li>
              <li>
                <a className="next page-numbers" href="#">
                  <i className="fa fa-arrow-right" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* Location Area End */}
  </>
  
  );
};

export default Tour;