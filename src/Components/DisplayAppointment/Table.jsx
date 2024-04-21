import React, { useEffect, useState } from 'react';

function Table() {
  // Sample data for demonstration
  const [doctors, setDoctors] = useState([
    { id: 1, name: 'Doctor 1', date: '2024-04-15', timeSlots: ['10:00 AM', '11:00 AM'] },
    { id: 2, name: 'Doctor 2', date: '2024-04-16', timeSlots: ['1:00 PM', '2:00 PM'] },
  ]);

  useEffect(() => {
    // Fetch data from MongoDB and update the state
    // Replace this with actual MongoDB data fetching logic
  }, []);

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
