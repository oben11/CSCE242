import { Link } from "react-router-dom";
import "../css/RewardsCTA.css";

export default function RewardsCTA() {
    return (
        <section className="cta-section">
            <h2>Ready to Start Earning?</h2>
            <p>
                Join thousands of coffee lovers already enjoying exclusive rewards and
                benefits.
            </p>
            <Link to="#" className="btn btn-secondary">
                Create Your Account
            </Link>
        </section>
    );
}
