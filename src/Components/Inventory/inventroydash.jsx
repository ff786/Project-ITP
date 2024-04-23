import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from './assets/logo.png';
import icon_prof from './assets/icon_prof.png';
import notify from './assets/notify.png';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
const InventoryDash = () => {

    const [activeTab, setActiveTab] = useState("inventory");
    const columns = [
        {
            name: "MedicineName",
            selector: (row) => row.medicineName,
        },
        {
            name: "MedicineType",
            selector: (row) => row.medicineType,
        },
        {
            name: "ExpireDate",
            selector: (row) => row.expireDate,
        },
        {
            name: "Quantity",
            selector: (row) => row.quantity,
        },
        {
            name: "UnitPrice",
            selector: (row) => row.unitPrice,
        },
        {
            name: "Supplier",
            selector: (row) => row.supplier,
        },
        {
            name: "Action",
            cell: (row) => (
                <div>
                    <Link to={'/updatemedicines'}>
                        <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-yellow-500 hover:bg-yellow-100 hover:text-yellow-800 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-yellow-800/30 dark:hover:text-yellow-400">
                            Edit
                        </button>
                    </Link>
                    <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-500 hover:bg-red-100 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-red-800/30 dark:hover:text-red-400" onClick={() => handleDelete(row.Stockid)}>
                        Delete
                    </button>
                </div>
            )
        }
    ];

    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/medicine_details");
                setData(response.data);
                setFilteredData(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const result = data.filter((item) => {
            return (item.medicineName && item.medicineName.toLowerCase().includes(search.toLowerCase()));
        });
        setFilteredData(result);
    }, [search, data]);

    const handleDelete = (val) => {
        const newData = data.filter((item) => item.Stockid !== val);
        setData(newData);
        setFilteredData(newData);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const myProf = () => {
        console.log("Profile clicked");
        // Add functionality for profile click
    };

    const myNotifications = () => {
        console.log("Notifications clicked");
        // Add functionality for notifications click
    };
    return (
        <div>
            {/* Header area */}
            <div className="top">
                <div className="logo">
                    <img className="logo-image" src={logo} alt='logo' style={{ width: '200px', height: 'auto' }} />
                </div>
                <div className="d">
                    <img className="profButton" src={notify} alt='notify' onClick={myNotifications} />
                    <img className="profButton" src={icon_prof} alt='icon_prof' onClick={myProf} />
                </div>
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
                        <div>
                            {/* Inventory Content */}
                            <div className="text-center">
                                <h2 className="md:text-2xl text-xl font-bold md:leading-snug leading-snug mt-2">List of Medicines</h2>
                            </div>
                            <div className="table-container" style={{ overflowX: 'auto', width: '90vw', overflowY: 'hidden', margin: ' auto' }}>
                                <React.Fragment>
                                    <DataTable
                                        columns={columns}
                                        data={filteredData}
                                        pagination
                                        fixedHeader
                                        selectableRowsHighlight
                                        highlightOnHover
                                        actions={
                                            <div className="flex gap-4">
                                               <Link to="/addmedicines">
                                                <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                                    Add to Medicine
                                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="m5 11 4-7"></path>
                                                        <path d="m19 11-4-7"></path>
                                                        <path d="M2 11h20"></path>
                                                        <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4"></path>
                                                        <path d="m9 11 1 9"></path>
                                                        <path d="M4.5 15.5h15"></path>
                                                        <path d="m15 11-1 9"></path>
                                                    </svg>
                                                </button>
                                                </Link>
                                                <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                                                    Download 
                                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="m12 5 7 7-7 7"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        }
                                        subHeader
                                        subHeaderComponent={
                                            <input
                                                type="text"
                                                className="w-25 form-control float-right"
                                                placeholder="Search..."
                                                value={search}
                                                onChange={(e) => setSearch(e.target.value)}
                                            />
                                        }
                                        subHeaderAlign="left"
                                        style={{ width: '100%' }} // Set the width of the table to 100% to occupy the full width of its container
                                    />
                                </React.Fragment>
                            </div>

                            <div></div>
                        </div>
                    )}
                    {/* Add your other tab content here */}
                </div>
            </div>
        </div>
    );
};




export default InventoryDash;

