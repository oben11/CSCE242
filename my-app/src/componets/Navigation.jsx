import {Link} from "react-router-dom";
import "../css/Navigation.css";



const Navigation = () => {
    return (
    <header>
        <nav>
            <section>
                <Link to="/home" class="logo">Ollie's</Link>
            </section>
            <section>
                <script src="toggleNav.js" defer></script>
                <button id="hamburger" class="hamburger">☰</button>
                <ul>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/rewards">Rewards</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/merchandise">Merchandise</Link></li>
                </ul>
            </section>
        </nav>
    </header>
    );
};

export default Navigation;