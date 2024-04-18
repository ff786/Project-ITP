import React, { useState } from 'react';
import logo from '../common/header/logo.png'
import Topbar from '../common/topbar/Topbar.jsx'
import icon_prof from '../ClaimManage/icon_prof.png'
import notify from '../ClaimManage/notify.png'
import '../../App.css'
import '../ClaimManage/ClaimForm.css'
import './UpdateForm.css'
import video from '../../LoginAssets/video.mp4'
import Sidebar from '../common/sidebar/Sidebar.jsx'

import { Link } from 'react-router-dom';

const UpdateForm = () => {
  const [memberId, setMemberId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfClaim, setDateOfClaim] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const myProf = () => {
    console.log("CLICKED");
  }
  const myNotifications = () => {
    console.log("CLICKED");
  }

    return (
        <body>
            <div>
                 <Topbar />
            </div>

            <div className="main-body">
                <div>
                    <Sidebar />
                </div>
                <div className="video-anime">
                    <div>
                        <video autoPlay muted loop src={video}></video>
                    </div>
                </div>
                <div>
                    <div className="top-bar">
                        <h5 className="h5">Patient Information </h5>
                    </div>

                    <div className="bar1">
                        <div className="devb">
                            <label>Member ID:</label>
                            <div>
                                <input type="text" value={memberId} onChange={(event) => setMemberId(event.target.value)} placeholder="Member ID"/>
                            </div>
                        </div>
                        <div className="devb">
                            <label>First Name:</label>
                            <div>
                                <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} placeholder="First Name"/>
                            </div>
                        </div>
                        <div className="devb">
                            <label>Last Name:</label>
                            <div>
                                <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} placeholder="Last Name"/>
                            </div>
                        </div>
                    </div>

                    <div className="bar2">
                        <div className="devb">
                            <label>Phone Number:</label>
                                <input type="tel" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} placeholder="+94 (0)## ### ####"/>
                        </div>
                    </div>
                    <div className="bar2">
                        <div className="devb">
                            <label>Email:</label>
                                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@sample.com"/>
                        </div>
                    </div>
                    <div className="bar2">
                        <div className="devb">
                            <label>Date:</label>
                                <input type="date" value={dateOfClaim} onChange={(event) => setDateOfClaim(event.target.value)} />
                        </div>
                    </div>
                    <div className="bar2">
                        <div className="devb">
                            <label>Upload Receipt:</label>
                                <input type="file" onChange={(event) => setImageUrl(event.target.value)} />
                        </div>
                    </div>

                    <div className="button-up">
                        <button type="update">Cancel</button>
                        <button type="update">Update Claim</button>
                    </div>
                </div>

            </div>
        </body>

    );
}

export default UpdateForm;