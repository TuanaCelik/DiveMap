import { Button, Navbar, Nav, NavItem, Form, FormControl, ListGroup, Tab, Row, Col, TabContainer } from 'react-bootstrap';
import React = require('react');
    import { Location } from "./types";
import ReactDOM = require('react-dom');

interface LocationListItemProps {
    location: Location;
}

export const LocationListItem: React.FC<LocationListItemProps> = ({ location }) => {
    return <ListGroup.Item action variant="primary" href="#link1">{location.name}</ListGroup.Item>;
};