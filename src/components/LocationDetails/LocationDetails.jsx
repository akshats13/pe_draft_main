import React from 'react';
import './LocationDetails.css';

const LocationDetails = () => {
  const fields = ['State', 'District', 'Sub-District', 'Village/Town'];

  return (
    <div className="location-details">
      <h2 className='location-title'>Location Details</h2>
      <div className="location-row">
        {fields.map((field) => (
          <div className="location-field" key={field}>
            <label>{field}</label>
            <input type="text" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationDetails;
