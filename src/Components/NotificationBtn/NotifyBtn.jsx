import React from 'react';
import './NotifyBtn.css'; // Import your CSS file

const NotifyBtn = ({ toggleNotifications, notificationCount, isOpen }) => {
  return (
    <div className="notification-container">
      <div className="notification-icon" onClick={toggleNotifications}>
        <i className="fas fa-bell"></i>
        {notificationCount > 0 && <span className="badge">{notificationCount}</span>}
      </div>
      {isOpen && (
        <div className="notification-dropdown">
          {/* Notification items go here */}
          <div className="notification-item">Notification 1</div>
          <div className="notification-item">Notification 2</div>
          <div className="notification-item">Notification 3</div>
        </div>
      )}
    </div>
  );
};

export default NotifyBtn;
