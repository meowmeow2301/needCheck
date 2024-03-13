'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Icon } from '@iconify/react';

function AppHeader() {
  return (
    <Navbar expand="lg" className="bg-primary fixed-top " >
      <Container>
        <Navbar.Brand href="#home" className='text-white'>Huong-Day</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={"/facebook"} className='nav-link text-white'>Các cuộc thi hôm nay</Nav.Link>
            <Nav.Link href={'/youtube'} className='nav-link text-white'>Các cuộc thi ngày mai</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href='' className='text-white'>
            <Icon icon="fa6-solid:user" />
              user
            </Nav.Link>
            <Nav.Link href='' className='text-white'>
            <Icon icon="lets-icons:setting-fill" />
              setting
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;