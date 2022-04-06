import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from "./header/Header";
import Footer from "./footer/Footer";
import ContactForm from "../pages/contact/ContactForm";
import Home from "../pages/home/Home";

//valid grids
const grids = [
  "container_12", 
  "container_16", 
  "container_24"
];

const Container96012 = (props) => {
  const err_message = `Can't build UI as 960gs provided value not valid.. Valids :: ${grids}`;

  if(grids.includes(props.expandValue) === false) {
    throw Error(err_message);
  }

  return (
    <BrowserRouter>
      <div id="container960" className={props.expandValue} >
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

export default Container96012;