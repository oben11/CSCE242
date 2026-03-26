import "../css/MemberBenefits.css";

const benefits = [
    {
        title: "Free Birthday Drink",
        description:
            "Celebrate your special day with a complimentary beverage of your choice",
    },
    {
        title: "Earn Stars",
        description: "Get 1 star for every dollar spent. 100 stars = $10 reward",
    },
    {
        title: "Exclusive Offers",
        description: "Access members-only promotions and seasonal specials",
    },
    {
        title: "Early Access",
        description: "Be the first to try new drinks and seasonal favorites",
    },
];

export default function MemberBenefits() {
    return (
        <section className="benefits">
            <h2 className="section-title">Member Benefits</h2>
            <div className="benefits-grid">
                {benefits.map((benefit) => (
                    <div className="benefit-card" key={benefit.title}>
                        <h3>{benefit.title}</h3>
                        <p>{benefit.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
