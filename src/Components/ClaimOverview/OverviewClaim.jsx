import React, { useState } from 'react';
import Topbar from '../common/topbar/Topbar.jsx'
import SideNav from '../common/SideNav/sideNav.jsx'
import ClaimModify from './ClaimModify.jsx'
import ClaimFormModal from '../ClaimManage/FormClaim.jsx'
import PendingClaim from '../ApprovalClaim/PendingClaim.jsx'
import ApprovedClaim from '../ApprovalClaim/ApprovedClaim.jsx'
import './overView.css'

import { Link } from 'react-router-dom';

function OverviewClaim () {
    const [CreateClaim, setCreateClaim] = useState(false);
    const [ClaimStats, setClaimStats] = useState(false);
    const [PendingClaimVisible, setPendingClaimVisible] = useState(false);
    const [ApprovedClaimVisible, setApprovedClaimVisible] = useState(false);

    const [totalClaims, setTotalClaims] = useState('');
    const [searchQuery, setSearchQuery] = useState('');


    const toggleCreateClaim = () => {
        setCreateClaim(!CreateClaim);
    }
    const togglePendingClaim = () => {
        setPendingClaimVisible(!PendingClaimVisible);
    }
    const toggleApprovedClaim = () => {
        setApprovedClaimVisible(!ApprovedClaimVisible);
    }
    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    }

    const handleSearch = () => {
        console.log('Search Query:', searchQuery);
    }

    return (
      <div>

        <Topbar />

        <div className="mid">

                <SideNav />


            <div className="main-view">
                <div className="Maiin">
                    <button type="create" onClick={toggleCreateClaim} > Create Claim </button>
                    <button type="create">Assign Staff</button>
                </div>
                <div className="mid-btn">
                    <button type="claim" onClick={togglePendingClaim} >Pending Claims</button>
                    <button type="claim" onClick={toggleApprovedClaim} >Approved Claims</button>
                    <button type="claim" >Claim Statistics</button>
                </div>
                <div className="mid-btn">
                    <input type="text" placeholder="Search here... " onChange={handleSearchInputChange} />
                    <button type="search" onClick={handleSearch}>Search</button>
                </div>
                <div className="formView">
                    <ClaimModify searchQuery={searchQuery} />
                    {CreateClaim && <ClaimFormModal isOpen={CreateClaim} onClose={toggleCreateClaim} />}
                    {PendingClaimVisible && <PendingClaim isOpen={PendingClaimVisible} onClose={togglePendingClaim} />}
                    {ApprovedClaimVisible && <ApprovedClaim isOpen={ApprovedClaimVisible} onClose={toggleApprovedClaim} />}
                </div>
            </div>
        </div>


    </div>

    );

}

export default OverviewClaim;