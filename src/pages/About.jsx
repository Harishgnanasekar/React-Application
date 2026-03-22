import './About.css';

export default function About() {
  return (
    <div className="about">
      <div className="about-hero">
        <h1>About LuxeStay</h1>
        <p>Your Gateway to Luxury Accommodation</p>
      </div>

      <div className="container">
        <section className="about-content">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Founded in 2010, LuxeStay has become a trusted name in luxury hospitality.
              We started with a simple mission: to provide travelers with exceptional
              hotel experiences at competitive prices.
            </p>
            <p>
              Today, we partner with over 500 premium hotels across 50 countries,
              serving more than 50,000 satisfied customers annually.
            </p>
          </div>
          <div className="about-icon">📖</div>
        </section>

        <section className="mission-vision">
          <div className="mission">
            <h3>🎯 Our Mission</h3>
            <p>
              To revolutionize the way people book hotels by providing
              unbeatable prices, exceptional service, and unforgettable
              travel experiences.
            </p>
          </div>
          <div className="vision">
            <h3>👁️ Our Vision</h3>
            <p>
              To become the world's most trusted and innovative hotel
              booking platform, connecting travelers with their perfect
              accommodation.
            </p>
          </div>
        </section>

        <section className="values">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💎</div>
              <h4>Excellence</h4>
              <p>Delivering exceptional quality in every interaction</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h4>Integrity</h4>
              <p>Building trust through honesty and transparency</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h4>Innovation</h4>
              <p>Continuously improving our services and technology</p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h4>Customer Care</h4>
              <p>Prioritizing your satisfaction above all</p>
            </div>
          </div>
        </section>

        <section className="team-preview">
          <h2>Our Team</h2>
          <p>
            With over 200 dedicated professionals, our team works 24/7 to ensure
            you have the best hotel booking experience. From customer service
            representatives to experienced travel consultants, we're here to help.
          </p>
        </section>
      </div>
    </div>
  );
}
