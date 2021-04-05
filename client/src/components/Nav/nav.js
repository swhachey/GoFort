import React from 'react'
import { Link }from "react-router-dom"
import { Nav } from "react-bootstrap"
import "./nav.css"
import AuthNav from '../AuthNav/AuthNav'

function NavBar() {
    return (
 <Nav variant="tabs" defaultActiveKey="/home" className="navbar navbar-expand-lg navbar-dark bg-dark">
   <Link to="/">
  <Nav.Item> 
    <Nav.Link className="navlink" style={{fontFamily: "Carter One", fontSize: "16px"}}>GoFort</Nav.Link>
  </Nav.Item>
  </Link>

  <Link to="/traveled">
  <Nav.Item>  
    <Nav.Link eventKey="link-1" className="navlink">Traveled</Nav.Link>
  </Nav.Item>
    </Link>

 <Link to="/chat">
  <Nav.Item> 
    <Nav.Link eventKey="link-2" className="navlink">Chat</Nav.Link>
  </Nav.Item>
    </Link>
  <Nav.Item position = "right">
    <AuthNav/>
  </Nav.Item>
</Nav>
    )
}

export default NavBar
