import React, { useState } from 'react'

import Logout from './Logout'
import Register from './Register'
import Login from './Login'
import PostEnter from '../PostEnter'

export default function UserBar({addToPosts}) {
  
  const [user, setUser] = useState('');
  const [password,setPasswrod] = useState('');
  const handleRegister = (value) => {
  };
  const handleLogin = (u,p) => {
    setUser(u);
    setPasswrod(p);
  }
  const handleLogout = () =>{
    setUser('');
    setPasswrod('');
  }
  const handleAddPost = (value) =>{
    addToPosts(value);
  }
  if (user.length > 0  && password.length > 0) {
      return (
        <>
        <Logout 
          user={user}
          handleLogout = {()=>{
            handleLogout();
          }}
        
        />
        <PostEnter addToPosts = {(value)=>handleAddPost(value)}/>
        </>
      )
  } else {
      return (
          <>
            <Login 
            login = {(user, password) => {
              handleLogin(user,password);
            }}
            />
            <Register 
              handleRegister={(value)=>{
                handleRegister(value);
              }} 
            />
          </>
      )
  }
}
