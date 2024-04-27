import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CreateInsuranceRecord from './CreateInsuranceRecord';
import FeeScheduleManagement from './FeeScheduleManagement';

function linkx() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/create-insurance-record">Create Insurance Record</Link>
            </li>
            <li>
              <Link to="/fee-schedule-management">Fee Schedule Management</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/create-insurance-record">
            <CreateInsuranceRecord />
          </Route>
          <Route path="/fee-schedule-management">
            <FeeScheduleManagement />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default linkx;