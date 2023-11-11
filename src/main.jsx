import React  from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Home from "./component/home/index";
import About from "./component/about/about";
import Tour from "./component/tour/tour";
import Tourdetails from "./component/tour/tourdetails";
import Contact from "./component/contact/contact";



const Main = () => {

  return (
    <>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/tourdetails" element={<Tourdetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
        </div>
    </>
  );
};

export default Main;
