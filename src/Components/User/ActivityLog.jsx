import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ActivityLog.css'; // Importing my CSS stylesheet
import Topbar from '../common/topbar/Topbar';
import Navbar from './UserNavbar';

function ActivityLog() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [users, setUsers] = useState([]); // State for storing user list

  useEffect(() => {
    fetchUsers(); // Fetch users when the component mounts
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://dulanga.azurewebsites.net/api/innobothealth/admin/getAll');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, [selectedUser, startDate, endDate]);

  const fetchActivities = async () => {
    if (!selectedUser || !startDate || !endDate) return;

    try {
      const response = await axios.get(`https://your-backend-api-url/activities`, {
        params: {
          userId: selectedUser,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString()
        }
      });
      setFilteredActivities(response.data);
    } catch (error) {
      console.error('Error fetching activities:', error);
    }
  };

  const handleUserSelect = (userId) => {
    setSelectedUser(userId);
  };

  return (
    <div className="activity-log-container">
      <Topbar />
      <Navbar />
      <div className="activity-log">
        <h1>Activity Log</h1>
        <div className="filter-container">
          {/* User select dropdown */}
          <select className="user-select" onChange={(e) => handleUserSelect(parseInt(e.target.value))}>
            <option value="">Select User</option>
            {/* Render options from fetched users */}
            {users.map(user => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>
          {/* Date range inputs */}
          <div className="date-range">
            <input type="date" onChange={(e) => setStartDate(new Date(e.target.value))} />
            <span>to</span>
            <input type="date" onChange={(e) => setEndDate(new Date(e.target.value))} />
          </div>
          {/* Filter button */}
          <button className="filter-btn" onClick={fetchActivities}>Filter</button>
        </div>
        {/* Render activity list */}
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
