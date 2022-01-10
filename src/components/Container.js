import Header from "./header/Header";
import Footer from "./footer/Footer";

//import ClientRegForm from "./app/clientreg/ClientRegForm.js"
const Container_960_12 = (props) => {
  return (
    <div id="container960" className={props.expandValue}>
      <Header grids="grid_12"/>
      
      <Footer grids="grid_8 push_2"/>
    </div>
  );
}

export default Container_960_12;
