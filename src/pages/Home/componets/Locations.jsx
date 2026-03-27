import "../css/Locations.css";
import locations from "../../../json/Locations.json";

const Locations = () => {
  return (
    <section className="locations">
      <div className="location-content">
        <h2>New Locations!</h2>
        <p>
          Sign up for our rewards program and earn stars!
          Explore our membership tiers for exclusive deals and merch
        </p>
      </div>

      <div className="location-cards">
        {locations.slice(0, 3).map((loc, index) => (
          <div
            className="location-card"
            key={loc.seed}
            style={{ "--card-index": index }}
          >
            <img
              src={`https://picsum.photos/seed/${loc.seed}/600/400`}
              alt={loc.alt}
              className="location-img"
            />
            <h3>{loc.name}</h3>
            <p>{loc.address}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Locations;