import React, { useState } from 'react';
import Topbar from '../common/topbar/Topbar.jsx'
import logo from '../common/header/logo.png'
import icon_prof from '../ClaimManage/icon_prof.png'
import notify from '../ClaimManage/notify.png'
import '../../App.css'
import '../ClaimManage/ClaimForm.css'
import Sidebar from '../common/sidebar/Sidebar.jsx'
import Search from '../common/search/Search.jsx'
import AllClaim from './AllClaim.jsx'
import './overView.css'

import { Link } from 'react-router-dom';

function OverviewClaim () {
    const [CreateClaim, setCreateClaim] = useState(false);
    const [ClaimStats, setClaimStats] = useState(false);
    const [totalClaims, setTotalClaims] = useState('');
    const [totalPendingClaims, setTotalPendingClaims] = useState([]);
    const [totalApprovedClaims, setTotalApprovedClaims] = useState([]);
    const myProf = () => {
      console.log("CLICKED");
    }
    const myNotifications = () => {
      console.log("CLICKED");
    }
    const toggleCreateClaim = () => {
        setCreateClaim(!CreateClaim);
    }

    return (

    <body>
        <div>
              <Topbar />
        </div>
        <div className="mid">
            <div>
                <Sidebar />
            </div>

            <div className="main-view">
                <div className="Maiin">
                    <button type="create">Create Claim</button>
                    <button type="create">Claim Statistics</button>
                </div>
                <div className="mid-btn">
                    <button type="claim">All Claims</button>
                    <button type="claim">Pending Claims</button>
                    <button type="claim">Approved Claims</button>
                </div>
                <div className="mid-btn">
                    <input type="text" placeholder="Search here... "/>
                </div>
                <div className="form-view">
                    <AllClaim />
                </div>
            </div>
        </div>


    </body>

    );

}

export default OverviewClaim;