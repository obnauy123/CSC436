import React from 'react'
import ShowUser from './ShowUser'
import { StateContext } from './Contexts'
import { useContext } from 'react'
export default function UserList () {
    const {state} = useContext(StateContext)
    const {accounts} = state;
    console.log(accounts);
     return (
      <div>
        <h3>User List</h3>
       {accounts.map((u, i) => <ShowUser id = {u._id} username={u.username}/>)}
      </div> 
      )
}