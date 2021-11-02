import "./header.css";
import Menu from "../menu/Menu.js";

const Header = (props) => {
  return (
    <div id="header_main" className={props.grids}>
			<Menu />
    </div>
  );
}

export default Header;
