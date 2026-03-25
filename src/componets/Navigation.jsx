import { Link } from "react-router-dom";
import "../css/Navigation.css";
import { useState } from "react";



const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <nav>
                <div className="nav-top">
                    <Link to="/home" className="logo">Ollie's</Link>
                    <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
                </div>

                <ul className={menuOpen ? "nav-links open" : "nav-links"}>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/rewards">Rewards</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/merchandise">Merchandise</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;