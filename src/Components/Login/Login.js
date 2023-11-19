import React,{useEffect, useState} from 'react'
import './Logincss.css'
import { useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import axios from "axios";
function Login() {
  const navigate = useNavigate()
  const [user,setUser] = useState("")
  const [password,setPassword]=useState("")
  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8090/account/admin/login", {
        user: user,
        password : password
      });
      alert("loggedin Successfully");
      navigate("Home")
    } catch (err) {
      alert(err);
    }
  }
  return (
    <div>
      <h4 style={{font:"32px",justifyContent:"center",width:"600px"}}>Venue Admin Login</h4>
      <div>
        <input type='text' placeholder='Username' className='textStyle' 
        onChange={(e)=>setUser(e.target.value)}></input><br/>
        <input type='password' placeholder='Password' className='textStyle'
        onChange={(e)=>setPassword(e.target.value)}></input><br/>
        <input type='submit' value="Sign in" className='signin' onClick={save}></input><br/>
        <a style={{fontSize:"16px"}}>New Registration?</a>
      </div>
    </div>
  )
}

export default Login