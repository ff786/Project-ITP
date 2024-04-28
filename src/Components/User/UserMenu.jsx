import KPIDashboard from './KPIDashboard';

import Topbar from '../common/topbar/Topbar';
import Navbar from './UserNavbar';

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
