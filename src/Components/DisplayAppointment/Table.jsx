import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import { FaDownload } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';


function Table() {
  const [doctors, setDoctors] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const receivedData = location.state?.data;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://dulanga.sliit.xyz/api/innobothealth/doctor/list", {
          params: {
            date: "2024-05-28",
            specialization: receivedData.specialization
          }
        });
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array to fetch data only once when the component mounts

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  const filteredData = doctors.filter(item =>
    item.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.availabilityFrom.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.availabilityTo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const downloadCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + filteredData.map(user => Object.values(user).join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "doctor_list.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex items-center mb-4">
        <input
          type="search"
          placeholder="Search Name"
          className="w-6/12 ml-5 px-1 py-4 rounded bg-grey text-black placeholder-white"
          value={searchQuery}
          onChange={handleSearch}
        />
        <button className="ml-4 p-4 bg-slate-600 rounded-full">
          <AiOutlineSearch />
        </button>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4" onClick={downloadCSV}>
        <FaDownload className="inline-block mr-2" />
        Download Doctor List (CSV)
      </button>

      <table className="border-collapse border border-gray-800 mt-2 text-black table-auto w-full">
        <thead>
          <tr className="bg-blue-grey">
            <th className="border border-gray-300 p-4">Doctor First Name</th>
            <th className="border border-gray-300 p-4">Doctor Last Name</th>
            <th className="border border-gray-300 p-4">Specialization</th>
            <th className="border border-gray-300 p-4">Availability from</th>
            <th className="border border-gray-300 p-4">Availability to</th>
            <th className="border border-gray-300 p-4">Select</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(doctor => (
            <tr key={doctor.id}>
              <td className="border border-gray-300 p-4">{doctor.firstName}</td>
              <td className="border border-gray-300 p-4">{doctor.lastName}</td>
              <td className="border border-gray-300 p-4">{doctor.specialization}</td>
              <td className="border border-gray-300 p-4">{doctor.availabilityFrom}</td>
              <td className="border border-gray-300 p-4">{doctor.availabilityTo}</td>
              <td className="border border-gray-300 p-4">
                <button onClick={() => navigate('/displayscheduled')} className="bg-green-300 hover:bg-black text-white font-normal py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-blue-800 ml-20 mt-2">
                  Schedule Appointment
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
