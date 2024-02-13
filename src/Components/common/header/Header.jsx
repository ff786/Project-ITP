import React from 'react';
import { useState } from 'react';
import { Navbar } from '../../common';
import logo from './logo.png'
import Search from '../search/Search';
import './Header.css';
import { FaInbox } from "react-icons/fa";
import { MdSwapHoriz } from 'react-icons/md';
import { BsArrowLeftShort, BsSearch,BsChevronDown, BsReverseLayoutTextSidebarReverse} from 'react-icons/bs';
import { AiFillEnvironment, AiOutlineBarChart, AiOutlineFileText, AiOutlineSetting } from 'react-icons/ai';
import { MdPeople } from "react-icons/md";
import {RiDashboardFill} from "react-icons/ri";
import { BsHospitalFill } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GrFavorite } from "react-icons/gr";
import { FaChartBar } from 'react-icons/fa';
console.log(logo);
function Header (){
  const[open,setOpen]= useState(false);
  const[submenuOpen,setSubmenuOpen]= useState(false);

  const handleNavbarToggle = () => {
    setOpen(!open);
    // Close submenu when toggling the navbar
    setSubmenuOpen(false);
  };



  
  
  const Menus=[
    {title:"Favorites",icon:<GrFavorite />},
    {title:"Menu"},
    {title:"Practice",icon: <BsHospitalFill />},
    {title:"Referrals",spacing:true,icon:<MdSwapHoriz size={30}/>},
    {title:"Documents",icon:<BsReverseLayoutTextSidebarReverse/>,
     submenu:true,
     submenuItems:[
      {title:"submenu 1       "},
      {title:"submenu 2       "},
      {title:"submenu 3       "},
      {title:"submenu 4 "},
     ],
    },
    {title: "Billing",icon:<FaMoneyBillTransfer />},
    {title: "Messages",icon:<FaInbox />},
    {title: "Analytics",icon:<FaChartBar /> },
    {title: "Settings",icon:<AiOutlineSetting/>},
    
  ];
    return(
        <section className="header">
           <section className="header-top">
            
            <section className="header-top__logo">
              {/*<a href="/" className="header-logo">LOGO</a>*/}
              <img src={logo} alt="Logo" />

            </section>
           
            <section className="header-top__navbar">
           
            
          <section className="header-top__navigation">
          
              <Search/>
            
            <Navbar />
          </section>
         
        </section>
      </section>
      <div className="thisfill">
              <div className="firsticon">
                <input type="checkbox" style={{ marginBottom:'5px', marginLeft:'15px' ,marginTop: '8px'}}>

                </input>
                </div><div className="secondicon"></div><div className="thirdicon">
              </div><div className="fourthicon"></div><div className="fifthicon"></div>
      </div>
      <section>
        <div className="flex">
        
          <div className={`bg-dark-purple h-screen p-5 pt-8 ${open ? "w-100" : "w-20"} duration-300 relative rounded-right`}>
        
    <BsArrowLeftShort
      className={`bg-amber text-03989e text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer
        ${!open && "rotate-180"}`}
      onClick={handleNavbarToggle}
    />
        
         <div className="inline-flex">
         {/* <RxHamburgerMenu  className={`bg-amber text-4xl rounded cursor-pointer float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`}/> */}

         
         </div>

         <div className={`flex items-center rounded-md bg-light-white mt-6 ${!open ? "px-2" : "px-4"} py-2`}>
            <BsSearch className={`text-black text-lg block float-left cursor-pointer  ${open && "mr-5"}`}/>
        <input type={"search"} className={`text-base bg-transparent w-full text-black focus:outline-none $(!open && "hidden")`} placeholder="Enter your search"/>
         </div>
        <ul className="pt-2">
          {Menus.map((menu,index)=>(
              <>
              <li key={index} className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.spacing ? "mt-9" : "mt-4"} `}>
               <span className="text-2xl block float-left">
                {menu.icon ? menu.icon : <RiDashboardFill/>}
               </span>
                <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>
                  {menu.title}
                  </span>
                  {menu.submenu && open && (
                    <BsChevronRight  className={` ${submenuOpen && "rotate-180"}`} onClick={()=>
                       setSubmenuOpen(!submenuOpen)
                      }/>
                  )}
              </li>
              
              
              
              {menu.submenu && submenuOpen && open && (
  <ul className={`submenu ${submenuOpen ? 'open' : ''}`}>
    {menu.submenuItems.map((submenuItem, index) => (
      <li key={index} className="text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 pl-5 pr-2 hover:bg-light-white rounded-md">
      {submenuItem.title}
    </li>
    ))}
  </ul>
)}

              
              </>
          ))}
        </ul>


          </div>
<div className="tablealtering">
  
{/* 
<table style={{ borderCollapse: 'collapse', width: '100%', border: '1px solid black' }} className="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email Address</th>
      <th scope="col">Contact</th>
      <th scope="col">Edit</th>
      <th scope="col">Select</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Additional Column 1</td>
      <td>Additional Column 2</td>
      <td><input type="checkbox" /></td>
      <td>Additional Column 4</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Additional Column 1</td>
      <td>Additional Column 2</td>
      <td><input type="checkbox" /></td>
      <td>Additional Column 4</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Larry the Bird</td>
      <td>Thornton</td>
      <td>@twitter</td>
      <td>Additional Column 1</td>
      <td>Additional Column 2</td>
      <td><input type="checkbox" /></td>
      <td>Additional Column 4</td>
    </tr>
  </tbody>
</table>
*/}
</div>
        </div>
       
        </section>




        
        </section>
        
        
       
    )
}

export default Header;