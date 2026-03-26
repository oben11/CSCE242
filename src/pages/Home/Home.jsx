import Features from "./componets/Features";
import SignatureRoast from "./componets/SignatureRoast";
import Hero from "../../componets/Hero"
import home_splash from "./data/home_splash.jpg"

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