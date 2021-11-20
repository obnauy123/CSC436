import React, { useContext } from 'react'
import UserBar from '../user/UserBar'
import Header from '../Header'
import {StateContext } from '../Contexts'
import { Link } from 'react-navi'
import { Navbar, Nav, Container } from 'react-bootstrap'

export default function HeaderBar () {
    const {state} = useContext(StateContext)
    const {user} = state;

    return (
        <>
          <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/"><Header text="My List" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {user.username && <Nav.Link><Link href="/post/create">Create New Post</Link></Nav.Link>}
              </Nav>
            
                <UserBar />
            
            </Navbar.Collapse>
          </Container>
          </Navbar>
        </>
    )
}