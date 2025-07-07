import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="component">
      <h2>Welcome to BusBooking</h2>
      <p>Plan and book your travel with ease and comfort.
         your one-stop destination for hassle-free bus ticket reservations.</p>
      <Link to="/book" className="btn">Book Now</Link>
    </div>
  );
}

