import { useReducer, useEffect } from 'react';
import './App.css';
import userReducer from './userReducers.js';
import postsReducer from './postsReducer.js';
import UserBar from './user/UserBar.js';

function App() {

  const [user, dispatchUser ] = useReducer(userReducer, '')
  const [posts, dispatchPost] = useReducer(postsReducer, []);

  useEffect(() => {
    if (user) {
       document.title = `${user}’s Blog` 
     } else {
       document.title = 'Blog'
    }
  }, [user, posts])

  return (
    <div className="App">
      <h1>To Do List</h1>
      <UserBar user = {user} posts = {posts} dispatchUser = {dispatchUser} dispatchPost = {dispatchPost}/>
    </div>
  );
}

export default App;
