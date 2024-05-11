import KPIDashboard from './KPIDashboard.jsx';

import Topbar from '../common/topbar/Topbar';
import Navbar from './UserNavbar.jsx';
const UserMenu = () => {
  

  return (
    <div>
      <Topbar/>
    <Navbar/>
      <KPIDashboard />
    </div>
  );
};

export default UserMenu;
