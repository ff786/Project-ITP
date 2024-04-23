import React, { useState, useEffect } from 'react';
import Topbar from '../common/topbar/Topbar.jsx'
import Sidebar from '../common/sidebar/Sidebar.jsx'
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../NotifyForm/NotifyForm.css'

import Table from 'react-bootstrap/Table';

function NotifyView() {
    return (
        <div>
            <Topbar />
            <div className="md">
                <div>
                    <Sidebar />
                </div>
                <div>
                    <div className="max-w-4xl mx-auto p-4">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-xl font-bold text-zinc-800 dark:text-white">Sent Notifications</h1>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Create New</button>
                        </div>

                        <div className="bg-white dark:bg-zinc-700 shadow rounded-lg p-4 mb-4">
                            <div className="flex justify-between items-center mb-3">
                                <h2 className="text-lg font-semibold text-zinc-800 dark:text-white">Samson Kemmer - Appointment Cancellation</h2>
                                <span className="text-sm text-zinc-500 dark:text-zinc-300">18-04-2024, 08:15</span>
                            </div>
                            <p className="text-zinc-600 dark:text-zinc-200 mb-3">
                                Your appointment has been cancelled. Please try to book again. For support, please contact...
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="flex space-x-2">
                                    <button className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">View Replies</button>
                                    <button className="text-red-500 hover:text-red-600 dark:hover:text-red-400">Acknowledged</button>
                                </div>
                                <div className="flex space-x-2">
                                    <button className="p-2 text-zinc-600 hover:text-zinc-700 dark:text-zinc-300 dark:hover:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25V9M6 10.5v7.875a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25V10.5m-12 0h12m-9 0V5.25A2.25 2.25 0 0110.5 3h3a2.25 2.25 0 012.25 2.25V10.5m-9 0h12" />
                                        </svg>
                                    </button>
                                    <button className="p-2 text-zinc-600 hover:text-zinc-700 dark:text-zinc-300 dark:hover:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18.75L18 6.75m0 12L6 6.75m1.5 0h9m-9 12h9" />
                                        </svg>
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
