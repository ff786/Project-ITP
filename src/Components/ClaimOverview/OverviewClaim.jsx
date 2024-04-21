import React, { useState } from 'react';
import Topbar from '../common/topbar/Topbar.jsx'
import Sidebar from '../common/sidebar/Sidebar.jsx'
import Search from '../common/search/Search.jsx'
import '../../App.css'
import '../ClaimManage/ClaimForm.css'
import ClaimModify from './ClaimModify.jsx'
import ClaimFormModal from '../ClaimManage/FormClaim.jsx'
import './overView.css'

import { Link } from 'react-router-dom';

function OverviewClaim () {
    const [CreateClaim, setCreateClaim] = useState(false);
    const [ClaimStats, setClaimStats] = useState(false);
    const [totalClaims, setTotalClaims] = useState('');
    const [totalPendingClaims, setTotalPendingClaims] = useState([]);
    const [totalApprovedClaims, setTotalApprovedClaims] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const [currentPage, setCurrentPage] = useState('all');

    const toggleCreateClaim = () => {
        setCreateClaim(!CreateClaim);
    }
    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    }

    const handleSearch = () => {
        console.log('Search Query:', searchQuery);
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
                    <button type="create" onClick={toggleCreateClaim} > Create Claim </button>
                    <button type="create">Claim Statistics</button>
                </div>
                <div className="mid-btn">
                    <button type="claim" className={currentPage === 'all' ? 'active' : ''}>All Claims</button>
                    <button type="claim">Pending Claims</button>
                    <button type="claim">Approved Claims</button>
                </div>
                <div className="mid-btn">
                    <input type="text" placeholder="Search here... " onChange={handleSearchInputChange} />
                    <button type="search" onClick={handleSearch}>Search</button>
                </div>
                <div className="form-view">
                    <ClaimModify searchQuery={searchQuery} />
                    {CreateClaim && <ClaimFormModal isOpen={CreateClaim} onClose={toggleCreateClaim} />}
                </div>
            </div>
        </div>


    </body>

    );

}

export default OverviewClaim;