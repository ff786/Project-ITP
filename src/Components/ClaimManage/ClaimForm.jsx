import React, { useState, useEffect } from 'react'
import FormClaim from './FormClaim.jsx'
import Topbar from '../common/topbar/Topbar.jsx'
import ConfirmModal from "../ClaimOverview/ConfirmModal.jsx"
import FORM from "../ClaimManage/FORM.jsx"
import SideNav from '../common/SideNav/sideNav.jsx'

import { Link } from 'react-router-dom';

function ClaimForm() {

  return (
      <div>

        <div>
              <Topbar />
        </div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div>
                <SideNav />
            </div>
            <div>
                <FORM/>
            </div>
        </div>

        </div>
      );
   }

export default ClaimForm;