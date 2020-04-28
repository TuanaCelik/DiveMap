import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { Navbar, Nav, NavItem, Form, FormControl, Button, ListGroup, Tab, Row, Col, TabContainer } from 'react-bootstrap';

declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

const sideList = (
    <ListGroup>
        <ListGroup.Item action variant="primary" href="#link1">
            Location 1
        </ListGroup.Item>
        <ListGroup.Item action variant="info" href="#link2">
            Location 2
        </ListGroup.Item>
        <ListGroup.Item action variant="primary" href="#link3">
            Location 3
        </ListGroup.Item>
        <ListGroup.Item action variant="info" href="#link4">
            Location 4
        </ListGroup.Item>
        <ListGroup.Item action variant="primary" href="#link5">
            Location 5
        </ListGroup.Item>
        <ListGroup.Item action variant="info" href="#link6">
            Location 6
        </ListGroup.Item>
    </ListGroup>
)

const navbar = (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">DiveMap</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#location">Location</Nav.Link>
            <Nav.Link href="#depth">Depth</Nav.Link>
            <Nav.Link href="#wildlife">Wildlife</Nav.Link>
            <Nav.Link href="#months">Best Months</Nav.Link>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
        </Form>
    </Navbar>    
)

const position = [51.505, -0.09]
const map = (
    <Map center={position} zoom={13}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
            <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>
    </Map>
)

export class Hello extends React.Component {
	render() {
		return (
			<h1> HELLO WORLD </h1>
		);
	}
}    

ReactDOM.render(navbar, document.getElementById('navbar'));
ReactDOM.render(sideList, document.getElementById('sideList'));
ReactDOM.render(map, document.getElementById('map'));