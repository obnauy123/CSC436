import React from 'react'
import { useState } from 'react';
export default function PostEnter({addToPosts}){
    
    const[postData, setPostData] = useState({
        title: "",
        description: "",
        dateCreated: Date.now()
    });

    const handleSubmit = e => {
        e.preventDefault();
        setPostData({...postData, dateCreated: Date.now()});
        addToPosts(postData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo-title">Title:</label>
            <input type="text" name="todo-title" id="todo-title" value={postData.title} onChange={(e)=> setPostData({...postData, title: e.target.value})} />
            <label htmlFor="todo-description">Description:</label>
            <textarea value={postData.description} onChange={(e)=> setPostData({...postData, description: e.target.value})}/>
            <input type="submit" value="submit" disabled = {!postData.title}/>
        </form>
    )
}
