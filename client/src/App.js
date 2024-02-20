import React, { useState, useEffect } from "react";
import './App.css';
import axios from 'axios'

function App(){

const [usernameReg, setUsernameReg] = useState('');
const [passwordReg, setPasswordReg] = useState('');

const register = () =>{
  axios.post('http://localhost:3001/register', {
    username: usernameReg,
    password: passwordReg
  })
  if (register.data.success){
    alert("Inserted Successfully");
  }
};

  return(
    <div className="App">
      <div className="registration">
        <h1>Registration</h1>
        <label>Username</label>
          <input 
          type="text"
           onChange={(e) => {
            setUsernameReg(e.target.value);
           }}
           /><br></br>

        <label>Password</label>
          <input 
          type="text"
           onChange={(e) => {
            setPasswordReg(e.target.value);
           }}
           /><br></br>
        <button onClick={register}>Register</button>
      </div>

      <div className="login">
        <h1>Login</h1>
        <input type="text" placeholder="Username..."/><br></br>
        <input type="password" placeholder="Password..."/><br></br>
        <button>Register</button>
      </div>
    </div>

 );
}

export default App;