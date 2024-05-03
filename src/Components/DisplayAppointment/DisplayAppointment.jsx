import React from 'react';
import Topbar from "../common/topbar/Topbar";
import './DisplayAppointment.css';
import RowTable from './RowTable';
// import Searchbar from "./Searchbar";
import Table from './Table';
// import { saveAs } from 'file-saver';
// import { FaDownload } from 'react-icons/fa';


function DisplayAppointment() {

  // const downloadCSV = () => {
  //   const csvContent = "data:text/csv;charset=utf-8," 
  //     + filteredUsers.map(user => Object.values(user).join(",")).join("\n");
  //   const encodedUri = encodeURI(csvContent);
  //   const link = document.createElement("a");
  //   link.setAttribute("href", encodedUri);
  //   link.setAttribute("download", "user_list.csv");
  //   document.body.appendChild(link);
  //   link.click();
  // };

  return (
    <div>
    <Topbar/>   

        <RowTable/>
        
      <Table/>
      
    </div>
  );
}

export default DisplayAppointment;

