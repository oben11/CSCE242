import FeatureCard from "./FeatureCard";

const features = [
    {
        icon: "coffee",
        title: "Premium Beans",
        description: "Ethically sourced from the finest coffee regions around the world.",
    },
    {
        icon: "card_giftcard",
        title: "Rewards Program",
        description: "Earn points with every purchase and unlock exclusive benefits.",
    },
    {
        icon: "location_on",
        title: "Multiple Locations",
        description: "Find us in neighborhoods across the city, ready to serve you.",
    },
];

const Features = () => {
    return (
        <section className="features">
            <div className="features-grid">
                {features.map((feature) => (
                    <FeatureCard
                        key={feature.title}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default Features;
