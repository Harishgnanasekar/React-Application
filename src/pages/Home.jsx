import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const [featuredHotels, setFeaturedHotels] = useState([]);

  useEffect(() => {
    // Simulating API call with setTimeout
    const timer = setTimeout(() => {
      setFeaturedHotels([
        {
          id: 1,
          name: 'The Grand Palace',
          image: '🏨',
          rating: 4.8,
          price: '$150/night',
          location: 'Downtown'
        },
        {
          id: 2,
          name: 'Oceanview Resort',
          image: '🏝️',
          rating: 4.6,
          price: '$120/night',
          location: 'Beachfront'
        },
        {
          id: 3,
          name: 'Mountain Serenity',
          image: '⛰️',
          rating: 4.7,
          price: '$130/night',
          location: 'Mountains'
        },
      ]);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to LuxeStay</h1>
          <p>Discover Luxury Hotels Around the World</p>
          <Link to="/hotels" className="cta-button">
            Explore Hotels
          </Link>
        </div>
        <div className="hero-image">🌍</div>
      </section>

      <section className="featured-section">
        <div className="container">
          <h2>Featured Hotels</h2>
          <div className="hotels-grid">
            {featuredHotels.map((hotel) => (
              <div key={hotel.id} className="hotel-card">
                <div className="hotel-image">{hotel.image}</div>
                <h3>{hotel.name}</h3>
                <p className="location">📍 {hotel.location}</p>
                <p className="rating">⭐ {hotel.rating}</p>
                <p className="price">{hotel.price}</p>
                <Link to="/hotels" className="view-btn">
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stat">
            <h3>500+</h3>
            <p>Hotels Worldwide</p>
          </div>
          <div className="stat">
            <h3>50K+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat">
            <h3>24/7</h3>
            <p>Customer Support</p>
          </div>
        </div>
      </section>
    </div>
  );
}
