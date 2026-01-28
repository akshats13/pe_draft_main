import React from 'react';
import './Footer.css';

const Footer = ({ onSubmit }) => {
  return (
    <div className="footer">
      <button className="submit-button" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Footer;
