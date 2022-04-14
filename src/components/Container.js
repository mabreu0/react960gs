import React from 'react';
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Home from "../pages/home/Home";
import ContactForm from "../pages/contact/ContactForm";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PropTypes from 'prop-types';

const Container96012 = (props) => {

  return (
    <BrowserRouter>
      <div id="container960" data-testid="container_gs960" className={props.expandValue} >

        <Header />

        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/contact" element={ <ContactForm /> } />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
  );
}
Container96012.propTypes = {
  expandValue: PropTypes.string
}

export default Container96012;