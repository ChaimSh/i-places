import React from 'react';
import {useParams} from 'react-router-dom'

import PlaceList from '../components/PlaceList';


const DUMMY_PLACES = [{
    id: 'p1',
    title: "empire state building",
    description: "one of the tallest building in the world",
    imageURL: "image of the EMpire state building",
    address: " 20 W 31st st, NEW YORK, NY 10001",
    lacation: {
        lat: 40.7484405,
        lng: -73.9878584
    },
    creator: 'U1' 
}];
const UserPlaces = () => {
   const userId = useParams().userId;
   const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
   return <PlaceList items={loadedPlaces}/>;
};

export default UserPlaces;