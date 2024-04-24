import React from 'react'
import './Login.css' 
import '../../App.css'
import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/logo.png'
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {getAnalytics, logEvent} from "firebase/analytics";
import {app} from '../../../firebase.js';

const analytics = getAnalytics(app);

logEvent(analytics,'test_event', { date : Date.now(), platform : "Innobot-FE-SLIIT"});

const Login = () => {
  return (
    <div className='loginPage flex'>
      <div className="container flex">
        
        <div className="videoDiv">
          <video autoPlay muted loop src={video} ></video>

          <div className="textDiv">
          </div>
          <div className='footerDiv flex'>
            <span className='text'>Don't have an account?</span>
            <Link to={'/register'}>
              <button className='btn'>Sign Up</button>
            </Link>
          </div>
        </div>
  
        <div className="formDiv flex">
          <div className="headerDiv">
           <img src={logo} alt='logo'className='mx-auto' />
            <h3>Welcome Back!</h3>
          </div>

          <form action="" className='form grid'>
           {/* <span className='showMessage'>Login Status will go here</span>*/}
            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className='icon'></FaUserShield>
                <input type="text" id='username' placeholder='Enter username' />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className='icon' />
                <input type='password' id='Password' placeholder='Enter Password' />
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
  )
}

export default Login 

// autoPlay muted loop this video loop