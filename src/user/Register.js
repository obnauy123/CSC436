import React, {useContext, useState, useEffect} from 'react'
import { useResource } from 'react-request-hook';
import { StateContext } from '../Contexts';
import {Form, Modal, Button} from 'react-bootstrap'

export default function Register({show, handleClose}) {
  const [ user, register] = useResource((username, password) => ({
    url: 'auth/register',
    method: 'post',
    data: { username, password, 'passwordConfirmation': password }
  }))

  const {dispatch} = useContext(StateContext);
  const [ status, setStatus] = useState("");


  useEffect(() => {
      if (user && user.isLoading === false && (user.data || user.error)) {
        if (user.error) {
          setStatus("Registration failed, please try again later.")
          alert("fail")
        } else {
          
          setStatus("Registration successful. You may now login.")
          alert("success")
        }
      }
    }, [user])

  const [registerData, setRegisterData] = useState({
    username: "",
    password: "",
    passwordRepeat: ""
  });


  const handleSubmit = e =>{
    e.preventDefault();
    register(registerData.username, registerData.password);
    handleClose();
  
  }
  return (
      <Modal show={show} onHide={handleClose}>
          <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Label htmlFor="register-username">Username:</Form.Label>
            <Form.Control type="text" value={registerData.username} onChange={(e)=> setRegisterData({...registerData, username: e.target.value})} name="register-username" id="register-username" />
            <Form.Label htmlFor="register-password">Password:</Form.Label>
            <Form.Control type="password" name="register-password" id="register-password" value={registerData.password} onChange={(e) => setRegisterData({...registerData, password: e.target.value})} />
            <Form.Label htmlFor="register-password-repeat">Repeat password:</Form.Label>
            <Form.Control type="password" name="register-password-repeat" id="register-password-repeat" value={registerData.passwordRepeat} onChange={e => setRegisterData({ ...registerData, passwordRepeat: e.target.value })} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Cancel</Button>
            <Button variant="primary" type="submit" disabled={registerData.username.length === 0 || registerData.password.length === 0 || registerData.password !== registerData.passwordRepeat}>Register</Button>
          </Modal.Footer>
        </Form>
      </Modal>
  )
}