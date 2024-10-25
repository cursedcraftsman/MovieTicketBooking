 
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SeatSelection.css';

const SEATS_PER_ROW = 10;  

const SeatSelection = () => {
  const location = useLocation();
  const { movie } = location.state || {};
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const totalSeats = 50;  
  const allSeats = Array.from({ length: totalSeats }, (_, index) => index + 1);

  const navigate = useNavigate();

  const handleSeatClick = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  const handleBooking = () => {
    if (!date || !time || selectedSeats.length === 0) {
      alert('Please select a date, time, and at least one seat.');
      return;
    }

    const totalPrice = selectedSeats.length * 10;  
    navigate('/confirmation', {
      state: {
        movieTitle: movie.title,
        selectedSeats,
        totalPrice,
        date,
        time,
      },
    });
  };

  return (
    <div className="seat-selection">
      <h2>Select Seats for {movie.title}</h2>
      <div className="date-time-selection">
        <label>
          Select Date:
          <input 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            required
          />
        </label>
        <label>
          Select Time:
          <input 
            type="time" 
            value={time} 
            onChange={(e) => setTime(e.target.value)} 
            required
          />
        </label>
      </div>
      <div className="seat-grid">
        {Array.from({ length: Math.ceil(allSeats.length / SEATS_PER_ROW) }, (_, rowIndex) => (
          <div key={rowIndex} className="seat-row">
            {allSeats.slice(rowIndex * SEATS_PER_ROW, (rowIndex + 1) * SEATS_PER_ROW).map((seat) => (
              <div 
                key={seat} 
                className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
                onClick={() => handleSeatClick(seat)}
              >
                {seat}
              </div>
            ))}
          </div>
        ))}
      </div>
      <button onClick={handleBooking}>Confirm Selection</button>
    </div>
  );
};

export default SeatSelection;
