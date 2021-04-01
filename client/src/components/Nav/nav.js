import React from 'react'
import { Link } from "react-router-dom"
import { Nav } from "react-bootstrap"
import "./nav.css"
import LoginButton from '../../components/LoginButton/login-button'
import LogoutButton from '../../components/LogOutButton/logout-button'
import AuthNav from '../AuthNav/AuthNav'

function NavBar() {
    return (
 <Nav variant="tabs" defaultActiveKey="/home" className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Nav.Item>
    <Nav.Link href="/" className="navlink">GoFort</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/traveled" eventKey="link-1" className="navlink">Places I've Been</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/chat" eventKey="link-2" className="navlink">Chat</Nav.Link>
  </Nav.Item>
  <Nav.Item position = "right">
    <AuthNav/>
  </Nav.Item>
</Nav>
    )
}

export default NavBar
