import React, { useState, useEffect } from 'react';
import Topbar from '../common/topbar/Topbar.jsx'
import Sidebar from '../common/sidebar/Sidebar.jsx'
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../NotifyForm/NotifyForm.css'
import '../ClaimManage/ClaimForm.css'
import { FaEdit, FaTrash } from 'react-icons/fa';

import Table from 'react-bootstrap/Table';

function NotifyView() {
    return (
        <div>
            <Topbar />
            <div className="main-dom">
                <div>
                    <Sidebar />
                </div>
                <div className="md2">
                    <div className="max-w-4xl mx-auto p-4">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-2xl font-bold text-black-900 dark:text-black">Sent Notifications</h1>
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Create New</button>
                        </div>

                        <div className="bg-white dark:bg-white-700 shadow-xl rounded-lg p-4 mb-4">
                            <div className="flex justify-between items-center mb-3">
                                <h2 className="text-lg font-semibold text-zinc-800 dark:text-black">Samson Kemmer - Appointment Cancellation</h2>
                                <span className="text-sm text-black-600 dark:text-black-300">18-04-2024, 08:15</span>
                            </div>
                            <p className="text-white-600 dark:text-black-200 mb-3">
                                Your appointment has been cancelled. Please try to book again. For support, please contact...
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="flex space-x-3">
                                    <button className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">View Replies</button>
                                    <button className="text-red-500 hover:text-red-600 dark:hover:text-red-400">Acknowledged</button>
                                </div>
                                <div className="flex space-x-3">
                                    <button className="p-2 text-black hover:text-green-700 dark:text-black-300 dark:hover:text-green">
                                        <FaEdit />
                                    </button>
                                    <button className="p-2 text-black hover:text-red-700 dark:text-black-300 dark:hover:text-red">
                                        <FaTrash />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotifyView;
