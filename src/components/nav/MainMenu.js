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

                        <ul className="sub">
                            <li><a href="/lobbi">Lobbier</a></li>
                            <li><a href="/inhouse">inHouse</a></li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default MainMenu;