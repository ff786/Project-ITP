import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios

function Table() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://dulanga.sliit.xyz/api/innobothealth/doctor");
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array to fetch data only once when the component mounts

  return (
    <div className="overflow-x-auto">
      <table className="border-collapse border border-gray-800 mt-10 text-black table-auto w-full">
        <thead>
          <tr className="bg-blue-grey">
            <th className="border border-gray-300 p-4">Id</th>
            <th className="border border-gray-300 p-4">Doctor Name</th>
            <th className="border border-gray-300 p-4">Date</th>
            <th className="border border-gray-300 p-4">Available Time Slots</th>
            <th className="border border-gray-300 p-4">Select</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map(doctor => (
            <tr key={doctor.id}>
              <td className="border border-gray-300 p-4">{doctor.id}</td>
              <td className="border border-gray-300 p-4">{doctor.name}</td>
              <td className="border border-gray-300 p-4">{doctor.date}</td>
              <td className="border border-gray-300 p-4">{doctor.timeSlots.join(', ')}</td>
              <td className="border border-gray-300 p-4">Select Button</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
