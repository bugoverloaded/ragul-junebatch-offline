import React from 'react';
import { Link } from 'react-router-dom';
import react from '../assets/RS BUS.jpg';

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={react} alt=""/>
      <h2 className="center-text">BusBooking</h2>
        <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/buses">Buses</Link></li>
        <li><Link to="/book">Book</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
