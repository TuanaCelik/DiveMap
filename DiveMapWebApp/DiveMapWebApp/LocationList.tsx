import { ListGroup } from 'react-bootstrap';
import React = require('react');
import { LocationListItem } from "./LocationListItem";
import { Location } from "./types"

interface LocationListProprs {
    locations: Array<Location>;
}

export const LocationList: React.FC<LocationListProprs> = ({ locations }) => {
    return (
        <ListGroup>
            {locations.map(location => {
                return <LocationListItem key={ location.name } location={location} />;
            })}
        </ListGroup>
    );
};