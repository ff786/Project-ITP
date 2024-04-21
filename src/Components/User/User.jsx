import React, { useState } from 'react';
import Topbar from '../common/topbar/Topbar';
import Navbar from './UserNavbar';
import './User.css';
import Modal from 'react-modal';

function User() {
  const [username, setUsername] = useState('');
  const [firstname, setfirstname ]=useState('');
  const [lastname, setlastname ]=useState('');
  const [mobileNumber, setmobileNum]=useState('');
  const [password, setpassword]=useState('');

  const [Email, setEmail] = useState('');
  const [role, setRole] = useState('');
  //const [userPrivileges, setUserPrivileges] = useState({ create: false, delete: false, edit: false });
  //const [claimPrivileges, setClaimPrivileges] = useState({ create: false, delete: false, edit: false });
  //const [patientPrivileges, setPatientPrivileges] = useState({ create: false, delete: false, edit: false });
  const [notipref, setnotipref] = useState({ SMS: false, Email: false});

  const [users, setUsers] = useState([]);
  const [editingUserIndex, setEditingUserIndex] = useState(-1);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check for duplicate username or Email
    const isDuplicateUsername = users.some(user => user.username === username);
    const isDuplicateEmail = users.some(user => user.Email === Email);
   
  
    if (isDuplicateUsername) {
      showCustomPopup('A user with this username already exists. Please choose a different username.');
      return;
    }
  
    if (isDuplicateEmail) {
      showCustomPopup('A user with this Email address already exists. Please choose a different Email address.');
      return;
    }
  
    // Proceed with adding the new user
    const newUser = {
      username,
      firstname,
      lastname,
      mobileNumber,
      password,
      Email,
      role,
      privileges: { users: notipref }
     // privileges: { users: userPrivileges, claims: claimPrivileges, patients: patientPrivileges }
    };
    setUsers([...users, newUser]);
    console.log('Staff added:', newUser);
    setUsername('');
    setfirstname('');
    setlastname('');
    setmobileNum('');
    setpassword('');
    setEmail('');
    setRole('');
    /*setUserPrivileges({ create: false, delete: false, edit: false });
    setClaimPrivileges({ create: false, delete: false, edit: false });
    setPatientPrivileges({ create: false, delete: false, edit: false });
    */
    setnotipref({ SMS: false, Email: false});
    
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
    setfirstname(users[index].firstname);
    setlastname(users[index].lastname);
    setpassword(users[index].password);
    setmobileNum(users[index].mobileNumber);
    setnotipref(users[index].privileges);
    setEmail(users[index].Email);
    setRole(users[index].role);
    /*setUserPrivileges(users[index].privileges.users);
    setClaimPrivileges(users[index].privileges.claims);
    setPatientPrivileges(users[index].privileges.patients);
    */
  };

  const handleSaveEdit = () => {
    const updatedUsers = [...users];
    updatedUsers[editingUserIndex] = {
      username,
      firstname,
      lastname,
      password,
      Email,
      role,
      mobileNumber,
      privileges: { users:notipref }
    };
    setUsers(updatedUsers);
    setEditingUserIndex(-1);
    setUsername('');
    setEmail('');
    setRole('');
    setPatientPrivileges({ SMS: false, Email: false});
    setfirstname('');
    setlastname('');
    /*
    setUserPrivileges({ create: false, delete: false, edit: false });
    setClaimPrivileges({ create: false, delete: false, edit: false });
    setPatientPrivileges({ create: false, delete: false, edit: false });*/
  };

  // Filter users based on search query
  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.Email.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
                <div className="form-Para">
              <label>First Name:</label>
              <input
                type="text"
                value={firstname}
                onChange={(event) => setfirstname(event.target.value)}
                required
              />
              </div>
              <div className="form-Para">
              <label>Last Name:</label>
              <input
                type="text"
                value={lastname}
                onChange={(event) => setlastname(event.target.value)}
                required
              />
              </div>
              <div className="form-Para">
              <label>Password</label>
              <input
                type="text"
                value={password}
                onChange={(event) => setpassword(event.target.value)}
                required
              />
              </div>
            </div>
            <div className="form-group">
              <label>Mobile Number:</label>
              <input
                type="text"
                value={mobileNumber}
                onChange={(event) => setmobileNum(event.target.value)}
                required
              />
              </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="Email"
                value={Email}
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
                    onChange={() => setnotipref({ ...notipref, SMS: !notipref.SMS })}
                  />
                 SMS
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={notipref.Email}
                    onChange={() => setnotipref({ ...notipref, Email: !notipref.Email })}
                  />
                  Email
                </label>
              </div>
            </div>

            {/* Privileges section 
            <div className="form-group">
              <label>Privileges:</label>
              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={userPrivileges.create}
                    onChange={() => setUserPrivileges({ ...userPrivileges, create: !userPrivileges.create })}
                  />
                  Create Users
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={userPrivileges.delete}
                    onChange={() => setUserPrivileges({ ...userPrivileges, delete: !userPrivileges.delete })}
                  />
                  Delete Users
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={userPrivileges.edit}
                    onChange={() => setUserPrivileges({ ...userPrivileges, edit: !userPrivileges.edit })}
                  />
                  Edit Users
                </label>
              </div>
            </div>
            <div className="form-group">
              <label>Claim Privileges:</label>
              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={claimPrivileges.create}
                    onChange={() => setClaimPrivileges({ ...claimPrivileges, create: !claimPrivileges.create })}
                  />
                  Create Claims
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={claimPrivileges.delete}
                    onChange={() => setClaimPrivileges({ ...claimPrivileges, delete: !claimPrivileges.delete })}
                  />
                  Delete Claims
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={claimPrivileges.edit}
                    onChange={() => setClaimPrivileges({ ...claimPrivileges, edit: !claimPrivileges.edit })}
                  />
                  Edit Claims
                </label>
              </div>
            </div>
            <div className="form-group">
              <label>Patients Privileges:</label>
              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={patientPrivileges.create}
                    onChange={() => setPatientPrivileges({ ...patientPrivileges, create: !patientPrivileges.create })}
                  />
                  Create Patients
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={patientPrivileges.delete}
                    onChange={() => setPatientPrivileges({ ...patientPrivileges, delete: !patientPrivileges.delete })}
                  />
                  Delete Patients
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={patientPrivileges.edit}
                    onChange={() => setPatientPrivileges({ ...patientPrivileges, edit: !patientPrivileges.edit })}
                  />
                   
                  Edit Patients
                </label>
              </div>
            </div>
           */}
            {/* Submit button */}
            <button type="submit">{editingUserIndex === -1 ? 'Add Staff' : 'Save Changes'}</button>
          </form>
        </div>
        <div className="user-list-container">
          <h2>User List</h2>
          {/* Search input field */}
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
          {/* User list table */}
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
              {/* Display filtered users */}
              {filteredUsers.map((user, index) => (
                <tr key={index}>
                  <td>{user.username}</td>
                  <td>{user.firstname}</td>
                  <td>{user.Email}</td>
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
      {/* Modal */}
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
