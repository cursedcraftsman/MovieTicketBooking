 
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>Welcome to SeateEase </h1>
        <p>Your ultimate destination for booking movie tickets online.</p>
        <a href="/movies" className="btn">Browse Movies</a>
      </div>

      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-list">
          <div className="feature-item">🎬 Explore the latest movies.</div>
          <div className="feature-item">🎟️ Seamless seat selection.</div>
          <div className="feature-item">🗓️ Choose your date and time.</div>
          <div className="feature-item">✅ Instant booking confirmation.</div>
          <div className="feature-item">💳 Secure payment options.</div>
        </div>
      </section>

      <section className="image-gallery">
        <img src="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQbeEqyUYrRBUHGFO_z50nxiYoHBPNcJ0zIjwZ3GOyiiuXh_5T9pqHyNL1j-VbtVtGi2DQADwVVbhNdMhfGByb5cRKkw3lrKz2BY441I4cBYKjxwo60ouBIKoDFmKWhSExLgB2n4xfZ-w2y8bAE5bHkn8h9s.jpg?r=5ae" alt="Latest Movies" />
        <img src="https://t3.ftcdn.net/jpg/08/53/46/18/360_F_853461869_PnmbZvDsRxcXRHFMuUVeGAQRXz8IF34V.jpg" alt="Book Tickets" />
      </section>
    </div>
  );
};

export default Home;
