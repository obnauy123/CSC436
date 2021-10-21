import React, {useState, useContext} from 'react'
import { StateContext } from './Contexts'
import { useResource } from 'react-request-hook';

export default function PostEnter(){
    const {state, dispatch} = useContext(StateContext)
    const {user} = state;
    const [post , createPost ] = useResource(({title, description, complete, dateCompleted}) => ({
        url: '/posts',
        method: 'post',
        data: {title, description, complete, dateCompleted}
    }))

    const[postData, setPostData] = useState({
        title: "",
        description: ""
    });

    const handleSubmit = e => {
        e.preventDefault();
        createPost({title:postData.title, description:postData.description, complete:false, dateCompleted:null});
        dispatch({type:"CREATE_POST", postData});
    };

    return (
        
        <div>
            <h3>Enter ToDo</h3>
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="todo-title">Title:</label>
                <input type="text" name="todo-title" id="todo-title" value={postData.title} onChange={(e)=> setPostData({...postData, title: e.target.value})} />
                <br/>
                <br/>
                <label htmlFor="todo-description">Description:</label>
                <textarea value={postData.description} onChange={(e)=> setPostData({...postData, description: e.target.value})}/>
                <input type="submit" value="submit" disabled = {!postData.title}/>
            </form>
        </div>
    )
}
