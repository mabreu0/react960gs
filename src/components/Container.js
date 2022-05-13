import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "../pages/home/Home";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import ContactForm from "../pages/contact/ContactForm";

import Cotizacion from '../pages/secured/Cotizacion';
import Software from '../pages/software/Software';
import Admin from '../pages/admin/Admin';

import { PermanentBrowserStorage } from './utils/browserStorage';
import SecureChild from './utils/security/secureComponent';

const Container96012 = (props) => {
  //const store = PermanentBrowserStorage;
  //let authorized = false;

  return (
    <BrowserRouter>
      <div id="container960" className={props.expandValue} >
        <Header />

        <Routes>
          <Route path="/" element={ <Home /> } />
          {/* { user && <Route path="/contact" element={ <ContactForm /> } />}*/}
          <Route exact path="/contact" element={ <ContactForm /> } />

          <Route exact path="/cotizar" 
            element={ <SecureChild> <Cotizacion/> </SecureChild> } />

          <Route exact path="/software" 
            element={<Software /> } />

          <Route path="/admin/prices"
            element={ <SecureChild> <Admin/> </SecureChild> } />

        </Routes>

        <Footer />
      </div>
      </BrowserRouter>
  );
}

export default Container96012;