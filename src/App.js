import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './components/960web/css/min/960_12_col.css';
import ContactForm from './pages/contact/ContactForm.js';
import MainMenu from './components/nav/MainMenu';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
     <div className="App container_12">
       <Header />

        <Routes>
          <Route path="/contact" element={ <ContactForm /> } />
        </Routes>

        <Footer />
      </div> 
    </BrowserRouter>
  );
};

export default App;