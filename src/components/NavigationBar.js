import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from 'styled-components';

const Styles = styled.div`
  .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: black;
    }
  }
`;

export const NavigationBar  = () => (
  <Styles>
    <Navbar expand="md">
      <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/">Projects</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/">Contact</Nav.Link></Nav.Item>
      </Nav>
    </Navbar>
  </Styles>
    )