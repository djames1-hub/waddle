import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import './Header.css';

import { Container, Row, Col } from 'react-bootstrap';
import { useFirebaseAuth } from '../../hooks/useFirebaseAuth';

const Header = () => {

    const user = useFirebaseAuth();
 
    return (
        <Navbar collapseOnSelect expand="lg" bg='light' variant='light'>
            <Container fluid>
                <Navbar.Brand href="/">waddle</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse>
                    <Nav className='me-auto'>
                        <Nav.Link href={user.id ? '/new-listing': '/login'}>Sell</Nav.Link>
                        <Nav.Link href='/cart'>Cart</Nav.Link>
                        <Nav.Link href='/wishlist'>Wishlist</Nav.Link>
                        <Nav.Link href='/sign-up'>Account</Nav.Link>
                        <Nav.Link href='/settings'>Settings</Nav.Link>
                        
                    </Nav>
                    <Form>
                        <Container>
                            <Row>
                                <Col>
                                <Form.Group controlId='categoryDropdown'>
                                    <Form.Select>
                                        <option value="">Categories</option>
                                        <option value="books"><Nav.Link href="/search/*">Books</Nav.Link></option>
                                        <option value="clothing">Clothing</option>
                                        <option value="furniture">Furniture</option>
                                        <option value="electronics">Electronics</option>
                                        <option value="sports-gear">Sports Gear</option>
                                    </Form.Select>
                                </Form.Group>
                                </Col>
                                <Col>
                                <Form.Group controlId='searchbar'>
                                    <Form.Control type='search'></Form.Control>
                                </Form.Group>
                                </Col>
                            </Row>
                        </Container>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;