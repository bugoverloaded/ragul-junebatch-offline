import React from 'react';

export default function Buses() {
  const buses = [
    { id: 1, name: 'ExpressLine', route: 'Delhi to Jaipur' },
    { id: 2, name: 'NightRider', route: 'Tirunelveli to Kerala' },
    { id: 3, name: 'EcoTravel', route: 'Chennai to Bengaluru' }
  ];

  return (
    <div className="component">
      <h2>Available Buses</h2>
      <ul>
        {buses.map(bus => (
          <li key={bus.id}>
            <strong>{bus.name}</strong> — {bus.route}
          </li>
        ))}
      </ul>
    </div>
  );
}

