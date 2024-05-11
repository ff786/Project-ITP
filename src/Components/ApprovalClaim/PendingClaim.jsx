import React, { useState, useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import axios from 'axios';
import {toast} from "react-toastify"
import Table from 'react-bootstrap/Table';
import './ApprovalClaim.css'

import { Link } from 'react-router-dom'

const PendingClaim = ({ isOpen, onClose }) => {

  const [pendingClaims, setPendingClaims] = useState([]);

    useEffect(() => {
      const fetchPendingClaims = async () => {
        try {
          const response = await axios.get('https://dulanga.sliit.xyz/api/innobothealth/claim/getAll');
          // Filter out the claims where approved is false
          const filteredClaims = response.data.filter(claim => !claim.approved);
          setPendingClaims(filteredClaims);
        } catch (error) {
          console.error('Error fetching pending claims:', error);
          toast.error('Error fetching pending claims');
        }
      };

      fetchPendingClaims();
    }, []);

  const handleApproveClaim = async (id) => {
    try {
      // Send a request to update the claim status to approved
      await axios.put(`https://dulanga.sliit.xyz/api/innobothealth/claim/approve/${id}`);
      // Update the local state to reflect the change
      const updatedClaims = pendingClaims.map(claim => {
        if (claim.id === id) {
          return { ...claim, approved: true };
        }
        return claim;
      });
      setPendingClaims(updatedClaims);
      toast.success('Claim approved successfully');
    } catch (error) {
      console.error('Error approving claim:', error);
      toast.error('Error approving claim');
    }
  };

  const handleCancel = () => {
    onClose();
  }

  return (
    <div className={`modal-overlay ${isOpen ? "open" : ''}`}>
       <div className="modal-content">
         <button className="text-zinc-600 hover:text-red-900" onClick={handleCancel}>
            <svg
             xmlns="http://www.w3.org/2000/svg"
             className="h-6 w-6"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor">
            <path
             strokeLinecap="round"
             strokeLinejoin="round"
             strokeWidth="4"
             d="M6 18L18 6M6 6l12 12"
             />
           </svg>
         </button>
         <div className="container mx-auto p-6 bg-white dark:bg-zinc-500">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-zinc-800">
                  <thead>
                    <tr className="w-full h-16 border-text-white dark:border-zinc-200 border-b py-8">
                      <th className="text-left pl-8 pr-6 text-xs font-medium text-zinc-600 dark:text-white uppercase tracking-wider">
                        Member ID
                      </th>
                      <th className="text-left px-6 text-xs font-medium text-zinc-600 dark:text-white uppercase tracking-wider">
                        Claim Type
                      </th>
                      <th className="text-left px-6 text-xs font-medium text-zinc-600 dark:text-white uppercase tracking-wider">
                        LastName, FirstName
                      </th>
                      <th className="text-left px-6 text-xs font-medium text-zinc-600 dark:text-white uppercase tracking-wider">
                        Email
                      </th>
                      <th className="text-left px-6 text-xs font-medium text-zinc-600 dark:text-white uppercase tracking-wider">
                        Status
                      </th>
                      <th className="text-left px-6 text-xs font-medium text-zinc-600 dark:text-white uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:text-white">
                   {pendingClaims.map(claim => (
                    <tr key={claim.id} className="text-zinc-700 dark:text-black">
                      <td className="px-8 py-4 whitespace-no-wrap border-b border-text-black dark:border-zinc-200">
                        {claim.memberId}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-text-black dark:border-zinc-200">
                        {claim.claimType}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-text-black dark:border-zinc-200">
                        {claim.lastName}, {claim.firstName}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-text-black dark:border-zinc-200">
                        {claim.email}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-text-black dark:border-zinc-200">
                        {claim.approved ? 'Approved' : 'Pending'}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-text-black dark:border-zinc-200">
                        <div className="flex items-center">
                          <button className="text-green-600 hover:text-green-900 mr-2" onClick={() => handleApproveClaim(claim.id)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-7 w-7"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-7 w-7"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
           </div>
         </div>
  );
}

export default PendingClaim;