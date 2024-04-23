import React, { useState } from 'react';
import Topbar from '../common/topbar/Topbar.jsx'
import Sidebar from '../common/sidebar/Sidebar.jsx'
import '../../App.css'
import './NotifyForm.css'

import { Link } from 'react-router-dom';

const NotifyForm = () => {
    const [category, setCategory] = useState('');
    const [notificationType, setNotificationType] = useState('instant');
    const [dateSchd, setDateSchd] = useState('');
    const [timeSchd, setTimeSchd] = useState('');

    const handleNotificationTypeChange = (e) => {
        setNotificationType(e.target.value);
    };
    const handleCancel = () => {
        form.reset();
    }

    return (
        <body>
            <Topbar />
            <div className="main-dom">
                <Sidebar />
                <div className="md">
                    <div className="max-w-4xl mx-auto bg-white dark:bg-white-700 shadow-lg p-6 rounded-lg">
                        <h2 className="text-3xl dark:text-zinc-900 font-bold mb-10">Create New Notification</h2>
                        <form className="grid grid-cols-2 gap-4">
                            <div className="NotifyForm">
                                <div className="form-group">
                                    <label className="block text-m font-medium text-zinc-700 dark:text-zinc-900">Category</label>
                                    <select
                                        className="input-field"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}>
                                        <option>Custom</option>
                                        <option>General</option>
                                        <option>Urgent</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="block text-m font-medium text-zinc-700 dark:text-zinc-900">Receiver Type</label>
                                    <select className="input-field">
                                        <option>Doctor</option>
                                        <option>Nurse</option>
                                        <option>Administrator</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="block text-m font-medium text-zinc-700 dark:text-zinc-900">Receiver</label>
                                    <input type="text" placeholder="Dr. Farsith Fawzer" className="input-field" />
                                </div>
                                <div className="form-group">
                                    <label className="block text-m font-medium text-zinc-700 dark:text-zinc-900">Subject</label>
                                    <input type="text" className="input-field" />
                                </div>
                            </div>
                            <div>
                                <div className="form-group">
                                    <label className="block text-m font-medium mb-5 text-zinc-700 dark:text-zinc-900 ml-6">Priority</label>
                                    <div>
                                        <label className="inline-flex items-center ml-6">
                                          <input type="radio" name="priority" value="high" className="text-indigo-600 form-radio" />
                                          <span className="ml">High</span>
                                        </label>
                                        <label className="inline-flex items-center ml-6">
                                          <input type="radio" name="priority" value="medium" className="text-indigo-600 form-radio" />
                                          <span className="ml">Medium</span>
                                        </label>
                                        <label className="inline-flex items-center ml-6">
                                          <input type="radio" name="priority" value="low" className="text-indigo-600 form-radio" />
                                          <span className="ml">Low</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group radio-group">
                                    <label className="block text-m font-medium mb-5 text-zinc-700 dark:text-zinc-900 ml-6">Notification Type</label>
                                    <div className="ml-6">
                                        <label className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                name="notificationType"
                                                value="scheduled"
                                                checked={notificationType === 'scheduled'}
                                                onChange={handleNotificationTypeChange}
                                            />
                                            <span className="ml">Scheduled</span>
                                        </label>
                                        <label className="inline-flex items-center ml-6">
                                            <input
                                                type="radio"
                                                name="notificationType"
                                                value="instant"
                                                checked={notificationType === 'instant'}
                                                onChange={handleNotificationTypeChange}/>
                                            <span className="ml">Instant</span>
                                        </label>
                                    </div>
                                    {notificationType === 'scheduled' && (
                                        <div className="scheduled-options ml-6">
                                            <label className="block text-m font-medium">Date</label>
                                            <input
                                                type="date"
                                                value={dateSchd}
                                                onChange={(e) => setDateSchd(e.target.value)}
                                                className="input-field"/>
                                            <label className="block text-m font-medium mt-4">Time</label>
                                            <input
                                                type="time"
                                                value={timeSchd}
                                                onChange={(e) => setTimeSchd(e.target.value)}
                                                className="input-field"/>
                                        </div>
                                    )}
                                </div>
                            </div>
                            </form>
                            <div className="form-group">
                                <label className="block text-m font-medium text-zinc-700 dark:text-zinc-900">Message</label>
                                <textarea rows="4" className="mt-1 block w-full py-2 px-3 border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-black-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                            </div>
                            <div className="col-span-2 flex justify-end mt-6">
                                <button type="cancel" className="text-white px-4 py-2 rounded-md mr-2" onClick={handleCancel}>Clear</button>
                                <button type="submit" className="text-white px-4 py-2 rounded-md">Send</button>
                            </div>

                    </div>
                </div>
            </div>
        </body>
    );
}

export default NotifyForm;
