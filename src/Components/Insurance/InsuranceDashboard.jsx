import React, { useState } from 'react';
import Topbar from '../common/topbar/Topbar.jsx';
import SideNav from '../common/SideNav/sideNav.jsx';
import InsuranceForm from './InsuranceForm.jsx'
import InsuranceMenu from './menu.jsx';

import { Link } from 'react-router-dom';

const InsuranceDashboard = () => {

    const [createInsurance, setCreateInsurance] = useState(false);

    const toggleCreateForm = () => {
        setCreateInsurance(!createInsurance);
    }

    return (
        <>
        <Topbar />

        <SideNav />

           <div className="py-24 flex flex-col items-center justify-between gap-8">
               <div className="px-4 space-y-7">
                   <h2 className="text-center md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
                       Insurance Management
                   </h2>
                   <div className="border-b border-gray-200 dark:border-neutral-700">
                       <nav className="flex justify-between space-x-1" aria-label="Tabs" role="tablist">
                           {/* Add your tab buttons here */}
                           <nav className="hidden md:flex space-x-10">
                               <a onClick={toggleCreateForm} className="text-base font-medium text-zinc-500 hover:text-zinc-900 cursor-pointer">Create Insurance</a>
                           </nav>
                           <nav className="hidden md:flex space-x-10">
                               <a href="#" className="text-base font-medium text-zinc-500 hover:text-zinc-900">Fee Schedule</a>
                           </nav>
                           <nav className="hidden md:flex space-x-10">
                               <a href="#" className="text-base font-medium text-zinc-500 hover:text-zinc-900">Reports</a>
                           </nav>
                       </nav>
                   </div>
                   {createInsurance && <InsuranceForm isOpen={createInsurance} onClose={toggleCreateForm} />}
               </div>
           </div>
            <InsuranceMenu />
        </>
    );
}

export default InsuranceDashboard;