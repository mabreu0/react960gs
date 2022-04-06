import React from 'react';
import "./header.css";
import MainMenu from "../nav/MainMenu.js";

const Header = (props) => {
  return (
    <div id="header_main" className={props.grids}>
      <MainMenu />
    </div>
  );
}

export default Header;