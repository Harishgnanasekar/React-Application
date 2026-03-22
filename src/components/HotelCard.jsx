import { useState } from 'react';
import { useBooking } from '../hooks/useBooking';
import './HotelCard.css';

export default function HotelCard({ hotel }) {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const { addBooking, addFavorite, removeFavorite, state: { favorites } } = useBooking();
  
  const isFavorite = favorites.includes(hotel.id);

  const handleBooking = (e) => {
    e.preventDefault();
    if (checkIn && checkOut && guests) {
      addBooking({
        hotel: hotel.name,
        checkIn,
        checkOut,
        guests,
        price: hotel.price,
        totalPrice: hotel.price * Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)),
      });
      setShowBookingForm(false);
      setCheckIn('');
      setCheckOut('');
      setGuests(1);
      alert('Booking confirmed! Check your profile for details.');
    } else {
      alert('Please fill in all fields');
    }
  };

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(hotel.id);
    } else {
      addFavorite(hotel.id);
    }
  };

  return (
    <div className="hotel-card">
      <div className="hotel-card-image">{hotel.image}</div>
      
      <div className="hotel-card-content">
        <div className="hotel-header">
          <h3>{hotel.name}</h3>
          <button
            className={`favorite-btn ${isFavorite ? 'active' : ''}`}
            onClick={toggleFavorite}
            title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isFavorite ? '❤️' : '🤍'}
          </button>
        </div>

        <p className="hotel-location">📍 {hotel.location}</p>
        <p className="hotel-rating">⭐ {hotel.rating} (4.5k reviews)</p>
        <p className="hotel-rooms">🛏️ {hotel.rooms} rooms available</p>
        
        <div className="hotel-amenities">
          <p><strong>Amenities:</strong> {hotel.amenities}</p>
        </div>

        <div className="hotel-price">
          <span className="price">${hotel.price}/night</span>
        </div>

        <button
          className="book-btn"
          onClick={() => setShowBookingForm(!showBookingForm)}
        >
          {showBookingForm ? 'Cancel' : 'Book Now'}
        </button>

        {showBookingForm && (
          <form className="booking-form" onSubmit={handleBooking}>
            <div className="form-group">
              <label>Check-in Date</label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Check-out Date</label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Number of Guests</label>
              <input
                type="number"
                min="1"
                max="10"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                required
              />
            </div>

            <button type="submit" className="confirm-btn">
              Confirm Booking
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
