import React from "react";


const Tourdetails = () => {
  return (
<>
  {/* Tour Details Area Start */}
  <div className="blog-area tour-details">
    <div className="container">
      <div className="row">
        <div className=" blog-details-wrapper">
          {/* Post Details Start */}
          <article className="single-post-item">
            <div className="post-title-wrapper">
              <h3 className="post-title">
                <a href="blog-details.html">The beauty of Greece</a>
              </h3>
              <div className="rating">
                <div className="ratting-inner">
                  <span>
                    <i className="fa-solid fa-star" />
                  </span>
                  <span className="counter">3.5</span>
                </div>
              </div>
            </div>
            <div className="post-meta style-2">
              <div className="post-meta-inner">
                <div className="date-info">
                  <i className="fa-solid fa-location-dot" />
                  <p className="date">Agoda, surulere lagos</p>
                </div>
                <div className="time-info">
                  <i className="fa-solid fa-clock" />
                  <p className="time">4 Days</p>
                </div>
              </div>
              <h5 className="price">$62.24</h5>
            </div>
            <div className="post-thumbnail">
              <a href="#">
                <img src="images/tour-details/thumbnail.jpg" alt="Blog Image" />
              </a>
            </div>
            <div className="post-content-wrapper">
              <div className="post-content">
                <h4>About Greece</h4>
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, laborem consectectur, adipisci velit, sed quia non
                  numquam eius modi temporadew incisdunt ut labore et dolore
                  magnam aliquam Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui offici deserunt mollit anim id est enim ad
                  minim veniam, quis nostrud exercitation ullam co labr is nisi
                  ut aliquip ex Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  con. Duis aute irure dolor in reprehenderit in voluptate
                  velitesse cillum dolore eu fugiat nulla pariatu sint occaecat
                  cupidatat non proident, sunt in culpa
                </p>
                <h4>Image from travello</h4>
                <div className="post-gallery-columns-2">
                  <div className="post-gallery-item">
                    <img src="images/tour-details/image-1.jpg" alt="image" />
                  </div>
                  <div className="post-gallery-item">
                    <img src="images/tour-details/image-2.jpg" alt="image" />
                  </div>
                  <div className="post-gallery-item">
                    <img src="images/tour-details/image-3.jpg" alt="image" />
                  </div>
                  <div className="post-gallery-item">
                    <img src="images/tour-details/image-4.jpg" alt="image" />
                  </div>
                </div>
                <h4>Tour map</h4>
                <div className="map-wedget">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115860.91759646642!2d89.28780421873043!3d24.84151459710791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc54e7e81df441%3A0x27133ed921fe73f4!2sBogura!5e0!3m2!1sen!2sbd!4v1684842047185!5m2!1sen!2sbd"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </article>
          {/* Post Details End */}
        </div>
      </div>
    </div>
  </div>
  {/* Tour Details Area Start */}
</>

  );
};

export default Tourdetails;