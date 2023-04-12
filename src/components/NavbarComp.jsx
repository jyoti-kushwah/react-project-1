import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import MainHeader from './MainHeader';
export default class NavbarComp extends Component {
    render() {
        return (
                <div>
                    <MainHeader />
                    <Navbar expand="lg" className='container container1'>
                        <Container>
                            {/* <Navbar.Brand href="#home">The Siren</Navbar.Brand> */}
                            <div className='ab'>
                                <span className='header'>The</span>
                                <span className='h1 siren'>Siren</span>
                            </div>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto text-center nav1">
                                    <Nav.Link as={Link} to={"/"} className="navbarstyle">Home</Nav.Link>
                                    <Nav.Link as={Link} to={"/bollywood"} className="navbarstyle">Bollywood</Nav.Link>
                                    <Nav.Link as={Link} to={"/technology"} className="navbarstyle">Technology</Nav.Link>
                                    <Nav.Link as={Link} to={"/hollywood"} className="navbarstyle ">Hollywood</Nav.Link>
                                    <Nav.Link as={Link} to={"/fitness"} className="navbarstyle ">Fitness</Nav.Link>
                                    <Nav.Link as={Link} to={"/food"} className="navbarstyle ">Food</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>

                        </Container>
                    </Navbar>

                </div>
           
        )
    }
}
