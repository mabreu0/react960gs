import "./mainMenu.css";
import { Link } from 'react-router-dom';
import Container96012 from "../Container";

const MainMenu = (props) => {
    return(
        <div id="mainMenu">
            <nav>
                <ul className="primary">
                    <li>
                       <a href="/">Home</a>

                        <ul className="sub">
                            <li><a href="/bulldog">Bulldog</a></li>
                            <li><a href="/mastiff">Mastiff</a></li>
                            <li><a href="/mutt">Mutt</a></li>
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