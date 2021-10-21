import { useReducer, useEffect} from 'react';
import { useResource } from 'react-request-hook';
import './App.css';
import appReducer from './reducers';
import UserBar from './user/UserBar.js';
import {StateContext} from './Contexts.js';
import PostEnter from './PostEnter'
import List from './List'

function App() {
  const [ posts, getPosts ] = useResource(() => ({
    url: '/posts',
    method: 'get'
  }))

  const [ state, dispatch ] = useReducer(appReducer, { user: '', posts: [] })

  useEffect(getPosts, [])

  useEffect(() => {
      if (posts && posts.data) {
          dispatch({ type: 'FETCH_POSTS', posts: posts.data.reverse() })
      }
  }, [posts])

  const {user} = state;

  return (
    <div className="App">
      <StateContext.Provider value={{state: state, dispatch: dispatch}}>
          <h1 text="To Do List" />
          <UserBar />
          <br/><br/><hr/><br/> 
          {user && <PostEnter /> }
          <List />
        </StateContext.Provider>
    </div>
  );
}

export default App;
