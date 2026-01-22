import React, { useState } from 'react';
import './LocationDetails.css';

const LocationDetails = ({ onSubmit, isSubmitted }) => {
  const [activeField, setActiveField] = useState(0);

  const fields = ['State', 'District', 'Sub-District', 'Village/Town'];

  const handleInput = (index) => {
    if (index === activeField) {
      setActiveField(index + 1);
    }
  };

  return (
    <div className="location-details">
      <h2 className='location-title'>Location Details</h2>
      <div className="location-row">
        {fields.map((field, index) =>
          (index <= activeField && index < fields.length) && (
            <div className="location-field" key={field}>
              <label>{field}</label>
              <input
                type="text"
                onInput={() => handleInput(index)}
              />
            </div>
          )
        )}
        {activeField >= fields.length && !isSubmitted && (
          <button className="submit-location-btn" onClick={onSubmit}>
            &rarr;
          </button>
        )}
      </div>
    </div>
  );
};

export default LocationDetails;
