import React, { useState } from 'react';
import logo from '../common/header/logo.png'
import Topbar from '../common/topbar/Topbar.jsx'
import icon_prof from '../ClaimManage/icon_prof.png'
import notify from '../ClaimManage/notify.png'
import '../../App.css'
import '../ClaimManage/ClaimForm.css'
import '../UpdateClaim/UpdateForm.css'
import './PatientForm.css'
import Sidebar from '../common/sidebar/Sidebar.jsx'

import { Link } from 'react-router-dom';

const PatientForm = () => {
  const [PaymentId, setPaymentId] = useState('');
  const [age, setAge] = useState('');
  const [Gender, setGender] = useState('');
  const [Amount, setAmount] = useState('');
  const [CVV, setCVV] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [email, setEmail] = useState('');

  return (

          <body>
            <div>
                <Topbar />
            </div>
            <div className="main-dom">
            <div>
                <Sidebar />
            </div>
                <div className="md">
                        <div className="bg-black-100 dark:bg-white-500">
                          <div className="max-w-4xl mx-auto p-6">
                            <div className="bg-white dark:bg-black-700 shadow-lg rounded-lg p-10">
                              <div className="flex justify-between items-center mb-8 gap-10">
                                <h1 className="text-3xl font-bold text-zinc-900 dark:text-black">Patient Add</h1>
                                <div>
                                  <button type="cancel" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Generate Report</button>
                                  <button type="cancel" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Delete Patient</button>
                                </div>
                              </div>
                              <form>
                                <div className="grid grid-cols-1 gap-6">
                                  <label className="block">
                                    <span className="text-zince-700 dark:text-white-300">Patient name:</span>
                                    <input type="text" className="mt-1 block w-full rounded-md bg-zinc-100 border-transparent focus:border-zinc-500 focus:bg-white focus:ring-0" placeholder="" />
                                  </label>
                                  <label className="block">
                                    <span className="text-zinc-700 dark:text-white-300">Age</span>
                                    <input type="number" className="mt-1 block w-full rounded-md bg-zinc-100 border-transparent focus:border-zinc-500 focus:bg-white focus:ring-0" placeholder="" />
                                  </label>
                                  <label className="block">
                                    <span className="text-zinc-700 dark:text-white-300">Gender</span>
                                    <input type="text" className="mt-1 block w-full rounded-md bg-zinc-100 border-transparent focus:border-zinc-500 focus:bg-white focus:ring-0" placeholder="" />
                                  </label>
                                  <label className="block">
                                    <span className="text-zinc-700 dark:text-white-300">DOB</span>
                                    <input type="date" className="mt-1 block w-full rounded-md bg-zinc-100 border-transparent focus:border-zinc-500 focus:bg-white focus:ring-0" />
                                  </label>
                                  <label className="block">
                                    <span className="text-zinc-700 dark:text-white-300">Country</span>
                                    <input type="text" className="mt-1 block w-full rounded-md bg-zinc-100 border-transparent focus:border-zinc-500 focus:bg-white focus:ring-0" placeholder="" />
                                  </label>
                                  <label className="block">
                                    <span className="text-zinc-700 dark:text-white-300">Address</span>
                                    <input type="text" className="mt-1 block w-full rounded-md bg-zinc-100 border-transparent focus:border-zinc-500 focus:bg-white focus:ring-0" placeholder="" />
                                  </label>
                                  <label className="block">
                                    <span className="text-zinc-700 dark:text-white-300">Email</span>
                                    <input type="email" className="mt-1 block w-full rounded-md bg-zinc-100 border-transparent focus:border-zinc-500 focus:bg-white focus:ring-0" placeholder="" />
                                  </label>
                                </div>
                                <div className="flex justify-end mt-6">
                                  <button type="cancel" className="bg-zinc-300 hover:bg-zinc-400 text-zinc-800 font-bold py-2 px-4 rounded">Reset</button>
                                  <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Add</button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                </div>
            </div>
          </body>

      );
  }

  export default PatientForm;