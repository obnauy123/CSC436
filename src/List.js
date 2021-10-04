import React from 'react'
import Post from './Post'

export default function List ({posts, dispatchPost}) {
     return (
        
      <div>
        <h3>List</h3>
       {posts.map((p, i) => <Post {...p} id ={p.id} title={p.title} description={p.description} dateCreated={p.dateCreated} complete={p.complete} dateCompleted={p.dateCompleted} dispatchPost = {dispatchPost} key={'post-' + i} />)}
      </div> 
      )
}