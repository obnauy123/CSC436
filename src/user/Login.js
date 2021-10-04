import React from 'react'
import { useState } from 'react';

export default function Login({dispatchUser}) {
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
      });
    const handleSubmit = e => {
        e.preventDefault();
        dispatchUser({type:"LOGIN", loginData: loginData});
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="login-username">Username:</label>
            <input type="text" name="login-username" id="login-username" value={loginData.username} onChange={(e)=> setLoginData({...loginData, username: e.target.value})}/>
            <label htmlFor="login-password">Password:</label>
            <input type="password" name="login-password" id="login-password" value={loginData.password} onChange={(e)=> setLoginData({...loginData, password: e.target.value})}/>
            <input type="submit" value="Login" />
        </form>
    )
}
