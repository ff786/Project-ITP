import React, {useEffect} from 'react';
import Topbar from '../common/topbar/Topbar';
import './UpdateAppointment.css'
import {  useState } from 'react'
import axios from 'axios';
import Sidebar from '../common/sidebar/Sidebar';
import { useLocation } from 'react-router-dom';

function UpdateAppointment() {

	const location = useLocation();
	const receivedData = location.state?.data;
	const [appointmentId, setAppointmentId] = useState('');

  // const [appointments,setAppointment]=useState([]);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [special_message, setSpecialMessage] = useState('');
  const [member_id, setMemberId] = useState('');
  const [date, setDate] = useState('');
  const [doctors_specialization, setDoctorsSpecialization] = useState('');
  const [doctor_id, setDoctorId] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [mail, setMail] = useState('');
  //       useEffect(()=>{
  //           (async () => await Load())();
        
  //       },[]);
  // async function Load()
  // {
  //     const result = await axios.get(
  //         "https://dulanga.sliit.xyz/api/innobothealth/all-appointments");
  //         setAppointments(result.data);
  //         console.log(result.data);
      
  // }

	// 
	useEffect(() => {
		if (receivedData) {
			setFirstname(receivedData.firstname || '');
			setLastname(receivedData.lastname || '');
			setSpecialMessage(receivedData.special_message || '');
			setMemberId(receivedData.member_id || '');
			setDate(receivedData.date || '');
			setDoctorsSpecialization(receivedData.doctors_specialization || '');
			setDoctorId(receivedData.doctor_id || '');
			setPhoneNumber(receivedData.phone_number || '');
			setMail(receivedData.mail || '');
		}
	}, [receivedData]);
	


  async function update(event){
      event.preventDefault();
      try{
          await axios.put("https://dulanga.sliit.xyz/api/innobothealth/appointment/update/" + appointmentId,
          {
              
              firstname : firstname,
              lastname  : lastname,
              special_message : special_message,
              member_id : member_id,
              date  : date,
              doctors_specialization: doctors_specialization,
              doctor_id  : doctor_id,
              phone_number  : phone_number,
              mail  : mail
          }
      );
            alert("Appointment Updated");
            setAppointmentId("")
            setFirstname("");
            setLastname("");
            setSpecialMessage("");
            setMemberId("");
            setDate("");
            setDoctorsSpecialization("");
            setDoctorId("");
            setPhoneNumber("");
            setMail("");
            Load();
         
      }catch(err){
          alert("Appointment Updating failed");
      }
  }
//   async function editAppointment(appointment)
//   {
//       setFirstname(appointment.firstname);
//       setLastname(appointment.lastname);
//       setSpecialMessage(appointment.special_message);
//       setMemberId(appointment.member_id);
//       setDate(appointment.date);
//       setDoctorsSpecialization(appointment.doctors_specialization);
//       setDoctorId(appointment.doctor_id);
//       setPhoneNumber(appointment.phone_number);
//       setMail(appointment.mail);
//       setAppointmentId(appointment._id);
//       //set the correct id here
//   }
  return (
    <div>
			<Topbar />

			<div className="alignthedisplay">
				<div className="tofit_content" style={{ width: "fit-content" }}>
					<Sidebar />
				</div>
				
				<div className="tofit_content">
					<div className="fix_the_position">
						<form className="w-full border border-gray-300 bg-dark-purple p-6 rounded">
							<div>
								<h3 className="text-white w-full  px-3 mb-6 md:mb-0 size-12 ">
									Appointment Update Scheduling
								</h3>
							</div>

							<div className="flex flex-wrap -mx-3 mb-6">
								<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
									<label
										className="block uppercase  tracking-wide text-white text-xs font-normal mb-2"
										htmlFor="grid-first-name"
									>
										First Name
									</label>
									<input
										className="appearance-none block w-full bg-light-white text-black border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
										id="firstname"
										type="text"

										placeholder="Enter Your First Name"
										value={firstname}
										onChange={(event)=>
										{
											setFirstname(event.target.value);
										}}
									/>
									{<p className="text-red-500 text-xs italic">Please fill out this field.</p>}
								</div>
								<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
									<label
										className="block uppercase tracking-wide text-white text-xs font-normal mb-2"
										htmlFor="grid-last-name"
									>
										Last Name
									</label>
									<input
										className="appearance-none block w-full bg-light-white text-black border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
										id="lastname"
										type="text"
										placeholder="Enter Your Last Name"
										value={lastname}
										onChange={(event) => {
											setLastname(event.target.value);
										}}
									/>
								</div>

								<div className="w-full  px-3">
									<label
										className="block uppercase  tracking-wide text-white text-xs font-normal mb-2"
										htmlFor="grid-last-name"
									>
										Special Message
									</label>
									<input
										className="appearance-none block w-full bg-light-white text-black border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
										id="special_message"
										type="text"
										placeholder="Any special messages for us to know"
										value={special_message}
										onChange={(event) => {
											setSpecialMessage(event.target.value);
										}}
									/>
								</div>
							</div>
							<div className="flex flex-wrap -mx-3 mb-6">
								<div className="w-full md:w-1/2 px-3">
									<label
										className="block uppercase tracking-wide text-white text-xs font-normal mb-2"
										htmlFor="grid-last-name"
									>
										Add a Member ID
									</label>
									<input
										className="appearance-none block w-full bg-light-white text-black border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
										id="member_id"
										type="text"
										placeholder="member id"
										value={member_id}
										onChange={(event) => {
											setMemberId(event.target.value);
										  }}
									/>
								</div>

								<div className="w-full md:w-1/2 px-3">
									<label
										className="block uppercase tracking-wide text-white text-xs font-normal mb-2"
										htmlFor="grid-date"
									>
										Select Date
									</label>
									<input
										className="appearance-none block w-full bg-light-white text-white  border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
										id="date"
										type="date"
										value={date}
										onChange={(event) => {
											setDate(event.target.value);
										  }}
									/>
								</div>
							</div>
						

							{/*  <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-white text-xs font-normal mb-2" htmlFor="grid-password">
                Password
              </label>
              <input className="appearance-none block w-full bg-light-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="" />
              <p className="text-white text-xs font-normal">Make it as long </p>
            </div>
          </div>
          */}
							<div className="flex flex-wrap -mx-3 mb-6">
								<div className="w-full  px-3 mb-6 md:mb-0">
									<label
										className="block uppercase tracking-wide text-white text-xs font-normal mb-2"
										htmlFor="grid-state"
									>
										Doctors Specialization
									</label>
									<div className="relative">
										<select
											className="block appearance-none w-4/5 bg-light-white border border-gray-200 text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
											id="doctors_specialization"
											value={doctors_specialization}
											onChange={(event) => {
												setDoctorsSpecialization(event.target.value);
											  }}
										>
											<option value="" disabled selected hidden>
												Select a Healthcare Sector
											</option>
											<option className="text-black">Dieticians</option>
											<option className="text-black">Neurologist</option>
											<option className="text-black">Dermatologis</option>
											<option className="text-black">Cardiologists</option>
											<option className="text-black">Dentists</option>
										</select>
									</div>
								</div>
							</div>

							<div className="flex flex-wrap -mx-3 mb-6">
								<div className="w-full md:w-1/2 px-3">
									<label
										className="block uppercase tracking-wide text-white text-xs font-normal mb-2"
										htmlFor="grid-last-name"
									>
										Add a Doctor id
									</label>
									<input
										className="appearance-none block w-full  bg-light-white text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
										id="doctor_id"
										type="text"
										placeholder="abc123"
										value={doctor_id}
											onChange={(event) => {
											setDoctorId(event.target.value);
											}}
									/>
								</div>
							</div>

							<div className="flex flex-wrap -mx-3 mb-6">
								<div className="w-full md:w-1/2 px-3">
									<label
										className="block uppercase tracking-wide text-white text-xs font-normal mb-2"
										htmlFor="grid-last-name"
									>
										Phone Number
									</label>
									<input
										className="appearance-none block w-full  bg-light-white text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
										id="phone_number"
										type="text"
										placeholder="0**********"
										value={phone_number}
											onChange={(event) => {
											setPhoneNumber(event.target.value);
											}}
									/>
								</div>
								<div className="w-full md:w-1/2 px-3">
									<label
										className="block uppercase tracking-wide text-white text-xs font-normal mb-2"
										htmlFor="grid-last-name"
									>
										Email
									</label>
									<input
										className="appearance-none block w-full  bg-light-white text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
										id="mail"
										type="text"
										placeholder="@gmail.com"
										value={mail}
											onChange={(event) => {
											setMail(event.target.value);
											}}
									/>
								</div>
							</div>

							<div className="flex flex-wrap -mx-3 mb-6">
								<div className="w-full px-3 flex items-center justify-center">
									<input
										type="submit"
										className="bg-light-white hover:bg-blue-violet text-white font-normal py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
										value="Update Appointment"
										// onClick={() => appointmentinsert(appointment) }
										// onClick={handleSubmit}
										onClick={update}
									/>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className="button_placing_to-the_middle">
				<button  className="bg-blue-violet hover:bg-black text-white font-normal py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
					Check Eligibility for Insurance
				</button>
			</div>
		</div>
  );
}

export default UpdateAppointment;
