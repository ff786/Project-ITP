import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';

function FeeScheduleManagement() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);

  const columnTable = [
    { name: 'mem_ID', selector: (row) => row.mem_ID },
    { name: 'Name', selector: (row) => row.name },
    { name: 'Address', selector: (row) => row.address },
    { name: 'Phone Number', selector: (row) => row.phone_number },
    { name: 'Payer ID', selector: (row) => row.payID },
    { name: 'City', selector: (row) => row.city },
    { name: 'State', selector: (row) => row.state },
    { name: 'ZIP', selector: (row) => row.zip },
    {
      name: 'Action',
      cell: (row) => (
        <div>
          <Link to={`/update/${row.id}`}>&gt;</Link>
          <button
            type="button"
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-yellow-500 hover:bg-yellow-100 hover:text-yellow-800 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-yellow-800/30 dark:hover:text-yellow-400"
          >
            Edit
          </button>
          <button
            type="button"
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-500 hover:bg-red-100 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-red-800/30 dark:hover:text-red-400"
            onClick={() => handleDelete(row.ctp_code)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dulanga.sliit.xyz/api/innobothealth/insurance/getAll');
        setData(response.data);
        setFilteredData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [loading]);

  useEffect(() => {
    const result = data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    setFilteredData(result);
  }, [search, data]);

  const handleDelete = async (ctp_code) => {
    const confirmDeleteAction = window.confirm('Are you sure you want to delete this item?');
    if (confirmDeleteAction) {
      try {
        await axios.delete(`https://dulanga.azurewebsites.net/api/innobothealth/insurance/${ctp_code}`);
        const newData = data.filter((item) => item.ctp_code !== ctp_code);
        setData(newData);
        setLoading(true);
        setFilteredData(newData); // Update filtered data as well
      } catch (error) {
        console.log('Error deleting item:', error);
      }
    } else {
      console.log('Delete action canceled for item:', ctp_code);
    }
  };

  return (
    <div className="fee-schedule-management">
      <h2>Fee Schedule Management</h2>
      <div className="table-container" style={{ overflowX: 'auto', width: '90vw', overflowY: 'hidden', margin: 'auto' }}>
        <React.Fragment>
          <DataTable
            columns={columnTable}
            data={filteredData}
            pagination
            fixedHeader
            selectableRowsHighlight
            highlightOnHover
            subHeader
            subHeaderComponent={
              <input
                type="text"
                className="w-25 form-control float-right"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            }
            subHeaderAlign="left"
            style={{ width: '100%' }}
            onRowClicked={(row) => console.log(row)}
          />
        </React.Fragment>
      </div>
    </div>
  );
}

export default FeeScheduleManagement;
