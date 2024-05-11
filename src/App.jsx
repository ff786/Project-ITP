import './App.css'
import Login from './Components/Login/Login'
import IndexLogin from './Components/Login/IndexLogin.jsx'
import Register from './Components/Register/Register'
import Verify from './Components/Verify/Verify' 
import Password  from './Components/Password/Password'
import Dashboard from './Components/common/common'
import Appointments from './Components/Appointments/Appointments'
import Schedule from  './Components/Schedule/Schedule'
import Scheduleinsurance from './Components/Scheduleinsurance/Scheduleinsurance'
import UpdateAppointment from './Components/UpdateAppointment/UpdateAppointment'
import ClaimForm from './Components/ClaimManage/ClaimForm'
import UpdateForm from './Components/UpdateClaim/UpdateForm'
import OverviewClaim from './Components/ClaimOverview/OverviewClaim'
import Diagnosis from './Components/PnD/Diagnosis.jsx'
import PndView from './Components/ViewPND/PndView.jsx'
import NotifyForm from './Components/NotifyForm/NotifyForm.jsx'
import NotifyView from './Components/NotifyView/NotifyView.jsx'
import PatientForm from './Components/FormPatient/PatientForm.jsx'
import NotifyUpdateForm from "./Components/NotifyForm/NotifyUpdateForm.jsx";

import DisplayAppointment from './Components/DisplayAppointment/DisplayAppointment'
import DisplayScheduled from './Components/DisplayScheduled/DisplayScheduled'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><IndexLogin /> </div>
  },
  {
    path: '/register',
    element: <div><Register /> </div>
  } ,
  {
    path: '/Verify',
    element: <div><Verify /> </div>
  } ,
  {
    path: '/password',
    element: <div><Password /> </div>
  },
  {
    path: '/dashboard',
    element: <div><Dashboard /> </div>
  },
  {
    path: '/appointments',
    element: <div><Appointments/> </div>
  },
  {
    path: '/schedule',
    element: <div><Schedule/> </div>
  },
  {
    path: '/scheduleinsurance',
    element: <div><Scheduleinsurance/> </div>
  },
  {
    path: '/updateapp',
    element: <div><UpdateAppointment/> </div>
  },

  {
    path: '/ClaimManage',
    element: <div><ClaimForm /> </div>
  },
  {
    path: '/edit/:id',
    element: <div><UpdateForm /> </div>
  },
  {
    path: '/ClaimOverview',
    element: <div><OverviewClaim /> </div>
  },
  {
    path: '/PnD',
    element: <div><Diagnosis /> </div>
  },
  {
    path: '/ViewPND',
    element: <div><PndView /> </div>
  },
  {
    path: '/NotifyForm',
    element: <div><NotifyForm /> </div>
  },
  {
    path: '/NotifyView',
    element: <div><NotifyView /> </div>
  },
  {
    path: '/FormPatient',
    element: <div><PatientForm /> </div>
  },
  {
    path: '/displayappointment',
    element: <div><DisplayAppointment/> </div>
  },
  {
    path: '/displayscheduled',
    element: <div><DisplayScheduled/> </div>
  },


  {
    path: '/login',
    element: <div><Login /> </div>
  },
  {
    path: '/updateNotification',
    element: <div><NotifyUpdateForm /> </div>
  },


])

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
