import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            🏨 LuxeStay
          </Link>
        </div>
        
        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about" className="nav-link" onClick={closeMenu}>
            About
          </Link>
          <Link to="/services" className="nav-link" onClick={closeMenu}>
            Services
          </Link>
          <Link to="/hotels" className="nav-link" onClick={closeMenu}>
            Hotels
          </Link>
          <Link to="/contact" className="nav-link" onClick={closeMenu}>
            Contact
          </Link>
          <Link to="/profile" className="nav-link" onClick={closeMenu}>
            My Profile
          </Link>
        </nav>
      </div>
    </header>
  );
}
