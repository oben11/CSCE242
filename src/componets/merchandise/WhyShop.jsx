import "../../css/merchandise/WhyShop.css"
import BenefitsGrid from "./BenefitsGrid.jsx"

const DEFAULT_BENEFITS = [
  {
    icon: "✓",
    title: "Quality Materials",
    description: "Every product is made with premium materials built to last",
  },
  {
    icon: "🌱",
    title: "Sustainable",
    description: "Eco-friendly materials and ethical manufacturing practices",
  },
  {
    icon: "★",
    title: "Rewards Points",
    description: "Earn double stars on all merchandise purchases",
  },
];
 
const WhyShop = ({ title = "Why Shop Ollie's Merch?", benefits = DEFAULT_BENEFITS }) => (
  <section className="why-shop">
    <div className="why-shop-content">
      <h2 className="section-title">{title}</h2>
      <BenefitsGrid benefits={benefits} />
    </div>
  </section>
);

export default WhyShop;