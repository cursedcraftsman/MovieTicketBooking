 
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Confirmation.css';

const Confirmation = () => {
  const location = useLocation();
  const { movieTitle, selectedSeats, totalPrice, date, time } = location.state || {};

  return (
    <div className="confirmation-container">
      <h2>Booking Confirmed!</h2>
      {movieTitle && <h3>{movieTitle}</h3>}
      <p>Your selected seats: {selectedSeats.join(', ')}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default Confirmation;
