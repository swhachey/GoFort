import React from 'react'
import { Link }from "react-router-dom"
import { Nav } from "react-bootstrap"
import "./nav.css"
import AuthNav from '../AuthNav/AuthNav'

function NavBar() {
    return (
 <Nav variant="tabs" defaultActiveKey="/home" className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Nav.Item>
    <Link to="/">
    <Nav.Link className="navlink" style={{fontFamily: "Carter One", fontSize: "16px"}}>GoFort</Nav.Link>
    </Link>
  </Nav.Item>
  <Nav.Item>
    <Link to="/traveled">
    <Nav.Link eventKey="link-1" className="navlink">Traveled</Nav.Link>
    </Link>
  </Nav.Item>
  <Nav.Item>
    <Link to="/chat">
    <Nav.Link eventKey="link-2" className="navlink">Chat</Nav.Link>
    </Link>
  </Nav.Item>
  <Nav.Item position = "right">
    <AuthNav/>
  </Nav.Item>
</Nav>
    )
}

export default NavBar
