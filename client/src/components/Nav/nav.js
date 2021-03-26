import React from 'react'
import { Nav } from "react-bootstrap"

function NavBar() {
    return (
 <Nav variant="tabs" defaultActiveKey="/home" className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Nav.Item>
    <Nav.Link href="/">GoFort</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Places I've Been</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Chat</Nav.Link>
  </Nav.Item>
</Nav>
    )
}

export default NavBar
