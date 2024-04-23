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
                    <Link to={`/updatemedicines/${row.Stockid}`}>
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
    const [medicineIdToDelete, setMedicineIdToDelete] = useState(null);
    const [showModal, setShowModal] = useState(false);

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
        setMedicineIdToDelete(val);
        setShowModal(true);
    };

    const confirmDelete = async () => {
        try {
            await axios.delete(`http://localhost:3000/medicine_details/${medicineIdToDelete}`);
            const newData = data.filter((item) => item.Stockid !== medicineIdToDelete);
            setData(newData);
            setFilteredData(newData);
            setShowModal(false);
        } catch (error) {
            console.log(error);
            // Handle error here
        }
    };

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
                                        style={{ width: '100%' }}
                                    />
                                </React.Fragment>
                            </div>

                            <div></div>
                        </div>
                    )}
                    {/* Add your other tab content here */}
                </div>
            </div>
            {/* Modal */}
            <div className={`hs-overlay ${showModal ? 'visible' : 'hidden'} size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none`}>
                <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
                    <div className="w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                        <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                            <h3 className="font-bold text-gray-800 dark:text-white">
                                Confirm Delete
                            </h3>
                            <button type="button" className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700" onClick={() => setShowModal(false)}>
                                <span className="sr-only">Close</span>
                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 6 6 18"></path>
                                    <path d="m6 6 12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="p-4 overflow-y-auto">
                            <p className="text-gray-800 dark:text-neutral-400">
                                Are you sure you want to delete this medicine?
                            </p>
                        </div>
                        <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
                            <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" onClick={() => setShowModal(false)}>
                                Cancel
                            </button>
                            <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none" onClick={confirmDelete}>
                                Delete Medicine
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryDash;
