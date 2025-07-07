import React from 'react';
import {Link} from 'react-router-dom';
export default function Contact() {
  return(
  <div className="component">
    <Link to="/Contact"></Link>
    <h2>Contact Us</h2>
    <p>Email: support@busbooking.com</p>
    <p>Phone: +91 12345 67890</p>
  </div>
  )
};

