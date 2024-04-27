import React, { useState } from 'react';
import './insdash.css';

function CreateNInsuranceRecord( { isOpen, onClose } ) {
  const [insurerName, setInsurerName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [coverageDetails, setCoverageDetails] = useState('');
  const [effectiveDate, setEffectiveDate] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [premiumAmount, setPremiumAmount] = useState('');

  const handleCreate = () => {
    // Handle create button click logic
    console.log('Create button clicked');
  };

  const handleReset = () => {
    // Handle reset button click logic
    setInsurerName('');
    setEmail('');
    setTel('');
    setCoverageDetails('');
    setEffectiveDate('');
    setExpiryDate('');
    setPremiumAmount('');
  };

  const handleCancel = () => {
    onClose();
  };

  return (
   <div className={`modal-overlay ${isOpen ? "open" : ''}`}>
     <div className="modal-content">
         <button className="text-zinc-600 hover:text-red-900" onClick={handleCancel}>
             <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
             <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
              d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        <div className="insurance-record-container">
          <h2>Create New Insurance Record</h2>
          <div className="form-group">
            <label htmlFor="insurerName">Insurer Name</label>
            <input
              type="text"
              id="insurerName"
              value={insurerName}
              onChange={(e) => setInsurerName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="tel">Tel</label>
            <input
              type="tel"
              id="tel"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="coverageDetails">Coverage Details</label>
            <input
              type="text"
              id="coverageDetails"
              value={coverageDetails}
              onChange={(e) => setCoverageDetails(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="effectiveDate">Effective Date</label>
            <input
              type="date"
              id="effectiveDate"
              value={effectiveDate}
              onChange={(e) => setEffectiveDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date</label>
            <input
              type="date"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="premiumAmount">Premium Amount</label>
            <input
              type="number"
              id="premiumAmount"
              value={premiumAmount}
              onChange={(e) => setPremiumAmount(e.target.value)}
            />
          </div>
          <div className="button-group">
            <button className="reset-btn" onClick={handleReset}>
              Reset
            </button>
            <button className="create-btn" onClick={handleCreate}>
              Create
            </button>
          </div>
        </div>
       </div>
   </div>
  );
}

export default CreateNInsuranceRecord;