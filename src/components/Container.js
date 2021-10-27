import Header from "./header/Header";
import Footer from "./footer/Footer";

const Container_960_12 = (props) => {
  return (
    <div id="container960" className={props.expandValue}>
      <Header grids="grid_12"/>
      <Header grids="grid_4"/>
      <Header grids="grid_12"/>
      
      <div>
        <p>This is some content to test the layout scaling
        This is some content to test the layout scaling
        This is some content to test the layout scaling
        This is some content to test the layout scaling
        This is some content to test the layout scaling
        This is some content to test the layout scaling
        This is some content to test the layout scaling
        This is some content to test the layout scaling
        This is some content to test the layout scaling
        This is some content to test the layout scaling
        This is some content to test the layout scaling
        This is some content to test the layout scaling
        This is some content to test the layout scaling</p>
      </div>
      <Footer grids="grid_8 push_2"/>
    </div>
  );
}

export default Container_960_12;
