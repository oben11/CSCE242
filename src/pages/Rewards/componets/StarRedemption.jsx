import "../css/StarRedemption.css";

const redemptionItems = [
    { label: "Any Size Drip Coffee", stars: 50 },
    { label: "Any Size Hot Tea", stars: 50 },
    { label: "Espresso Drink (up to Grande)", stars: 100 },
    { label: "Any Cold Brew or Iced Coffee", stars: 100 },
    { label: "Pastry or Breakfast Item", stars: 125 },
    { label: "Any Lunch Item", stars: 200 },
    { label: "Retail Coffee Bag (12oz)", stars: 300 },
];

export default function StarRedemption() {
    return (
        <section className="redemption">
            <div className="redemption-content">
                <h2 className="section-title">Star Redemption Guide</h2>
                <div className="redemption-list">
                    {redemptionItems.map((item) => (
                        <div className="redemption-item" key={item.label}>
                            <span>{item.label}</span>
                            <span className="redemption-stars">{item.stars} stars</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
