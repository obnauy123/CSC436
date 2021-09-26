import { useState } from 'react';
import './App.css';
import List from './List';
import './user/UserBar.js';

import UserBar from './user/UserBar.js';
function App() {
  const [posts, setPosts] = useState([]);
  const addToPosts = (p) =>{
    setPosts(posts => [...posts, p]);
  }
  return (
    <div className="App">
      <h1>To Do List</h1>
      <UserBar addToPosts = {(value)=>addToPosts(value)}/>
      <List posts = {posts}/>
    </div>
  );
}

export default App;
