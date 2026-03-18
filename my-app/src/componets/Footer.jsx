import {Link} from "react-router-dom";
import "../css/Footer.css";

const Footer = () => {
    return (
    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <div class="logo">Ollie's Coffee Company</div>

                <div class="tagline">Brewing excellence since 1987. Every cup tells a story.</div>
            </div>
            <div class="footer-section">
                <h4>Quick Links</h4>
                <ul>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/rewards">Rewards</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/merchandise">Merchandise</Link></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Connect</h4>
                <p>Follow us on social media</p>
                <p>Email: hello@olliescoffee.com</p>
                <p>Phone: (555) BREW-123</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 Ollie's Coffee Company. All rights reserved.</p>
        </div>
    </footer>
    );
};

export default Footer;