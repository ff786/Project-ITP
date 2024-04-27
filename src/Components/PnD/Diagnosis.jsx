import React, { useState } from 'react';
import logo from '../common/header/logo.png'
import icon_prof from '../ClaimManage/icon_prof.png'
import notify from '../ClaimManage/notify.png'
import Topbar from '../common/topbar/Topbar.jsx'
import '../../App.css'
import '../ClaimManage/ClaimForm.css'
import Sidebar from '../common/sidebar/Sidebar.jsx'
import search from '../common/search/Search.jsx'
import './Diagnosis.css'

import { Link } from 'react-router-dom';

function DiagnosisForm() {

    const [codeType, setCodeType] = useState('');
    const [code, setCode] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    return (

        <body>
            <div>
                  <Topbar />
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
            <div>
                <Sidebar />
            </div>
                <div className="main-form">
                    <div className="topbaree">
                        <h5 className="label-head">Add Codes</h5>
                        <button type="cancel" style={{height: '50px', marginRight: '10px'}}>Back</button>
                    </div>
                    <div className="form-fill">
                        <div style={{display: 'flex', flexDirection: 'row', gap: '20px'}}>
                           <div className="devb">
                                <label>CodeType:</label>
                            <div>
                              <input type="text" value={codeType} onChange={(event) => setCodeType(event.target.value)} placeholder="CodeType" />
                            </div>
                            </div>
                           <div className="devb">
                                <label>Code:</label>
                            <div>
                                <input type="text" value={code} onChange={(event) => setCode(event.target.value)} placeholder="Code" />
                            </div>
                           </div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', gap: '20px'}}   >
                           <div className="devb">
                                <label>Title:</label>
                            <div>
                                <input type="text" value={title} onChange={(event) => setTile(event.target.value)} placeholder="Title" />
                            </div>
                           </div>
                           <div className="devb">
                                <label>Description:</label>
                            <div>
                                <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Description" />
                            </div>
                           </div>
                        </div>
                        <div>
                            <button type="submit">Add Code</button>
                        </div>
                    </div>
                </div>
            </div>


        </body>
    );

}

export default DiagnosisForm;