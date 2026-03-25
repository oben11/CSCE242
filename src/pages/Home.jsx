import "../css/Home.css";
import Features from "../componets/home/Features";
import SignatureRoast from "../componets/home/SignatureRoast";



const Home = () => {
    return (

        <main id="home" className="main-content">

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
            <Features />
            <SignatureRoast />
        </main>
    );
};

export default Home;