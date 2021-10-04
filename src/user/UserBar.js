import React from 'react'

import Logout from './Logout'
import Register from './Register'
import Login from './Login'
import PostEnter from '../PostEnter'
import List from '../List';

export default function UserBar({user, posts, dispatchUser, dispatchPost}) {
  
  
  if (user) {
      return (
        <>
        <Logout 
          user={user}
          dispatchUser = {dispatchUser}
        />
        <PostEnter dispatchPost = {dispatchPost}/>
        <List posts = {posts} dispatchPost ={dispatchPost}/>
        </>
      )
  } else {
      return (
          <>
          <h2>login</h2>
            <Login 
            dispatchUser ={dispatchUser}
            />
            <h2>Register</h2>
            <Register 
              dispatchUser = {dispatchUser}
            />
          </>
      )
  }
}
