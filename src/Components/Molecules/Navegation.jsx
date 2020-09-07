import React from "react"

import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap';
import PrivateMenu from "./PrivateMenu";
import PublicMenu from "./PublicMenu";

const Navegation = () => (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Omar Siles</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
            {/* {
              localStorage.getItem('token') ?
              <PrivateMenu /> :
              <PublicMenu />
            } */}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>

)
export default Navegation