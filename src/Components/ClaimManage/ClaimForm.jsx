import React, { useState, useEffect } from 'react'
import FormClaim from './FormClaim.jsx'
import Topbar from '../common/topbar/Topbar.jsx'
import ConfirmModal from "../ClaimOverview/ConfirmModal.jsx"
import FORM from "../ClaimManage/FORM.jsx"

import { Link } from 'react-router-dom';

function ClaimForm() {

  return (
      <body>

        <div>
              <Topbar />
        </div>
        <div>
            <FORM/>
        </div>

        </body>
      );
   }

export default ClaimForm;