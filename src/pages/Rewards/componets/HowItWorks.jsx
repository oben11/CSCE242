import "../css/HowItWorks.css";

export default function HowItWorks() {
    const steps = [
        {
            number: 1,
            title: "Sign Up",
            description: "Create your free account and start earning stars immediately",
        },
        {
            number: 2,
            title: "Earn Stars",
            description: "Collect stars with every purchase at any Ollie's location",
        },
        {
            number: 3,
            title: "Redeem Rewards",
            description: "Use your stars for free drinks, food, and exclusive perks",
        },
    ];

    return (
        <section className="how-it-works">
            <h2 className="section-title">How It Works</h2>
            <div className="steps">
                {steps.map((step) => (
                    <div className="step" key={step.number}>
                        <div className="step-number">{step.number}</div>
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
