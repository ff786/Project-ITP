import React, { useState } from 'react';
import './Auth.css';
import '../../App.css';
// import Video2 from '../../LoginAssets/Video2.mp4';
import Video from '../../LoginAssets/video.mp4';
import logo from '../../LoginAssets/logo.png';
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import {getAnalytics, logEvent, setUserProperties} from "firebase/analytics";

const Auth = () => {

  const analytics = getAnalytics();
  setUserProperties(analytics, {
    user: 'Dulanga Wimalagunasekara'
  });
  logEvent(analytics,'test_event', { date : Date.now(), platform : "Innobot-FE-SLIIT"});

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  /* const [username, setUsername] = useState(''); */
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);

  const toggleAuth = () => {
    setIsLogin(prevState => !prevState);
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  if (isLogin) {
    // Login
    try {
      const response = await fetch('https://dulanga.sliit.xyz/api/innobothealth/admin/otp/request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        // OTP request successful, show OTP input
        setShowOtpInput(true);
      } else {
        // Handle error
        console.error('Failed to request OTP:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  } else {
    // Validate OTP
    try {
      const response = await fetch('https://dulanga.sliit.xyz/api/innobothealth/admin/otp/request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp }),
      });
      const data = await response.json();
      if (response.ok) {
        // OTP validation successful, proceed with login
        console.log("Login Successful");
      } else {
        // Handle error
        console.error('Failed to validate OTP:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
}; /* else {
      // Register
      try {
        const response = await fetch('https://dulanga.sliit.xyz/api/innobothealth/admin/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, username, password }),
        });
        const data = await response.json();
        if (response.ok) {
          // Assuming registration is successful, handle next steps (e.g., navigate to login page)
          console.log(data);
        } else {
          // Handle error
          console.error('Failed to register:', data.message);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } */

  return (
    <div className='min-h-screen flex items-center justify-center bg-zinc-200'>
     <div className="grid grid-col-2 h-full rounded-lg">
     <div className="flex w-full max-w-7xl shadow-lg rounded-lg bg-white">
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
            <h3>{isLogin ? "Welcome Back!" : "Let Us Know You"}</h3>
          </div>

          <form onSubmit={handleSubmit} className='form grid'>
              <div className="inputDiv">
                <label htmlFor="email">Email</label>
                <div className="input flex">
                  <MdEmail className='icon'></MdEmail>
                  <input type="text" id='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>
            {!isLogin && (
            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className='icon'></FaUserShield>
                <input type="text" id='username' placeholder='Enter username' value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
            </div>
            )}
            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className='icon' />
                <input type='text' id='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
            {showOtpInput && (
              <div className="inputDiv">
                <label htmlFor="otp">OTP</label>
                <div className="input flex">
                  <input type="text" id='otp' placeholder='Enter OTP' value={otp} onChange={(e) => setOtp(e.target.value)} />
                </div>
              </div>
            )}
            <div>
            <button type='submit' className='btn'>
              <span>{isLogin ? "Login" : "Register"}</span>
            </button>
            </div>
            {isLogin && (
              <span className='forgotPassword' >
                Forgot your Password? <Link to='/forgot-password'>Click Here</Link>
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
