import React, { useContext, useEffect } from 'react'
import { useResource } from 'react-request-hook';
import { StateContext } from './Contexts'

export default function Post ({id, title, description, dateCreated, complete, dateCompleted}) {
    const [post , deletePost ] = useResource(({id}) => ({
        url: `/posts/${id}`,
        method: 'delete',
    }))
    const [ posts, getPosts ] = useResource(() => ({
        url: '/posts',
        method: 'get'
      }))
    useEffect(getPosts, [])

    useEffect(() => {
        if (posts && posts.data) {
            dispatch({ type: 'FETCH_POSTS', posts: posts.data.reverse() })
        }
    }, [posts])

    const [updateposts , updatePost ] = useResource(({id, title, description, complete, dateCompleted}) => ({
        url: `/posts/${id}`,
        method: 'put',
        data: {title, description, complete, dateCompleted}
    }))

    const {dispatch} = useContext(StateContext)
   
    const handleCompleted = () => {
        const date = !complete ? Date(Date.now()) : '';
        updatePost({id: id, title: title, description: description, complete: !complete, dateCompleted: date});
        dispatch({type: 'TOGGLE_POST', id})
    }
    const handleDelete = () => {
        console.log(id);
        deletePost({id: id});
        dispatch({type:'DELETE_POST', id});
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
