import React, { useState } from 'react';

export default function Book() {
  const [form, setForm] = useState({
    name: '',
    from: '',
    to: '',
    date: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${form.name} from ${form.from} to ${form.to} on ${form.date}`);
    setForm({ name: '', from: '', to: '', date: '' });
  };

  return (
    <div className="component">
      <h2>Book a Seat</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Your Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="from"
          value={form.from}
          placeholder="From"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="to"
          value={form.to}
          placeholder="To"
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}
