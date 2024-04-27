import React, { useState } from 'react';
import './reportdash.css';

function app() {
  const [fromDate, setFromDate] = useState('01/01/2022');
  const [toDate, setToDate] = useState('31/03/2023');

  const handleGenerateClick = () => {
    // Handle generate button click logic
    console.log(`From Date: ${fromDate}, To Date: ${toDate}`);
  };

  const handleSendAdminClick = () => {
    // Handle send admin button click logic
    console.log('Send Admin clicked');
  };

  const handleDownloadClick = () => {
    // Handle download button click logic
    console.log('Download clicked');
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-logo">Omnobot</div>
        <div className="app-nav">Reports</div>
        <div className="app-user">user1</div>
      </header>
      <div className="app-body">
        <div className="app-sidebar">
          <div className="sidebar-item">Reports & Analytics</div>
          <div className="sidebar-item active">Reports</div>
          <div className="sidebar-item">Analytics</div>
        </div>
        <div className="app-content">
          <div className="report-section">
            <div className="report-title">Fee Schedule Summary</div>
            <div className="date-picker">
              <label htmlFor="fromDate">From Date</label>
              <input
                id="fromDate"
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
            </div>
            <div className="date-picker">
              <label htmlFor="toDate">To date</label>
              <input
                id="toDate"
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
            </div>
            <button className="generate-btn" onClick={handleGenerateClick}>
              Generate
            </button>
          </div>
          <div className="action-buttons">
            <button className="send-admin-btn" onClick={handleSendAdminClick}>
              Send Admin
            </button>
            <button className="download-btn" onClick={handleDownloadClick}>
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default app;