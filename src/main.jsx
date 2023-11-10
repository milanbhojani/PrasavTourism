import React  from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/home";
import About from "./component/about/about";
import Tour from "./component/tour/tour";
import Contact from "./component/contact/contact";
import Header from "./header";
import Footer from "./footer";


const Main = () => {

  return (
    <>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
        </div>
    </>
  );
};

export default Main;
