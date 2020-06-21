import { Button, Navbar, Nav, NavItem, Form, FormControl, ListGroup, Tab, Row, Col, TabContainer } from 'react-bootstrap';
import { BsPlus } from "react-icons/bs";
import React = require('react');
import { AddLocationForm } from './AddLocationForm';

export const NavbarItem: React.FC = () => {
    return <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">DiveMap</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#location">Location</Nav.Link>
            <Nav.Link href="#depth">Depth</Nav.Link>
            <Nav.Link href="#wildlife">Wildlife</Nav.Link>
            <Nav.Link href="#months">Best Months</Nav.Link>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mx-auto" />
            <Button variant="outline-info" className="mx-auto">Search</Button>
        </Form>
        <Button variant="outline-info" className="mr-lg-2" onClick={() => console.log("click")}>
            <BsPlus /> Add New Location
        </Button>
        <AddLocationForm />
    </Navbar>;
};