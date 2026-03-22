import { Routes, Route } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Hotels from './pages/Hotels';
import Contact from './pages/Contact';
import MyProfile from './pages/MyProfile';
import './App.css';

function App() {
  return (
    <BookingProvider>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<MyProfile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BookingProvider>
  );
}

export default App;
