import React from 'react'
import { useState } from 'react';

export default function Register({dispatchUser}) {
  const [registerData, setRegisterData] = useState({
    username: "",
    password: ""
  });
  const handleSubmit = e =>{
    e.preventDefault();
    dispatchUser({type:"REGISTER", registerData});
  }
  return (
      <form onSubmit={handleSubmit}>
          <label htmlFor="register-username">Username:</label>
          <input type="text" name="register-username" id="register-username" value={registerData.username} onChange={(e)=> setRegisterData({...registerData, username: e.target.value})}/>

          <label htmlFor="register-password">Password:</label>
          <input type="password" name="register-password" id="register-password" value={registerData.password} onChange={(e) => setRegisterData({...registerData, password: e.target.value})}/>

          <label htmlFor="register-password-repeat">Repeat password:</label>
          <input type="password" name="register-password-repeat" id="register-password-repeat" />
          
          <input type="submit" value="Register" />
      </form>
  )
}