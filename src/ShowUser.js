import React from 'react'
import { Link } from 'react-navi'
export default function ShowUser ({id, username}) {
    const link = '/users/' + id; 
    return (
        
      <div>
          <Link href={link}>{username}</Link>
      </div> 
      )
}