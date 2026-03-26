import "../../css/merchandise/BenefitItem.css"


const BenefitItem = ({ icon, title, description }) => (
  <div className="benefit-item">
    <div className="benefit-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default BenefitItem;