import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Topbar from '../common/topbar/Topbar.jsx';
import Sidebar from '../common/sidebar/Sidebar.jsx';
import video from '../../LoginAssets/video.mp4';
import './UpdateForm.css';
import { useParams } from 'react-router-dom';

const UpdateForm = () => {
  const [memberId, setMemberId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [treatmentDate, setTreatmentDate] = useState('');
  const [amount, setAmount] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const { id } = useParams();

  useEffect(() => {
    // Fetch data from the database and populate the form fields
    fetchData();
  }, [id]); // Empty dependency array ensures this effect runs only once, when the component mounts

  const fetchData = async () => {
    try {
      // Make a GET request to fetch data from the database
      const response = await axios.get(`https://dulanga.sliit.xyz/api/innobothealth/claim/getAll/${id}`);
      const data = response.data; // Assuming data is in JSON format
      // Set the state variables with the fetched data
      setMemberId(data.memberId);
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setPhoneNumber(data.phoneNumber);
      setEmail(data.email);
      setDateOfClaim(data.treatmentDate);
      setAmount(data.amount);
      setImageUrl(data.receipt);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error
    }
  };
    const handleUpdate = async (event) => {
      event.preventDefault();

      const form = document.getElementById('claimForm');
      const formData = new FormData(form);

      // Send the form data as a POST request using fetch
      try {
        const response = await fetch('https://dulanga.sliit.xyz/api/innobothealth/claim/update', {
          method: 'POST',
          headers: {
            'Accept': 'application/json'
          },
          body: formData,
        });

        if (response.ok) {
          setIsConfirmModalOpen(true);
          formRef.current.reset();
        } else {
          console.error('Failed to submit form');
        }
      } catch (error) {
        console.error('Error uploading image:', error);
        alert('Failed to Submit Form, Please try again later!');
      }
    };


  return (
    <body>
      <div>
        <Topbar />
      </div>

      <div className="main-body">
        <div>
          <Sidebar />
        </div>
        <div className="video-anime">
          <div>
            <video autoPlay muted loop src={video}></video>
          </div>
        </div>
        <form name="claimForm" id="claimForm" onUpdate={handleUpdate}>
        <div>
          <div className="top-bar">
            <h5 className="h5">Patient Information</h5>
          </div>

          <div className="bar1">
            <div className="devb">
              <label>Member ID:</label>
              <div>
                <input
                  type="text"
                  value={memberId}
                  onChange={(event) => setMemberId(event.target.value)}
                />
              </div>
            </div>
            <div className="devb">
              <label>First Name:</label>
              <div>
                <input
                  type="text"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </div>
            </div>
            <div className="devb">
              <label>Last Name:</label>
              <div>
                <input
                  type="text"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="bar2">
            <div className="devb">
              <label>Phone Number:</label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
              />
            </div>
          </div>
          <div className="bar2">
            <div className="devb">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
          </div>
          <div className="bar2">
            <div className="devb">
              <label>Date:</label>
              <input
                type="date"
                value={treatmentDate}
                onChange={(event) => setTreatmentDate(event.target.value)}
              />
            </div>
          </div>
          <div className="bar2">
            <div className="devb">
              <label>Amount:</label>
              <input
                type="number"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
              />
            </div>
          </div>
          <div className="bar2">
            <div className="devb">
              <label>Upload Receipt:</label>
              <input type="file" onChange={(event) => setImageUrl(event.target.value)} />
            </div>
          </div>

          <div className="button-up">
            <button type="cancel">Cancel</button>
            <button type="update">Update Claim</button>
          </div>
        </div>
        </form>
      </div>
    </body>
  );
};

export default UpdateForm;
