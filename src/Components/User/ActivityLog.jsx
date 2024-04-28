import React, { useState } from 'react';
import './ActivityLog.css'; // Import your CSS stylesheet
import Topbar from '../common/topbar/Topbar';
import Navbar from './UserNavbar';

// Placeholder data
const users = [
  { id: 1, username: 'user1', name: 'User One' },
  { id: 2, username: 'user2', name: 'User Two' },
];

const activities = [
  { id: 1, userId: 1, description: 'Did something', timestamp: new Date('2024-04-19T08:00:00') },
  { id: 2, userId: 2, description: 'Did something else', timestamp: new Date('2024-04-19T09:00:00') },
  { id: 3, userId: 1, description: 'Did another thing', timestamp: new Date('2024-04-20T10:00:00') },
  { id: 4, userId: 2, description: 'Did yet another thing', timestamp: new Date('2024-04-20T11:00:00') },
];

function ActivityLog() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredActivities, setFilteredActivities] = useState([]);

  const handleUserSelect = (userId) => {
    setSelectedUser(userId);
  };

  const filterActivities = () => {
    if (!selectedUser || !startDate || !endDate) return [];

    const filtered = activities.filter(activity => 
      activity.userId === selectedUser && activity.timestamp >= startDate && activity.timestamp <= endDate
    );
    setFilteredActivities(filtered);
  };

  return (
    <div className="activity-log-container">
      <Topbar />
      <Navbar />
      <div className="activity-log">
        <h1>Activity Log</h1>
        <div className="filter-container">
          <select className="user-select" onChange={(e) => handleUserSelect(parseInt(e.target.value))}>
            <option value="">Select User</option>
            {users.map(user => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>
          <div className="date-range">
            <input type="date" onChange={(e) => setStartDate(new Date(e.target.value))} />
            <span>to</span>
            <input type="date" onChange={(e) => setEndDate(new Date(e.target.value))} />
          </div>
          <button className="filter-btn" onClick={filterActivities}>Filter</button>
        </div>
        <ul className="activity-list">
          {filteredActivities.map(activity => (
            <li key={activity.id} className="activity-item">
              <span className="activity-description">{activity.description}</span>
              <span className="activity-timestamp">{activity.timestamp.toString()}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ActivityLog;
