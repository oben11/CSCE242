import "../css/Home.css";

const Home = () => {
    return (

        <main id="home" className="main-content">
            <title>Ollie's Coffee Company - Crafting the perfect cup since 1987</title>
            <meta charset="UTF-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Lora:wght@400;500;600&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"></link>


            <section class="hero animate splash_1">
                <div class="hero-content">
                    <h1>Welcome to Ollie's Coffee Company</h1>
                    <p>Crafting the perfect cup since 1987. Experience the rich tradition of expertly roasted coffee.</p>
                    <div class="cta-buttons">
                        <a href="menu.html" class="btn btn-primary btn-dark">Order Now</a>
                        <a href="rewards.html" class="btn btn-primary">Join Rewards</a>
                    </div>
                </div>
            </section>

            <section class="features">
                <div class="features-grid">
                    <div class="feature-card">
                        <span class="material-symbols-outlined feature-icon">coffee</span>
                        <h3>Premium Beans</h3>
                        <p>Ethically sourced from the finest coffee regions around the world.</p>
                    </div>

                    <div class="feature-card">
                        <span class="material-symbols-outlined feature-icon">card_giftcard</span>
                        <h3>Rewards Program</h3>
                        <p>Earn points with every purchase and unlock exclusive benefits.</p>
                    </div>

                    <div class="feature-card">
                        <span class="material-symbols-outlined feature-icon">location_on</span>
                        <h3>Multiple Locations</h3>
                        <p>Find us in neighborhoods across the city, ready to serve you.</p>
                    </div>
                </div>
            </section>
            <section class="signature">
                <div class="signature-content">
                    <h2>Our Signature Roast</h2>
                    <p>Experience our award-winning house blend, carefully crafted to deliver a smooth, rich flavor with notes of chocolate and caramel. Each batch is roasted to perfection by our master roasters.</p>
                    <a href="menu.html" class="btn btn-primary">Explore Menu</a>
                </div>
                <div class="signature-image">
                    <img src="https://images.unsplash.com/photo-1669162364316-a74b2d661d1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGFydCUyMGNvZmZlZXxlbnwxfHx8fDE3Njk5MzQyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"></img>
                </div>
            </section>

        </main>

    );
};

export default Home;