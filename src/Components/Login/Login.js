import React from 'react'
import './Logincss.css'
import { FaEye } from "react-icons/fa";
function Login() {
  return (
    <div>
      <h4 style={{font:"32px",justifyContent:"center",width:"600px"}}>Venue Admin Login</h4>
      <div>
        <input type='text' placeholder='Username' className='textStyle'></input><br/>
        <input type='text' placeholder='Password' className='textStyle'></input><FaEye/>
      </div>
    </div>
  )
}

export default Login