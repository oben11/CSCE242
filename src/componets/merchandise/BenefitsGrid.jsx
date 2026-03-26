import BenefitItem from "./BenefitItem";

const BenefitsGrid = ({ benefits }) => (
  <div className="benefits-grid">
    {benefits.map((benefit, index) => (
      <BenefitItem
        key={index}
        icon={benefit.icon}
        title={benefit.title}
        description={benefit.description}
      />
    ))}
  </div>
);

export default BenefitsGrid;