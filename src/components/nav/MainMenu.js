import "./mainMenu.css";


const MainMenu = (props) => {
    return(
        <div id="mainMenu">
            <nav>
                <ul className="primary">
                    <li>
                        <a href="">Dog</a>

                        <ul className="sub">
                            <li><a href="">Bulldog</a></li>
                            <li><a href="">Mastiff</a></li>
                            <li><a href="">Labrador</a></li>
                            <li><a href="">Mutt</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="">Cat</a>

                        <ul className="sub">
                            <li><a href="">Tabby</a></li>
                            <li><a href="">Black Cat</a></li>
                            <li><a href="">Wrinkly Cat</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="">Fox</a>

                        <ul className="sub">
                            <li><a href="">Tabby</a></li>
                            <li><a href="">Black Cat</a></li>
                            <li><a href="">Wrinkly Cat</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default MainMenu;