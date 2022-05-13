import React from 'react';
import "./mainMenu.css";
import { Link } from 'react-router-dom';

const MainMenu = (props) => {
    return(
        <div id="mainMenu">
            <nav>
                <ul className="primary">
                    <li>
                       <Link to="/">Ancus</Link>
                       <ul className="sub">
                        <Link to="/equipo">dTeam</Link>
                       </ul>
                    </li>

                    <li>
                        <Link to="/software">Software</Link>
                    </li>

                    <li>
                        <Link to="/cotizar">Cotizar</Link>
                    </li>

                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>

                    <li>
                        <Link to="/admin/prices">Admin</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default MainMenu;