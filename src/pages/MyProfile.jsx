import { useState, useEffect } from 'react';
import { useBooking } from '../hooks/useBooking';
import './MyProfile.css';

export default function MyProfile() {
  const { state: { bookings, user }, setUser, removeBooking } = useBooking();
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Guest User',
    email: 'user@example.com',
    phone: '+1 (555) 000-0000',
    country: 'United States',
  });

  useEffect(() => {
    // Simulate loading user data from localStorage or API
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      setProfileData(JSON.parse(savedProfile));
    }
  }, []);

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    localStorage.setItem('userProfile', JSON.stringify(profileData));
    setUser(profileData);
    setIsEditingProfile(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="profile">
      <div className="profile-hero">
        <h1>My Profile</h1>
        <p>Manage your account and bookings</p>
      </div>

      <div className="container">
        <div className="profile-wrapper">
          {/* Profile Card */}
          <aside className="profile-sidebar">
            <div className="profile-card">
              <div className="profile-avatar">👤</div>
              <h2>{profileData.name}</h2>
              <p className="profile-email">{profileData.email}</p>
              
              <button
                className="edit-profile-btn"
                onClick={() => setIsEditingProfile(!isEditingProfile)}
              >
                {isEditingProfile ? 'Cancel' : 'Edit Profile'}
              </button>

              <div className="profile-stats">
                <div className="stat">
                  <p className="stat-number">{bookings.length}</p>
                  <p className="stat-label">Total Bookings</p>
                </div>
                <div className="stat">
                  <p className="stat-number">⭐⭐⭐</p>
                  <p className="stat-label">Member Status</p>
                </div>
              </div>
            </div>

            {isEditingProfile && (
              <form className="profile-form" onSubmit={handleProfileUpdate}>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={profileData.name}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label>Country</label>
                  <input
                    type="text"
                    name="country"
                    value={profileData.country}
                    onChange={handleInputChange}
                  />
                </div>

                <button type="submit" className="save-btn">
                  Save Changes
                </button>
              </form>
            )}
          </aside>

          {/* Bookings Section */}
          <main className="profile-main">
            <h2>My Bookings</h2>

            {bookings.length > 0 ? (
              <div className="bookings-list">
                {bookings.map((booking) => (
                  <div key={booking.id} className="booking-card">
                    <div className="booking-header">
                      <h3>🏨 {booking.hotel}</h3>
                      <span className="booking-id">#{booking.id}</span>
                    </div>

                    <div className="booking-details">
                      <div className="detail-row">
                        <span className="label">📅 Check-in:</span>
                        <span className="value">{new Date(booking.checkIn).toLocaleDateString()}</span>
                      </div>
                      <div className="detail-row">
                        <span className="label">📅 Check-out:</span>
                        <span className="value">{new Date(booking.checkOut).toLocaleDateString()}</span>
                      </div>
                      <div className="detail-row">
                        <span className="label">👥 Guests:</span>
                        <span className="value">{booking.guests}</span>
                      </div>
                      <div className="detail-row">
                        <span className="label">💰 Total Price:</span>
                        <span className="value price">${booking.totalPrice}</span>
                      </div>
                    </div>

                    <div className="booking-status">
                      <span className="status-badge">✅ Confirmed</span>
                    </div>

                    <button
                      className="cancel-booking-btn"
                      onClick={() => {
                        if (window.confirm('Are you sure you want to cancel this booking?')) {
                          removeBooking(booking.id);
                        }
                      }}
                    >
                      Cancel Booking
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-bookings">
                <p>📭 You haven't made any bookings yet.</p>
                <p>Start exploring our hotels and make your first reservation!</p>
              </div>
            )}

            <section className="loyalty-section">
              <h2>Loyalty Program</h2>
              <div className="loyalty-card">
                <div className="points">
                  <p className="points-value">2,450</p>
                  <p className="points-label">Loyalty Points</p>
                </div>
                <div className="perks">
                  <h4>Your Benefits:</h4>
                  <ul>
                    <li>✓ 5% discount on all bookings</li>
                    <li>✓ Free room upgrades</li>
                    <li>✓ Early access to new hotels</li>
                    <li>✓ Priority customer support</li>
                  </ul>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
