import Header from "./header/Header";
import Footer from "./footer/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContactForm from "../pages/contact/ContactForm";
import Home from "../pages/home/Home";

const Container96012 = (props) => {
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