import React, { useState } from 'react';
import axios from 'axios';
import Topbar from '../common/topbar/Topbar';
import Navbar from './UserNavbar';
import './User.css';
import Modal from 'react-modal';

function User() {
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [notipref, setNotipref] = useState({ SMS: false, Email: false });

  const [users, setUsers] = useState([]);
  const [editingUserIndex, setEditingUserIndex] = useState(-1);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/innobothealth/users', {
        username,
        firstname,
        lastname,
        mobileNumber,
        password,
        email,
        role,
        notipref,
      });

      setUsers([...users, response.data]);

      setUsername('');
      setFirstname('');
      setLastname('');
      setMobileNumber('');
      setPassword('');
      setEmail('');
      setRole('');
      setNotipref({ SMS: false, Email: false });

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

  const handleDelete = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  const handleEdit = (index) => {
    setEditingUserIndex(index);
    setUsername(users[index].username);
    setFirstname(users[index].firstname);
    setLastname(users[index].lastname);
    setPassword(users[index].password);
    setMobileNumber(users[index].mobileNumber);
    setNotipref(users[index].notipref);
    setEmail(users[index].email);
    setRole(users[index].role);
  };

  const handleSaveEdit = () => {
    const updatedUsers = [...users];
    updatedUsers[editingUserIndex] = {
      username,
      firstname,
      lastname,
      password,
      email,
      role,
      mobileNumber,
      notipref,
    };
    setUsers(updatedUsers);
    setEditingUserIndex(-1);
    setUsername('');
    setEmail('');
    setRole('');
    setNotipref({ SMS: false, Email: false });
    setFirstname('');
    setLastname('');
  };

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.firstname.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.lastname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="container">
        <div className="add-staff-container">
          <h2>{editingUserIndex === -1 ? 'Add Staff' : 'Edit Staff'}</h2>
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
            <div className="form-Para">
              <label>Password:</label>
              <input
                type="password"
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
                value={email}
                onChange={(event) => setEmail(event.target.value)}
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
                <option value="coordinator">Coordinator</option>
                <option value="staff">Staff</option>
                <option value="admin">Admin</option>
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
                    checked={notipref.Email}
                    onChange={() => setNotipref({ ...notipref, Email: !notipref.Email })}
                  />
                  Email
                </label>
              </div>
            </div>
            <button type="submit">{editingUserIndex === -1 ? 'Add Staff' : 'Save Changes'}</button>
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
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={index}>
                  <td>{user.username}</td>
                  <td>{user.firstname}</td>
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
