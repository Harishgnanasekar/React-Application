import './Services.css';

export default function Services() {
  const services = [
    {
      id: 1,
      icon: '🔍',
      title: 'Easy Search',
      description: 'Find hotels based on location, price, rating, and amenities with our advanced search filters.'
    },
    {
      id: 2,
      icon: '💰',
      title: 'Best Price Guarantee',
      description: 'We guarantee the best prices on the market. Found cheaper? We\'ll match it + give you a discount.'
    },
    {
      id: 3,
      icon: '✅',
      title: 'Instant Confirmation',
      description: 'Get instant booking confirmation via email and access your reservations anytime.'
    },
    {
      id: 4,
      icon: '📱',
      title: 'Mobile Booking',
      description: 'Book hotels on the go with our user-friendly mobile application.'
    },
    {
      id: 5,
      icon: '💳',
      title: 'Flexible Payments',
      description: 'Multiple payment options including credit cards, digital wallets, and bank transfers.'
    },
    {
      id: 6,
      icon: '🎁',
      title: 'Loyalty Rewards',
      description: 'Earn points on every booking and redeem them for discounts on future stays.'
    },
    {
      id: 7,
      icon: '🛡️',
      title: 'Secure Booking',
      description: 'Your data is protected with industry-leading encryption and security measures.'
    },
    {
      id: 8,
      icon: '📞',
      title: '24/7 Support',
      description: 'Our customer service team is available round the clock to assist you.'
    },
  ];

  return (
    <div className="services">
      <div className="services-hero">
        <h1>Our Services</h1>
        <p>Everything You Need for the Perfect Stay</p>
      </div>

      <div className="container">
        <section className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </section>

        <section className="premium-section">
          <h2>Premium Services</h2>
          <p className="premium-intro">Take your experience to the next level</p>
          <div className="premium-grid">
            <div className="premium-card">
              <h4>✨ VIP Concierge</h4>
              <p>Personal travel concierge available to assist with all your needs.</p>
              <ul>
                <li>Restaurant reservations</li>
                <li>Airport transfers</li>
                <li>Tour arrangements</li>
              </ul>
            </div>
            <div className="premium-card">
              <h4>🌏 Global Coverage</h4>
              <p>Access to hotels in major destinations worldwide.</p>
              <ul>
                <li>500+ partner hotels</li>
                <li>50 countries covered</li>
                <li>Local expertise</li>
              </ul>
            </div>
            <div className="premium-card">
              <h4>🎯 Personalized Recommendations</h4>
              <p>AI-powered suggestions based on your preferences and history.</p>
              <ul>
                <li>Smart matching</li>
                <li>Personalized deals</li>
                <li>Travel preferences saved</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
