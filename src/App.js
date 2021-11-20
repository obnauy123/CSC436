import { useReducer, useEffect} from 'react';
import { useResource } from 'react-request-hook';
import './App.css';
import appReducer from './reducers';
import {StateContext} from './Contexts.js';
import PostEnter from './PostEnter';
import List from './List';
import HeaderBar from "./pages/HeaderBar.js";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import{mount,route} from 'navi';
import { Router,View } from "react-navi";
import { Container } from 'react-bootstrap';
import UserPage from "./pages/UserPage";
import ProfilePage from "./pages/ProfilePage";
import AfterLoginPage from "./pages/AfterLoginPage";
function App() {

  const [ state, dispatch ] = useReducer(appReducer, { user: {}, posts: [], accounts: []})

  const {user} = state;

  const routes = mount({
    '/': route({ view: <HomePage /> }),
    '/user/:id': route(req => {
      return { view: <AfterLoginPage id={req.params.id} /> }
    }),
    '/users': route({view: <UserPage />}),
    '/users/:id': route(req => {
      return { view: <ProfilePage id={req.params.id} /> }
    }),
    '/post/create':route({ view: <PostEnter /> }),
    '/post/:id': route(req => {
        return { view: <PostPage id={req.params.id} /> }
    })

  })

  return (
    <div className="App">
      <StateContext.Provider value={{state: state, dispatch: dispatch}}>
        <Router routes={routes}>
            <Container >
              <HeaderBar />
              <View />
            </Container>
        </Router>
      </StateContext.Provider>
    </div>
  );
}

export default App;
