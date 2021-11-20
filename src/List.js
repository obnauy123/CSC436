import React from 'react'
import Post from './Post'
import { StateContext } from './Contexts'
import { useContext } from 'react'
export default function List () {
    const {state} = useContext(StateContext)
      const {posts} = state;
     return (
        
      <div>
        <h3>List</h3>
       {posts.map((p, i) => <Post {...p} id ={p._id} title={p.title} description={p.description} dateCreated={p.dateCreated} complete={p.complete} dateCompleted={p.dateCompleted} key={'post-' + i} />)}
      </div> 
      )
}