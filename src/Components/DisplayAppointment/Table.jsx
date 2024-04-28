import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";

function Table() {
  const [doctors, setDoctors] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // const [doctorAvailability,setAvailability]= useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://dulanga.sliit.xyz/api/innobothealth/doctor/list", {
          params: {
            date: "2024-04-19",
            specialization: "specialization"
          }
        });
        setDoctors(response.data);
        navigate('/displayscheduled');
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
    item.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.doctor.availabilityFrom.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.doctor.availabilityTo.toLowerCase().includes(searchQuery.toLowerCase())
).sort((a, b) => new Date(b.deliveredTime) - new Date(a.deliveredTime));

  return (

    <div className="overflow-x-auto">
      <input
          type="search"
          placeholder="Search Name"
          className="w-6/12 ml-5 mt-1 px-1 py-4 rounded bg-grey text-black placeholder-white"
          value={searchQuery}
          onChange={handleSearch}
        />
         {/* <button className="mt-1  absolute right-1 top-1/2 -translate-y-1/2 p-3 bg-slate-600 rounded-full"> */}
         <button  className="absolute top-55  mt-1 mr-10 p-4 bg-slate-600 rounded-full">
          <AiOutlineSearch />
        </button>
      <table className="border-collapse border border-gray-800 mt-10 text-black table-auto w-full">
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
          {doctors.map(doctor => (
            // <tr key={doctor.id}>
            //   <td className="border border-gray-300 p-4">{doctor.firstname}</td>
            //   <td className="border border-gray-300 p-4">{doctor.lastname}</td>
            //   <td className="border border-gray-300 p-4">{doctor.specialization}</td>
            //   <td className="border border-gray-300 p-4">{doctor.availability.from}</td>
            //   <td className="border border-gray-300 p-4">{doctor.availability.to}</td>
            //   <td className="border border-gray-300 p-4">Schedule Appointment</td>
            // </tr>
            
              <tr key={doctor.id}>
                <td className="border border-gray-300 p-4">{doctor.firstName}</td>
                <td className="border border-gray-300 p-4">{doctor.lastName}</td>
                <td className="border border-gray-300 p-4">{doctor.specialization}</td>
                <td className="border border-gray-300 p-4">{doctor ? doctor.availabilityFrom : ''}</td>
                <td className="border border-gray-300 p-4">{doctor? doctor.availabilityTo : ''}</td>
                <button className="bg-green-300 hover:bg-black text-white font-normal py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-blue-800 ml-20 mt-2">
                    Schedule Appointment
                </button>
              </tr>
            ))}
            
            
         
        </tbody>
      </table>
    </div>
  );
}

export default Table;
