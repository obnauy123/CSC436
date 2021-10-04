import React, { useState, useEffect } from 'react'
export default function Post ({id, title, description, dateCreated, complete, dateCompleted, dispatchPost}) {
    
   
    const handleCompleted = () => {
        dispatchPost({type: 'TOGGLE_POST', id})
    }
    const handleDelete = () => {
        
        dispatchPost({type:'DELETE_POST', id});
    }
    return (
       <div>
          <h3>Title: {title}</h3>
          <div>Description: {description}</div>
          <br />
          <i><b>Created on: {dateCreated}</b></i>
          <br />
          <label>completed?</label>
          <input type="checkbox" onChange={handleCompleted} />
          {complete && <><label>completed at: {dateCompleted} </label><br/></>}
          <button onClick = {handleDelete}>Delete</button>
      </div> 
 )
}
