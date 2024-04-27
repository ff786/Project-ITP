import React, { useState } from 'react';
import './Auth.css';
import '../../App.css';
import Video2 from '../../LoginAssets/Video2.mp4';
import Video from '../../LoginAssets/Video.mp4';
import logo from '../../LoginAssets/logo.png';
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuth = () => {
    setIsLogin(prevState => !prevState);
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-zinc-200'>
     <div className="grid grid-col-2 h-full rounded-lg">
     <div className="flex w-full max-w-7xl shadow-lg rounded-lg bg-white">
      {/* <div className="container flex"> */}
        <div className="w-1/2 bg-white p-8 grid grid-col-2">
         <div className="mb-o">
           <video autoPlay muted loop src={Video} className="h-full w-full object-transparent" ></video>
         </div>
           <span className="text">{isLogin ? "Don't have an account?" : "Have an account?"}</span>
           <button
             className="bg-transparent text-blue-950 font-semibold py-2 px-4 rounded"
             onClick={toggleAuth}>{isLogin ? "Sign Up" : "Login"}
           </button>
        </div>

        <div className="w-full lg:w-1/2 bg-zinc-300 p-12 rounded-lg" style={{ marginLeft: isLogin ? 'auto' : 0, marginRight: isLogin ? 0 : 'auto' }}>
          <div className="headerDiv">
           {/*  <img src={logo} alt='logo' className='mx-auto' /> */}
            <h3>{isLogin ? "Welcome Back!" : "Let Us Know You"}</h3>
          </div>

          <form action="" className='form grid'>
            {/* <span className='showMessage'>Login Status will go here</span>*/}
              <div className="inputDiv">
                <label htmlFor="username">Email</label>
                <div className="input flex">
                  <MdEmail className='icon'></MdEmail>
                  <input type="text" id='email' placeholder='Enter email' />
                </div>
              </div>
            {!isLogin && (
            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className='icon'></FaUserShield>
                <input type="text" id='username' placeholder='Enter username' />
              </div>
            </div>
            )}
            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className='icon' />
                <input type='text' id='password' placeholder='Enter Password' />
              </div>
            </div>
            <div>
            <button type='submit' className='btn'>
              <span>{isLogin ? "Login" : "Register"}</span>
            </button>
            </div>
            {isLogin && (
              <span className='forgotPassword' >
                Forgot your Password? <a href=''>Click Here</a>
              </span>
            )}
          </form>
        </div>
      </div>
     </div>
    </div>
  );
}

export default Auth;