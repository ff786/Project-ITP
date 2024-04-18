import React, { useState } from 'react';
import logo from '../common/header/logo.png'
import icon_prof from '../ClaimManage/icon_prof.png'
import notify from '../ClaimManage/notify.png'
import '../../App.css'
import '../ClaimManage/ClaimForm.css'
import Sidebar from '../common/sidebar/Sidebar.jsx'
import search from '../common/search/Search.jsx'
import '../PnD/Diagnosis.css'
import Topbar from '../common/topbar/Topbar.jsx'

import { Link } from 'react-router-dom';

function Diagnosis() {
    return (
        <body>
            <div>
                  <Topbar />
            </div>
            <div className="mid">
                <div>
                    <Sidebar />
                </div>

                <div>
                    <div class="container mx-auto px-4">
                        <div class="flex justify-between items-center py-4">
                            <h1 class="text-2xl font-semibold">Procedure and Diagnosis codes</h1>
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Add Code
                            </button>
                        </div>
                    <div class="flex justify-between mb-4">
                        <div class="flex gap-2 items-center">
                            <label>Show</label>
                            <select class="form-select block w-full mt-1 border-zinc-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md">
                                <option>10</option>
                                <option>20</option>
                                <option>50</option>
                            </select>
                            <label>entries</label>
                        </div>
                        <div>
                            <input type="text" placeholder="Search:" class="form-input block w-full mt-1 border-zinc-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md" />
                        </div>
                    </div>

                    <div class="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative">
                        <table class="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
                            <thead>
                                <tr class="text-left">
                                    <th class="py-2 px-3 sticky top-0 border-b border-zinc-200 bg-zinc-100">Code</th>
                                    <th class="py-2 px-3 sticky top-0 border-b border-zinc-200 bg-zinc-100">Code Type</th>
                                    <th class="py-2 px-3 sticky top-0 border-b border-zinc-200 bg-zinc-100">Title</th>
                                    <th class="py-2 px-3 sticky top-0 border-b border-zinc-200 bg-zinc-100">Description</th>
                                    <th class="py-2 px-3 sticky top-0 border-b border-zinc-200 bg-zinc-100">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="py-2 px-3">99213</td>
                                    <td class="py-2 px-3">Procedure</td>
                                    <td class="py-2 px-3">Arthroscopy, Shoulder, Surgical...</td>
                                    <td class="py-2 px-3">This code is used when performing arthroscopic...</td>
                                    <td class="py-2 px-3">
                                        <button class="text-blue-500 hover:text-blue-700"><i class="fas fa-eye"></i></button>
                                        <button class="text-green-500 hover:text-green-700"><i class="fas fa-edit"></i></button>
                                        <button class="text-red-500 hover:text-red-700"><i class="fas fa-trash"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="py-2 px-3">J45.909</td>
                                    <td class="py-2 px-3">Diagnosis</td>
                                    <td class="py-2 px-3">Unspecified Asthma...</td>
                                    <td class="py-2 px-3">This code is used for cases...</td>
                                    <td class="py-2 px-3">
                                        <button class="text-blue-500 hover:text-blue-700"><i class="fas fa-eye"></i></button>
                                        <button class="text-green-500 hover:text-green-700"><i class="fas fa-edit"></i></button>
                                        <button class="text-red-500 hover:text-red-700"><i class="fas fa-trash"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="flex justify-between items-center py-4">
                        <span>Showing 1 to 2 of 2 entries</span>
                        <div class="inline-flex">
                            <button class="text-sm bg-zinc-300 hover:bg-zinc-400 text-zinc-800 font-semibold py-2 px-4 rounded-l">
                                Previous
                            </button>
                            <button class="text-sm bg-zinc-300 hover:bg-zinc-400 text-zinc-800 font-semibold py-2 px-4 rounded-r">
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

export default Diagnosis;