import { Container } from '@material-ui/core';
import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    const [loggedInUser , setLoggedInUser] = useContext(UserContext);
    return (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand style={{float:'left'}}> 
                <img style={{width:'200px', height:'60',}} src={logo} alt="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse style={{width:'900px',float:'right'}} id="basic-navbar-nav">
                <Nav  className="ml-auto">
                    <li className="menu_li">
                        <NavLink activeClassName='text-primary'
                            to='/home' className='nav_li'>Home</NavLink>
                    </li>
                    <li className="menu_li">
                        <NavLink activeClassName='text-primary'
                            to='/donation' className='nav_li'>Donation</NavLink>
                    </li>
                    <li className="menu_li">
                        <NavLink activeClassName='text-primary'
                            to='/events' className='nav_li'>Events</NavLink>
                    </li>
                    <li className="menu_li">
                        <NavLink activeClassName='text-primary'
                            to='/blog' className='nav_li'>Blog</NavLink>
                    </li>
                    <Link to='/register'><button style={{marginTop:'18px'}}
                        className='btn btn-primary'>
                         {loggedInUser.email ? loggedInUser.name : 'Register'}   
                        </button></Link>
                    <Link to='/admin'>
                        <button style={{marginTop:'18px', marginLeft:'21px'}}
                        className='btn btn-dark'>
                        Admin
                    </button></Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default Header;