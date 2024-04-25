import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Topbar from '../common/topbar/Topbar';
import Navbar from './UserNavbar';
import './User.css';
import Modal from 'react-modal';
import Sidebar from '../common/sidebar/Sidebar';

function User() {
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [email, setemail] = useState('');
  const [role, setRole] = useState('');
  const [notipref, setNotipref] = useState({ SMS: false, EMAIL: false, SYS: false });
  const [users, setUsers] = useState([]);
  const [editingUserIndex, setEditingUserIndex] = useState(-1);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://dulanga.sliit.xyz/api/innobothealth/admin/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://dulanga.sliit.xyz/api/innobothealth/admin/register', {
        email,
        password,
        firstName: firstname,
        lastName: lastname,
          mobileNumber,
          role,
        notificationPreference: Object.keys(notipref).filter(key => notipref[key])
      });

      setUsers([...users, response.data]);

      setUsername('');
      setFirstname('');
      setLastname('');
      setMobileNumber('');
      setPassword('');
      setemail('');
      setRole('');
      setNotipref({ SMS: false, email: false, SYS: false });

    } catch (error) {
      console.error('Error:', error);
      showCustomPopup('Failed to add user. Please try again later.');
    }
  };

  const showCustomPopup = (message) => {
    setModalMessage(message);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleDelete = async (index) => {
    try {
      await axios.delete(`https://dulanga.sliit.xyz/api/innobothealth/admin/users/${users[index]._id}`);
      const updatedUsers = [...users];
      updatedUsers.splice(index, 1);
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEdit = (index) => {
    setEditingUserIndex(index);
    setUsername(users[index].username);
    setFirstname(users[index].firstName);
    setLastname(users[index].lastName);
    setMobileNumber(users[index].mobileNumber);
    setemail(users[index].email);
    setRole(users[index].role);
    const preferences = users[index].notificationPreference.reduce((acc, cur) => {
      acc[cur] = true;
      return acc;
    }, { SMS: false, email: false, SYS: false });
    setNotipref(preferences);
  };

  const handleSaveEdit = async () => {
    try {
      await axios.put(`https://dulanga.sliit.xyz/api/innobothealth/admin/users/${users[editingUserIndex]._id}`, {
        email,
        firstName: firstname,
        lastName: lastname,
        mobileNumber,
        role,
        notificationPreference: Object.keys(notipref).filter(key => notipref[key])
      });
      const updatedUsers = [...users];
      updatedUsers[editingUserIndex] = {
        ...updatedUsers[editingUserIndex],
        email,
        firstName: firstname,
        lastName: lastname,
        mobileNumber,
        role,
        notificationPreference: Object.keys(notipref).filter(key => notipref[key])
      };
      setUsers(updatedUsers);
      setEditingUserIndex(-1);
      setUsername('');
      setemail('');
      setRole('');
      setNotipref({ SMS: false, email: false, SYS: false });
      setFirstname('');
      setLastname('');
    } catch (error) {
      console.error('Error saving edit:', error);
      showCustomPopup('Failed to save changes. Please try again later.');
    }
  };

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.lastName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Topbar />
      <Navbar />
      
      <div className="container">
        <div className="add-staff-container">
          <h2 className="add-staff-heading">{editingUserIndex === -1 ? 'Add STAFF' : 'Edit STAFF'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>First Name:</label>
              <input
                type="text"
                value={firstname}
                onChange={(event) => setFirstname(event.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name:</label>
              <input
                type="text"
                
                value={lastname}
                onChange={(event) => setLastname(event.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="text"
                placeholder='Enter password for the user account'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Mobile Number:</label>
              <input
                type="text"
                value={mobileNumber}
                onChange={(event) => setMobileNumber(event.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                placeholder='user@abc.com'
                value={email}
                onChange={(event) => setemail(event.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Role:</label>
              <select
                value={role}
                onChange={(event) => setRole(event.target.value)}
                required
              >
                <option value="">Select Role</option>
                <option value="COORDINATOR">COORDINATOR</option>
                <option value="STAFF">STAFF</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>
            <div className="form-group">
              <label>Notification Preference:</label>
              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={notipref.SMS}
                    onChange={() => setNotipref({ ...notipref, SMS: !notipref.SMS })}
                  />
                  SMS
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={notipref.EMAIL}
                    onChange={() => setNotipref({ ...notipref, EMAIL: !notipref.EMAIL })}
                  />
                  EMAIL
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={notipref.SYS}
                    onChange={() => setNotipref({ ...notipref, SYS: !notipref.SYS })}
                  />
                  SYS
                </label>
              </div>
            </div>
            <button type="submit">{editingUserIndex === -1 ? 'Add STAFF' : 'Save Changes'}</button>
          </form>
        </div>
        <div className="user-list-container">
          <h2>User List</h2>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>First Name</th>
                <th>email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={index}>
                  <td>{user.username}</td>
                  <td>{user.firstName}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
        contentLabel="Custom Modal"
      >
        <div className="modal-content">
          <h2>{modalMessage}</h2>
          <button onClick={closeModal}>Close</button>
        </div>
      </Modal>
    </div>
  );
}

export default User;
