import React from 'react'
import { useContext } from 'react/cjs/react.development';
import { StateContext } from '../Contexts'
export default function Logout() {
  const {state, dispatch} = useContext(StateContext)
  const {user} = state;
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({type:"LOGOUT"});
  };

    return (
      <form onSubmit={handleSubmit}>
         Logged in as: <b>{user}</b>
         <input type="submit" value="Logout" />
      </form>
     )
 }
 
