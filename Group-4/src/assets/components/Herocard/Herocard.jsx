import "./Herocard.css";

const HeroCard = ({ hero }) => {
  return (
    <div className="hero-card">
      <h3>{hero.name}</h3>
      <p><strong>Role:</strong> {hero.role}</p>
      <p><strong>Specialty:</strong> {hero.Specialty}</p>
    </div>
  );
};

export default HeroCard;