import React, { useState } from 'react';
import Topbar from '../common/topbar/Topbar.jsx';
import SideNav from '../common/SideNav/sideNav.jsx';
import InsuranceForm from './InsuranceForm.jsx'
import InsuranceMenu from './menu.jsx';
import FeeScheduleManagement from './feedash.jsx'
import { Link } from 'react-router-dom';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import { useTable } from 'react-table';


const InsuranceDashboard = () => {
    
    const [activeTab, setActiveTab ] = useState("insurance");
    const CreateInsuranceRecord = () =>  {
        return <InsuranceForm />;

    };


    const data = [
        {
          label: "Create Insurance",
          value: "insurance",
          component: <CreateInsuranceRecord />,
        },
        {
          label: "Fee Schedule ",
          value: "fee",
          component: <FeeScheduleManagement />,
        },
       
      ];
    
    
    const toggleCreateForm = () => {
        setCreateInsurance(!CreateInsurance);
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
                   <Tabs value={activeTab}>
              <TabsHeader
                className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                indicatorProps={{
                  className:
                    "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                }}
              >
                {data.map(({ label, value }) => (
                  <Tab
                    key={value}
                    value={value}
                    onClick={() => setActiveTab(value)}
                    className={activeTab === value ? "text-gray-900" : ""}
                  >
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
              <TabsBody>
                {data.map(({ value, component }) => (
                  <TabPanel key={value} value={value}>
                    {component}
                  </TabPanel>
                ))}
              </TabsBody>
            </Tabs>
               </div>
           </div>
            
        </>
    );
}

export default InsuranceDashboard;