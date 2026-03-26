import "../css/MembershipTiers.css";

const tiers = [
    {
        name: "Bronze",
        className: "bronze",
        perks: [
            "Earn 1 star per $1",
            "Free birthday drink",
            "Mobile ordering",
        ],
    },
    {
        name: "Silver",
        className: "silver",
        perks: [
            "All Bronze benefits",
            "Earn 1.25 stars per $1",
            "Monthly bonus offers",
            "Priority support",
        ],
    },
    {
        name: "Gold",
        className: "gold",
        perks: [
            "All Silver benefits",
            "Earn 1.5 stars per $1",
            "Free drink on signup anniversary",
            "Exclusive merchandise access",
            "VIP event invitations",
        ],
    },
];

export default function MembershipTiers() {
    return (
        <section className="tiers">
            <h2 className="section-title">Membership Tiers</h2>
            <div className="tier-cards">
                {tiers.map((tier) => (
                    <div className={`tier-card ${tier.className}`} key={tier.name}>
                        <h3 className="tier-name">{tier.name}</h3>
                        <ul>
                            {tier.perks.map((perk) => (
                                <li key={perk}>{perk}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
