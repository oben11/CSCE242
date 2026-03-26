import "../css/Home.css";
import Features from "../componets/home/Features";
import SignatureRoast from "../componets/home/SignatureRoast";
import Hero from "../componets/Hero"
import home_splash from "../media/home_splash.jpg"

const Home = () => {
    return (

        <main id="home" className="main-content">

        <Hero
        title="Welcome to Ollie's Coffee Company"
        description="Crafting the perfect cup since 1987."
        backgroundImage={home_splash}
        animate={true}
        buttons={[
            { label: "Order Now", href: "menu.html", style: "primary-dark" },
            { label: "Join Rewards", href: "rewards.html", style: "primary" },
        ]}
        />
            <Features />
            <SignatureRoast />
        </main>
    );
};

export default Home;