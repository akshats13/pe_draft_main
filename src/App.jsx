import React, { useRef } from 'react';
import Header from './components/Header/Header';
import LocationDetails from './components/LocationDetails/LocationDetails';
import DataTable from './components/DataTable/DataTable';
import { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  const appRef = useRef(null);

  return (
    <div className="App" ref={appRef}>
      <Toaster position="top-center" reverseOrder={false} />
      <Header />
      <div className="main-content">
        <LocationDetails />
        <div className="data-table-wrapper">
          <h2 className="title-style">Personal Enumeration Block</h2>
          <DataTable />
        </div>
      </div>
    </div>
  );
}

export default App;
