import React, { useState, useEffect } from 'react';
import logo from '../common/header/logo.png'
import icon_prof from '../ClaimManage/icon_prof.png'
import notify from '../ClaimManage/notify.png'
import '../../App.css'
import './PndView.css'
import Sidebar from '../common/sidebar/Sidebar.jsx'
import search from '../common/search/Search.jsx'
import '../PnD/Diagnosis.css'
import './PndOverview.css'
import Topbar from '../common/topbar/Topbar.jsx'


import { Link } from 'react-router-dom';
import axios from 'axios';
import Diagnosis from "../PnD/Diagnosis.jsx";

function CodeView({ searchQuery }) {

    const [members, setMembers] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        // Fetch data from backend when component mounts
        axios.get('https://dulanga.sliit.xyz/api/innobothealth/code/getAll')
            .then(response => {
                setMembers(response.data);
                setFilteredMembers(response.data); // Set filtered members initially
            })
            .catch(error => {
                console.error('Error fetching members:', error);
            });
    },[]);

    const handleDelete = (id) => {
        // Delete claim by id
        axios.delete(`https://dulanga.sliit.xyz/api/innobothealth/code/delete?id=${id}`)
            .then(response => {
                console.log(response.data);
                // Update state to remove the deleted claim
                setMembers(members.filter(member => member.id !== id));
                setFilteredMembers(filteredMembers.filter(member => member.id !== id)); // Also update filteredMembers
            })
            .catch(error => {
                console.error('Error deleting code:', error);
            });
    };
    // Function to handle search
    const handleSearch = (event) => {
        const searchText = event.target.value.toLowerCase();
        setSearchText(searchText);
        const filteredData = members.filter(member =>
            member.memberId.toLowerCase().includes(searchText) ||
            member.codeType.toLowerCase().includes(searchText) ||
            member.codeName.toLowerCase().includes(searchText) ||
            member.codeTitle.toLowerCase().includes(searchText) ||
            member.description.toLowerCase().includes(searchText)
        );
        setFilteredMembers(filtered);
    };

    return (
        <body>
            <div>
                  <Topbar />
            </div>
            <div className="mid">
                <div>
                    <Sidebar />
                </div>

                <div className="mid">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-between items-center py-4">
                            <h1 className="text-2xl font-semibold ml-4">Procedure and Diagnosis codes</h1>
                            <Link to={`/PnD`}>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4" >
                                    Add Code
                                </button>
                            </Link>
                        </div>
                    <div className="flex justify-between mb-4">
                        <div className="flex gap-2 items-center">
                            <label>Show</label>
                            <select className="form-select block w-full mt-1 border-zinc-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md">
                                <option>10</option>
                                <option>20</option>
                                <option>50</option>
                            </select>
                            <label>Entries</label>
                        </div>
                        <div>
                            <input type="text" placeholder="Search:" className="form-input block w-full mt-1 border-zinc-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md ml-4" onChange={handleSearch} />

                        </div>
                    </div>

                    <div className="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative">
                        <table className="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
                            <thead>
                            <tr className="text-center">

                                <th className="py-2 px-3 sticky top-0 border-b border-zinc-200 bg-zinc-100 text-gray-800 font-semibold">Code Type</th>
                                <th className="py-2 px-3 sticky top-0 border-b border-zinc-200 bg-zinc-100 text-gray-800 font-semibold">Code</th>
                                <th className="py-2 px-3 sticky top-0 border-b border-zinc-200 bg-zinc-100 text-gray-800 font-semibold">Title</th>
                                <th className="py-2 px-3 sticky top-0 border-b border-zinc-200 bg-zinc-100 text-gray-800 font-semibold">Description</th>
                                <th className="py-2 px-3 sticky top-0 border-b border-zinc-200 bg-zinc-100 text-gray-800 font-semibold">Action</th>
                            </tr>
                            </thead>
                            <tbody className="bg-white dark:text-white">
                            {filteredData.map(member => (
                                <tr key={member.id} className="text-zinc-700 dark:text-black">
                                    {/*<td className="px-8 py-4 whitespace-no-wrap border-b border-text-black dark:border-zinc-200">*/}
                                    {/*    {member.memberId}*/}
                                    {/*</td>*/}
                                    <td className="px-8 py-4 whitespace-no-wrap border-b border-text-black dark:border-zinc-200">
                                        {member.codeType}
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-text-black dark:border-zinc-200">
                                        {member.codeName}
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-text-black dark:border-zinc-200">
                                        {member.codeTitle}
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-text-black dark:border-zinc-200">
                                        {member.description}
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-text-black dark:border-zinc-200">
                                        <div className="flex items-center">
                                            <Link to={`/UpdatePnD/${member.id}`} className="bg-zinc-600 hover:bg-white-600 text-white font-bold py-2 px-4 rounded">
                                                Edit
                                            </Link>
                                            <button onClick={() => handleDelete(member.id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-5">
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="flex justify-between items-center py-4">
                        <span>Showing 1 to 2 of 2 entries:</span>
                        <div className="inline-flex">
                            <button className="text-sm bg-zinc-300 hover:bg-zinc-400 text-zinc-800 font-semibold py-2 px-4 rounded-l ml-3">
                                Previous
                            </button>
                            <button className="text-sm bg-zinc-300 hover:bg-zinc-400 text-zinc-800 font-semibold py-2 px-4 rounded-r ml-3">
                                Next
                            </button>
                        </div>
                    </div>
                    </div>

                </div>

            </div>
        </body>

    );
}

export default CodeView;