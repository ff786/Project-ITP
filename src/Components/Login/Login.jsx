import React, { useState } from 'react';
import './Auth.css';
import '../../App.css';
import Video from '../../LoginAssets/video.mp4';
import logo from '../../LoginAssets/logo.png';
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {getAnalytics, logEvent} from "firebase/analytics";
import {app} from '../../../firebase.js';

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
  const [ShowOtpInput, setShowOtpInput] = useState(false);

  const toggleAuth = () => {
    setIsLogin(prevState => !prevState);
  };

  const handleFirstClick = async () => {
    try {
      const response = await fetch('http://api.innobot.dulanga.com/api/innobothealth/admin/otp/request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      console.log('Response:', response);
      /* const data = await response.json();
      console.log('Data:', data); */
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
  };

  const handleSecondClick = async () => {
    try {
      const response = await fetch('http://api.innobot.dulanga.com/api/innobothealth/admin/request/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp }),
      });
      const data = await response.json();
      if (response.ok) {
        // OTP validation successful, proceed with login
        setShowOtpInput(true);
        //console.log("Login Successful");
        sessionStorage.setItem('access_token', data.access_token);
        navigate('./NotifyForm');

      } else {
        // Handle error
        console.error('Failed to validate OTP:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ShowOtpInput) {
      handleSecondClick();
    } else {
      handleFirstClick();
    }
  };

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

          <div className="w-full lg:w-1/2 bg-zinc-300 p-20 h-auto rounded-lg" style={{ marginLeft: isLogin ? 'auto' : 0, marginRight: isLogin ? 0 : 'auto' }}>
            <div className="headerDiv">
              <h3>{isLogin ? "Welcome Back!" : "Let Us Know You"}</h3>
            </div>

            <form onSubmit={handleSubmit} className='form grid'>
              <div className="inputDiv">
                <label htmlFor="email">Email</label>
                <div className="input flex">
                  <MdEmail className='icon'></MdEmail>
                  <input type="text" name="email" id='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
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
                <input className="inputP" type='password' id='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
            <button type='submit' className='btn flex'>
              <span>Login</span>
              <AiOutlineSwapRight className='icon' />
            </button>

            <Link to={'/Verify'}>
            <span className='forgotPassword'>
              Forgot your Password? <a href=''>Click Here</a>
            </span>
            </Link> 
            
           

          </form>
        </div>
      </div>
    </div>
  );
}

export default Auth;
