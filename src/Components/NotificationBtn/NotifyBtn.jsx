import React from 'react';
import './NotifyBtn.css'; // Import your CSS file

const NotifyBtn = ({ toggleNotifications, notificationCount, isOpen, notifications }) => {
  return (
    <div className="notification-container">
      <div className="notification-icon" onClick={toggleNotifications}>
        <i className="fas fa-bell"></i>
        {notificationCount > 0 && <span className="badge">{notificationCount}</span>}
      </div>
        {isOpen && (
            <div className="notification-dropdown">
                {notifications.map(item => (
                    <div key={item.id} className="notification-item">
                        <span>{item.message}</span>
                        <button className="icon-button acknowledge-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 64 64">
                                <image href="https://img.icons8.com/glyph-neue/64/puzzle.png" width="64" height="64" />
                            </svg>
                        </button>
                        <button className="icon-button reply-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 50 50">
                                <image href="https://img.icons8.com/ios-filled/50/reply-arrow.png" width="50" height="50" />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
        )}
    </div>
  );
};

export default NotifyBtn;
