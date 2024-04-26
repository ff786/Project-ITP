import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from './assets/logo.png';
import icon_prof from './assets/icon_prof.png';
import notify from './assets/notify.png';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import Topbar from '../common/topbar/Topbar.jsx';
import SideNav from '../common/SideNav/sideNav.jsx';

const InventoryDash = () => {

    const [activeTab, setActiveTab] = useState("inventory");
    //data coloums 
    

    const myProf = () => {
        console.log("Profile clicked");
        // Add functionality for profile click
    };

    const myNotifications = () => {
        console.log("Notifications clicked");
        // Add functionality for notifications click
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            {/* Header area */}
            <div >
            <Topbar/>
            </div>

            {/* Main content */}
            <div className="content">
                <div className="py-24 flex flex-col items-center justify-between gap-8">
                    <div className="px-4 space-y-7">
                        <h2 className="text-center md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
                            Inventory management <span className="text-red">Medicines</span>
                        </h2>
                        <div className="border-b border-gray-200 dark:border-neutral-700">
                            <nav className="flex space-x-1" aria-label="Tabs" role="tablist">
                                {/* Add your tab buttons here */}
                                <button
                                    type="button"
                                    className={`hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500 active ${activeTab === "inventory" ? "active" : ""}`}
                                    id="tabs-with-icons-item-1"
                                    data-hs-tab="#tabs-with-icons-1"
                                    aria-controls="tabs-with-icons-1"
                                    role="tab"
                                    onClick={() => handleTabClick("inventory")}>
                                    <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                    </svg>
                                    inventory
                                </button>
                                <button
                                    type="button"
                                    className={`hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500 active ${activeTab === "inventory" ? "active" : ""}`}
                                    id="tabs-with-icons-item-1"
                                    data-hs-tab="#tabs-with-icons-1"
                                    aria-controls="tabs-with-icons-1"
                                    role="tab"
                                    onClick={() => handleTabClick("expired")}>
                                    <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                    </svg>
                                    expired
                                </button>
                                <button
                                    type="button"
                                    className={`hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500 active ${activeTab === "inventory" ? "active" : ""}`}
                                    id="tabs-with-icons-item-1"
                                    data-hs-tab="#tabs-with-icons-1"
                                    aria-controls="tabs-with-icons-1"
                                    role="tab"
                                    onClick={() => handleTabClick("suppliers")}>
                                    <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                    </svg>
                                    suppliers
                                </button>


                                {/* Repeat the same pattern for other tabs */}
                            </nav>
                        </div>
                    </div>
                    {activeTab === "inventory" && (
                            
                    )}
                    {/* Add your other tab content here */}
                  
                </div>
            </div>
        </div>
    );
};

export default InventoryDash;
