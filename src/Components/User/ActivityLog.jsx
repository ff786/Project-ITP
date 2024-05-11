import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ActivityLog.css'; // Importing CSS stylesheet
import Topbar from '../common/topbar/Topbar';
import Navbar from './UserNavbar.jsx';

function ActivityLogWithTimestamps() {
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
        const response = await axios.get(`http://api.innobot.dulanga.com/activity-log/${selectedUser}`, {
            params: {
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

  // Function to fetch login and logout times for a user
  const fetchUserLoginLogoutTimes = async (userId) => {
    try {
      const response = await axios.get(`https://your-backend-api-url/user/${userId}/login-logout-times`);
      // Handle response to set login and logout times for the user
    } catch (error) {
      console.error('Error fetching login/logout times:', error);
    }
  };

  return (
    <div className="activity-log-container-Unique ">
      <Topbar />
      <Navbar />
      <div className="activity-log-Unique ">
        <h1>Activity Log</h1>
        <div className="filter-container-Unique ">
          {/* User select dropdown */}
          <select className="user-select-Unique " onChange={(e) => handleUserSelect(parseInt(e.target.value))}>
            <option value="">Select User</option>
            {/* Render options from fetched users */}
            {users.map(user => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>
          {/* Date range inputs */}
          <div className="date-range-Unique ">
            <input type="date" onChange={(e) => setStartDate(new Date(e.target.value))} />
            <span>to</span>
            <input type="date" onChange={(e) => setEndDate(new Date(e.target.value))} />
          </div>
          {/* Filter button */}
          <button className="filter-btn-Unique " onClick={fetchActivities}>Filter</button>
        </div>
        {/* Render activity list */}
        {/* Render activity list */}
        <ul className="activity-list-Unique ">
    {filteredActivities.map(activity => (
        <li key={activity.id} className="activity-item-Unique ">
            <span className="activity-description-Unique ">{activity.description}</span>
            <span className="activity-timestamp-Unique ">Login: {activity.loginTime} - Logout: {activity.logoutTime}</span>
        </li>
    ))}
</ul>

      </div>
    </div>
  );
}

export default ActivityLogWithTimestamps;
