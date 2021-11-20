import React, { useContext, useEffect } from 'react'
import { useResource } from 'react-request-hook';
import { StateContext } from './Contexts'
import { Link } from 'react-navi';
import { useNavigation } from 'react-navi';
export default function Post ({id, title, description, dateCreated, complete, dateCompleted}) {
    
    const {state, dispatch} = useContext(StateContext) 
    const [deletedTodo, deleteTodo] = useResource((id) => ({
        url: `/post/${id}`,
        method: "delete",
        headers: {"Authorization": `${state.user.access_token}`}
    }));

    const [toggledTodo, toggleTodo] = useResource((id, complete) => ({
        url: `/post/${id}`,
        method: "patch",
        data: {
            complete:complete,
            dateCompleted: Date.now()
        },
        headers: {"Authorization": `${state.user.access_token}`}
    }));

    useEffect(() => {
        if (deletedTodo && deletedTodo.data && deletedTodo.isLoading === false) {
            dispatch({type: 'DELETE_POST', id: id})
        }
    }, [deletedTodo])

    useEffect(() => {
        if (toggledTodo && toggledTodo.data && toggledTodo.isLoading === false) {
            dispatch({type: 'TOGGLE_POST', complete:toggledTodo.data.complete, dateCompleted:toggledTodo.data.dateCompleted, id: id})
        }
    }, [toggledTodo])
    return (
       <div>
          <h3>Title: {title}</h3>
          <Link href={`/post/${id}`}>{title}</Link>
          <div>Description: {description}</div>
          <br />
          <i><b>Created on: {dateCreated}</b></i>
          <br />
          <label>completed?</label>
          <input disabled={state.user.access_token==null} type="checkbox" checked={complete} onChange={(e)=>{toggleTodo(id, e.target.checked)}} />
          {complete && <><label>completed at: {dateCompleted} </label><br/></>}
          <button disabled={state.user.access_token==null} onClick = {(e) => {deleteTodo(id)}}>Delete</button>
      </div> 
 )
}
