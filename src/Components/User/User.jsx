import React, { useState } from 'react';
import Topbar from '../common/topbar/Topbar';
import Sidebar from '../common/sidebar/Sidebar';
import './User.css';
import Navbar from './UserNavbar';

function User() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [userPrivileges, setUserPrivileges] = useState({ create: false, delete: false, edit: false });
  const [claimPrivileges, setClaimPrivileges] = useState({ create: false, delete: false, edit: false });
  const [patientPrivileges, setPatientPrivileges] = useState({ create: false, delete: false, edit: false });
  const [users, setUsers] = useState([]);
  const [editingUserIndex, setEditingUserIndex] = useState(-1);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      username,
      email,
      role,
      privileges: { users: userPrivileges, claims: claimPrivileges, patients: patientPrivileges }
    };
    setUsers([...users, newUser]);
    console.log('Staff added:', newUser);
    setUsername('');
    setEmail('');
    setRole('');
    setUserPrivileges({ create: false, delete: false, edit: false });
    setClaimPrivileges({ create: false, delete: false, edit: false });
    setPatientPrivileges({ create: false, delete: false, edit: false });
  };

  const handleDelete = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  const handleEdit = (index) => {
    setEditingUserIndex(index);
    setUsername(users[index].username);
    setEmail(users[index].email);
    setRole(users[index].role);
    setUserPrivileges(users[index].privileges.users);
    setClaimPrivileges(users[index].privileges.claims);
    setPatientPrivileges(users[index].privileges.patients);
  };

  const handleSaveEdit = () => {
    const updatedUsers = [...users];
    updatedUsers[editingUserIndex] = {
      username,
      email,
      role,
      privileges: { users: userPrivileges, claims: claimPrivileges, patients: patientPrivileges }
    };
    setUsers(updatedUsers);
    setEditingUserIndex(-1);
    setUsername('');
    setEmail('');
    setRole('');
    setUserPrivileges({ create: false, delete: false, edit: false });
    setClaimPrivileges({ create: false, delete: false, edit: false });
    setPatientPrivileges({ create: false, delete: false, edit: false });
  };

  return (
    <div>
      <Topbar />
      <Navbar/>
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
            {editingUserIndex === -1 ? (
              <button type="submit">Add Staff</button>
            ) : (
              <button type="button" onClick={handleSaveEdit}>
                Save Changes
              </button>
            )}
          </form>
        </div>
        <div className="user-list-container">
          <h2>User List</h2>
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.username}</td>
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
    </div>
  );
}

export default User;
