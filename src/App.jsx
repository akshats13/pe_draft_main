import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header/Header';
import LocationDetails from './components/LocationDetails/LocationDetails';
import DataTable from './components/DataTable/DataTable';
import './App.css';

const App = () => {
  const [data, setData] = useState(Array(30).fill({}));
  const [tableHeight, setTableHeight] = useState('600px');
  const tableContainerRef = useRef(null);

  useEffect(() => {
    const calculateHeight = () => {
      if (tableContainerRef.current) {
        const topOffset = tableContainerRef.current.offsetTop;
        const viewportHeight = window.innerHeight;
        const remainingHeight = viewportHeight - topOffset - 40; // 40px for padding/margin
        setTableHeight(`${remainingHeight}px`);
      }
    };

    calculateHeight();
    window.addEventListener('resize', calculateHeight);

    return () => {
      window.removeEventListener('resize', calculateHeight);
    };
  }, [data]);

  const handleDataChange = (index, newRowData) => {
    const newData = [...data];
    newData[index] = newRowData;
    setData(newData);
  };

  return (
    <div className="app-container">
      <Header />
      <LocationDetails />

      <div className="title-style">Personal Entry</div>

      <div
        ref={tableContainerRef}
        className="data-table-container"
        style={{ maxHeight: tableHeight }}
      >
        <DataTable data={data} onDataChange={handleDataChange} />
      </div>
    </div>
  );
};

export default App;
