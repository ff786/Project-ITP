import React from 'react'
import Topbar from '../common/topbar/Topbar'
import Searchbar from '../DisplayAppointment/Searchbar'
import RowTable from '../DisplayAppointment/RowTable'
function DisplayScheduled() {
  return (
    <div>
        <Topbar/>
        <Searchbar/>
        <RowTable/>

    </div>
  )
}

export default DisplayScheduled
