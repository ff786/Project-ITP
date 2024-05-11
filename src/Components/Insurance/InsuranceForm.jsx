import React, { useState } from 'react';
import './insdash.css';

function CreateNInsuranceRecord({ isOpen, onClose }) {
  const [memberId, setMemberId] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [payerId, setPayerId] = useState('');
  const [activeStatus, setActiveStatus] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  const handleCreate = async (event) => {
    const form = document.getElementById('patientForm');
    event.preventDefault();
    const formData = new FormData(form);
  

    // Send the form data as a POST request using fetch
    try {
      const response = await fetch('https://dulanga.azurewebsites.net/api/innobothealth/insurance/create', {
        method: 'POST',
        header: {
          'Accept': 'application/json'
        },
        body: formData,
      });
      if (response.ok) {
        console.log("Form Submitted");
        formRef.current.reset();
      } else {
        console.error('Failed to submit form');
      }
    }
    catch (error) {
      console.error('Error :', error);
      alert('Failed to Submit Form, Please try again later!');
    }
  }

  const handleReset = () => {
    // Handle reset button click logic
    setMemberId('');
    setName('');
    setAddress('');
    setPhoneNumber('');
    setPayerId('');
    setActiveStatus('');
    setCity('');
    setState('');
    setZip('');
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
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <form name="patientForm" id="patientForm" onSubmit={handleCreate}>
          <div className="insurance-record-container">
            <h2>Create New Insurance Record</h2>
            <div className="form-group">
              <label htmlFor="memberId">Member ID</label>
              <input
                name= {"memberId"}
                type="text"
                id="memberId"
                value={memberId}
                onChange={(e) => setMemberId(e.target.value)}
              />
            
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                name = {"name"}
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                name = {"address"}
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input 
                name = {"phoneNumber"}
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
             
            </div>
            <div className="form-group">
              <label htmlFor="payerId">Payer ID</label>
              <input
                name = {"payerId"}
                type="text"
                id="payerId"
                value={payerId}
                onChange={(e) => setPayerId(e.target.value)}

              />
                    </div>
            <div className="form-group">
              <label htmlFor="activeStatus">Active Status</label>
              <input
                name= {"activeStatus"}
                type="text"
                id="activeStatus"
                value={activeStatus}
                onChange={(e) => setActiveStatus(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                name = {"city"}
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                name = {"state"}
                type="text"
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="zip">ZIP</label>
              <input
                name ={"zip"}
                type="text"
                id="zip"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
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
        </form>
      </div>
    </div>
  );
}

export default CreateNInsuranceRecord;