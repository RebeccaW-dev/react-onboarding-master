﻿import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';


export class NavMenu extends Component {
    displayName = NavMenu.name

    render() {
        return (
            <Navbar inverse fixedTop fluid collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={'/'}>ReactJS</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>

                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to={'/'} exact>
                            <NavItem>
                                Home
              </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/counter'}>
                            <NavItem>
                                Counter
              </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/customer'}>
                            <NavItem>
                                Customer
              </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/product'}>
                            <NavItem>
                                Product
              </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/sales'}>
                            <NavItem>
                                Sales
              </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/store'}>
                            <NavItem>
                                Store
              </NavItem>
                        </LinkContainer>

                        <LinkContainer to={'/fetchdata'}>
                            <NavItem>
                                Fetch data
              </NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        );
    }

}
