import { useState, useEffect } from 'react';
import { useBooking } from '../hooks/useBooking';
import HotelCard from '../components/HotelCard';
import './Hotels.css';

export default function Hotels() {
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState(500);
  const { state: { favorites } } = useBooking();

  useEffect(() => {
    // Simulating API call - useEffect as required
    const timer = setTimeout(() => {
      const hotelList = [
        { id: 1, name: 'The Grand Palace', price: 150, rating: 4.8, image: '🏨', location: 'Downtown', rooms: 250, amenities: 'Pool, Gym, WiFi, Restaurant' },
        { id: 2, name: 'Oceanview Resort', price: 120, rating: 4.6, image: '🏝️', location: 'Beachfront', rooms: 180, amenities: 'Beach, Spa, Pool, Bar' },
        { id: 3, name: 'Mountain Serenity', price: 130, rating: 4.7, image: '⛰️', location: 'Mountains', rooms: 100, amenities: 'Hiking, Spa, Fireplace' },
        { id: 4, name: 'Urban Luxe Hotel', price: 180, rating: 4.9, image: '🌆', location: 'City Center', rooms: 300, amenities: 'Rooftop Bar, Gym, Concierge' },
        { id: 5, name: 'Desert Mirage', price: 95, rating: 4.4, image: '🏜️', location: 'Desert', rooms: 80, amenities: 'Pool, Camel Rides, Sunset Tours' },
        { id: 6, name: 'Forest Retreat', price: 110, rating: 4.5, image: '🌲', location: 'Forest', rooms: 120, amenities: 'Forest Walks, Yoga, Spa' },
        { id: 7, name: 'Lakeside Manor', price: 140, rating: 4.7, image: '🏞️', location: 'Lake District', rooms: 150, amenities: 'Water Sports, Fishing, Dining' },
        { id: 8, name: 'Skyrise Tower', price: 200, rating: 5.0, image: '🏢', location: 'Metropolis', rooms: 400, amenities: 'Fine Dining, Spa, Business Center' },
      ];
      setHotels(hotelList);
      setFilteredHotels(hotelList);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Filter hotels based on search and price
    const filtered = hotels.filter(hotel =>
      (hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       hotel.location.toLowerCase().includes(searchTerm.toLowerCase())) &&
      hotel.price <= priceFilter
    );
    setFilteredHotels(filtered);
  }, [searchTerm, priceFilter, hotels]);

  return (
    <div className="hotels-page">
      <div className="hotels-hero">
        <h1>Find Your Perfect Hotel</h1>
        <p>Browse our collection of premium hotels worldwide</p>
      </div>

      <div className="container">
        <aside className="filters-sidebar">
          <h3>Filters</h3>
          
          <div className="filter-group">
            <label>Search Location/Name</label>
            <input
              type="text"
              placeholder="Search hotels..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-group">
            <label>Max Price: ${priceFilter}</label>
            <input
              type="range"
              min="50"
              max="300"
              value={priceFilter}
              onChange={(e) => setPriceFilter(Number(e.target.value))}
              className="price-slider"
            />
          </div>

          {favorites.length > 0 && (
            <div className="favorites-info">
              <p>❤️ {favorites.length} Favorites</p>
            </div>
          )}
        </aside>

        <main className="hotels-main">
          <div className="hotels-count">
            <p>Showing {filteredHotels.length} hotels</p>
          </div>

          {filteredHotels.length > 0 ? (
            <div className="hotels-grid">
              {filteredHotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>No hotels found matching your criteria.</p>
              <p>Try adjusting your filters.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
