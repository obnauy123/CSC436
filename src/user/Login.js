import React, { useState, useEffect} from 'react'
import { useContext } from 'react/cjs/react.development';
import { useResource } from 'react-request-hook';
import { StateContext } from '../Contexts';
import {Form, Modal, Button} from 'react-bootstrap'
export default function Login({show, handleClose}) {
    const [ user, login ] = useResource((username, password) => ({
        url: `/login/${encodeURI(username)}/${encodeURI(password)}`,
        method: 'get'
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

    const [ loginFailed, setLoginFailed ] = useState(false)
    const {dispatch} = useContext(StateContext)
    useEffect(() => {
        if (user && user.data) {
            if (user.data.length > 0) {
                            setLoginFailed(false)
                            dispatch({ type: 'LOGIN', username: user.data[0].username })
            } else {
                            setLoginFailed(true)
            }
        } 
    }, [user])

    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
      });

    const handleSubmit = e => {
        e.preventDefault();
        login(loginData.username, loginData.password)
        handleClose()
    };
    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label htmlFor="login-username">Username:</Form.Label>
                    <Form.Control type="text" value={loginData.username} onChange={(e)=> setLoginData({...loginData, username: e.target.value})} name="login-username" id="login-username" />
                    <Form.Label htmlFor="login-password">Password:</Form.Label>
                    <Form.Control type="password" value={loginData.password} onChange={(e)=> setLoginData({...loginData, password: e.target.value})} name="login-password" id="login-password" />
                    {loginFailed && <Form.Text style={{ color: 'red' }}>Invalid username or password</Form.Text>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="primary" disabled={loginData.username.length === 0} type="submit">Login</Button>
                </Modal.Footer>
            </Form>
        </Modal>
        
    )
}
