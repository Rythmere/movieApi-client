import React from "react";
import  Navbar  from "react-bootstrap/Navbar";
import  Container  from "react-bootstrap/Container";
import Nav  from "react-bootstrap/Nav";
import  Button  from "react-bootstrap/Button";

export function NavBarView({user}) {
    const onLoggedOut = () => {
        localStorage.clear();
        window.open('/', '_self');
    };

    const isAuth = () => {
        if(localStorage.getItem('token')) {
            return localStorage.getItem('token');
        } else {
            return false;
        }
    };
return (
    <Navbar className="main-nav" sticky="top" bg='dark' expand='lg' variant='dark'>
            <Container>
            <Navbar.Brand className='navbar-logo' href='/'>MyFlix</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                {isAuth() && (
                    <Nav.Link href={`/users/${user}`}>{user}</Nav.Link>
               )} 
                {isAuth() && (
                    <Button variant="link" onClick={()=> {onLoggedOut()}}>Logout</Button>
                )}
                {!isAuth() && (
                    <Nav.Link href="/">Sign-In</Nav.Link>
                )}
                {!isAuth() && (
                    <Nav.Link href="/register">Sign-Up</Nav.Link>
                )} 

            </Nav>
            </Navbar.Collapse>
            </Container>
    </Navbar>

);
}