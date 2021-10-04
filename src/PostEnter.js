import React from 'react'
import { useState } from 'react';
export default function PostEnter({dispatchPost}){
    
    const[postData, setPostData] = useState({
        title: "",
        description: ""
    });

    const handleSubmit = e => {
        e.preventDefault();
        dispatchPost({type:"CREATE_POST", postData});
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
