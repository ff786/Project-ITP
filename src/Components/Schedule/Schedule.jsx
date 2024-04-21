import React from "react";
import Topbar from "../common/topbar/Topbar";
import "./Schedule.css";
import Sidebar from "../common/sidebar/Sidebar";
function Schedule() {
	const handleSubmit = () => {
		// Add any form submission logic here
		// For example, you can send data to a server or perform validation
		console.log("Form submitted!");
	};
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
									Appointment Scheduling
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
										id="grid-first-name"
										type="text"
										placeholder="Enter Your First Name"
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
										id="grid-last-name"
										type="text"
										placeholder="Enter Your Last Name"
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
										id="grid-last-name"
										type="text"
										placeholder="Any special messages for us to know"
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
										id="grid-last-name"
										type="text"
										placeholder="member id"
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
										id="grid-date"
										type="date"
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
											id="grid-state"
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
										id="grid-last-name"
										type="text"
										placeholder="abc123"
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
										id="grid-last-name"
										type="text"
										placeholder="0**********"
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
										id="grid-last-name"
										type="text"
										placeholder="@gmail.com"
									/>
								</div>
							</div>

							<div className="flex flex-wrap -mx-3 mb-6">
								<div className="w-full px-3 flex items-center justify-center">
									<input
										type="submit"
										className="bg-light-white hover:bg-blue-violet text-white font-normal py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
										value="See Appointments"
										onClick={handleSubmit}
									/>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className="button_placing_to-the_middle">
				<button className="bg-blue-violet hover:bg-black text-white font-normal py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
					Check Eligibility for Insurance
				</button>
			</div>
		</div>
	);
}

export default Schedule;