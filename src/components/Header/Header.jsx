import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <span>Form Number: 2802 3739</span>
      </div>
      <div className="header-center">
        <span className="main-title">Census of India</span>
        {/* <span className="subtitle">Household Schedule</span> */}
      </div>
      <div className="header-right">
        <span>Confidential when filled</span>
        {/* <span>Side A</span> */}
      </div>
    </div>
  );
};

export default Header;
