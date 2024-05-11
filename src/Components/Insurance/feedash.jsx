import React from 'react';
import './feedash.css';


function FeeScheduleManagement() {
  const feeSchedules = [
    { ctp_code: '99201', description: 'ECG testing', current_fee: '$150' },
    { ctp_code: '99203', description: 'MRI (Magnetic Resonance Imaging) ', current_fee: '$175' },
    { ctp_code: '99204', description: 'Bone density test (DEXA scan)', current_fee: '$210' },
    { ctp_code: '99205', description: ' Endoscopy ', current_fee: '$170' },
  ];

  return (
    <div className="fee-schedule-management">
      <h2>Fee Schedule Management</h2>
      <table>
        <thead>
          <tr>
            <th>CTP Code</th>
            <th>Description</th>
            <th>Current Fee</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {feeSchedules.map((schedule, index) => (
            <tr key={index}>
              <td>{schedule.ctp_code}</td>
              <td>{schedule.description}</td>
              <td>{schedule.current_fee}</td>
              <td>
                <div className="action-buttons">
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FeeScheduleManagement;