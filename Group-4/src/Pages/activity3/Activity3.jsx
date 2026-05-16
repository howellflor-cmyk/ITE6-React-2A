import { useState, useEffect } from 'react';
import HeroCard from '../../assets/components/Herocard/Herocard';
import './Activity3.css';

const Activity3 = () => {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const response = await fetch('/data.json');
        const jsonData = await response.json();
        setHeroes(jsonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchHeroes();
  }, []);

  if (loading) return <div className="loading">Loading MLBB Heroes...</div>;

  return (
    <main className="container3">
      <h1>MLBB Heroes</h1>
      <div className="card-grid">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </div>
    </main>
  );
};

export default Activity3;