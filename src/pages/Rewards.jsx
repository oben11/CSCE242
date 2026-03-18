import { Link } from "react-router-dom";

export default function Rewards() {
    return (
        <>
            <title>Rewards Program - Ollie's Coffee Company</title>
            <meta charset="UTF-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Lora:wght@400;500;600&display=swap" rel="stylesheet"></link>

            <section className="hero">
                <div className="hero-content">
                    <h1>Ollie's Rewards Program</h1>
                    <p>
                        Join our rewards program and start earning stars with every purchase.
                        <br />
                        Unlock exclusive benefits and free drinks!
                    </p>
                    <Link to="#" className="btn btn-primary">
                        Join Now - It's Free!
                    </Link>
                </div>
            </section>

            <section className="how-it-works">
                <h2 className="section-title">How It Works</h2>

                <div className="steps">
                    <div className="step">
                        <div className="step-number">1</div>
                        <h3>Sign Up</h3>
                        <p>Create your free account and start earning stars immediately</p>
                    </div>

                    <div className="step">
                        <div className="step-number">2</div>
                        <h3>Earn Stars</h3>
                        <p>Collect stars with every purchase at any Ollie's location</p>
                    </div>

                    <div className="step">
                        <div className="step-number">3</div>
                        <h3>Redeem Rewards</h3>
                        <p>Use your stars for free drinks, food, and exclusive perks</p>
                    </div>
                </div>
            </section>

            <section className="benefits">
                <h2 className="section-title">Member Benefits</h2>

                <div className="benefits-grid">
                    <div className="benefit-card">
                        <h3>Free Birthday Drink</h3>
                        <p>
                            Celebrate your special day with a complimentary beverage of your
                            choice
                        </p>
                    </div>

                    <div className="benefit-card">
                        <h3>Earn Stars</h3>
                        <p>Get 1 star for every dollar spent. 100 stars = $10 reward</p>
                    </div>

                    <div className="benefit-card">
                        <h3>Exclusive Offers</h3>
                        <p>Access members-only promotions and seasonal specials</p>
                    </div>

                    <div className="benefit-card">
                        <h3>Early Access</h3>
                        <p>Be the first to try new drinks and seasonal favorites</p>
                    </div>
                </div>
            </section>

            <section className="tiers">
                <h2 className="section-title">Membership Tiers</h2>

                <div className="tier-cards">
                    <div className="tier-card bronze">
                        <h3 className="tier-name">Bronze</h3>
                        <ul>
                            <li>Earn 1 star per $1</li>
                            <li>Free birthday drink</li>
                            <li>Mobile ordering</li>
                        </ul>
                    </div>

                    <div className="tier-card silver">
                        <h3 className="tier-name">Silver</h3>
                        <ul>
                            <li>All Bronze benefits</li>
                            <li>Earn 1.25 stars per $1</li>
                            <li>Monthly bonus offers</li>
                            <li>Priority support</li>
                        </ul>
                    </div>

                    <div className="tier-card gold">
                        <h3 className="tier-name">Gold</h3>
                        <ul>
                            <li>All Silver benefits</li>
                            <li>Earn 1.5 stars per $1</li>
                            <li>Free drink on signup anniversary</li>
                            <li>Exclusive merchandise access</li>
                            <li>VIP event invitations</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="redemption">
                <div className="redemption-content">
                    <h2 className="section-title">Star Redemption Guide</h2>

                    <div className="redemption-list">
                        <div className="redemption-item">
                            <span>Any Size Drip Coffee</span>
                            <span>50 stars</span>
                        </div>

                        <div className="redemption-item">
                            <span>Any Size Hot Tea</span>
                            <span>50 stars</span>
                        </div>

                        <div className="redemption-item">
                            <span>Espresso Drink (up to Grande)</span>
                            <span>100 stars</span>
                        </div>

                        <div className="redemption-item">
                            <span>Any Cold Brew or Iced Coffee</span>
                            <span>100 stars</span>
                        </div>

                        <div className="redemption-item">
                            <span>Pastry or Breakfast Item</span>
                            <span>125 stars</span>
                        </div>

                        <div className="redemption-item">
                            <span>Any Lunch Item</span>
                            <span>200 stars</span>
                        </div>

                        <div className="redemption-item">
                            <span>Retail Coffee Bag (12oz)</span>
                            <span>300 stars</span>
                        </div>
                    </div>
                </div>
            </section>

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
        </>
    );
}