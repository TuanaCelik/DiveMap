import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { Button, Navbar, Nav, NavItem, Form, FormControl, ListGroup, Tab, Row, Col, TabContainer } from 'react-bootstrap';
import { BsPlus } from "react-icons/bs";
import React = require('react');
import ReactDOM = require('react-dom');
import { LocationList } from "./LocationList";
import { NavbarItem } from "./NavbarItem";
import { MapItem } from "./MapItem";
import { Location } from "./types";

const locations: Array<Location> = [
    { name: "Gokova", rating: 7, description: "wavy waters", depth: 10 },
    { name: "Kalkan", rating: 8, description: "clear waters", depth: 20 },
];

const App: React.FC = () => {
    return <React.Fragment>
        <NavbarItem />
        <div id = "sideList">
            <LocationList locations={ locations } />
        </div>
        <div id= "map">
           <MapItem />
        </div>
        </React.Fragment>
    };

export default App;
ReactDOM.render(<App />, document.getElementById('root'));