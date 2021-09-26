import React from 'react'
import Post from './Post'

export default function List ({posts}) {
     return (
        
      <div>
        <h3>List</h3>
       {posts.map((p, i) => <Post title={p.title} description={p.description} dateCreated={p.dateCreated} key={'post-' + i} />)}
      </div> 
      )
}