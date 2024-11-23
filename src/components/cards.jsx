import React from 'react';
import './style/Collection.css'; // Make sure to import the CSS file

function Cards() {
  return (
    <div className="cards-container">
      <div className="card">
        <h3 className="card-title">Strength Training</h3>
        <p className="card-description">Build muscle and improve strength with resistance exercises.</p>
      </div>
      <div className="card">
        <h3 className="card-title">Cardio</h3>
        <p className="card-description">Boost heart health and endurance through activities like running and cycling.</p>
      </div>
      <div className="card">
        <h3 className="card-title">Flexibility</h3>
        <p className="card-description">Enhance joint mobility and prevent injury with stretching exercises.</p>
      </div>
    </div>
  );
}

export default Cards;
