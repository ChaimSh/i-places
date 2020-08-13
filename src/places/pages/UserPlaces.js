import React from 'react';
import {useParams} from 'react-router-dom'

import PlaceList from '../components/PlaceList';


const DUMMY_PLACES = [{
    id: 'p1',
    title: "empire state building",
    description: "one of the tallest building in the world",
    imageURL: "https://images.musement.com/cover/0097/88/thumb_9687609_cover_header.jpeg?lossless=false&auto=format&fit=clip&h=403.1875&w=956.1875",
    address: "20 W 34th St, New York, NY 10001",
    lacation: {
        lat: 40.7484405,
        lng: -73.9878584
    },
    creator: 'u1' 
}];
const UserPlaces = () => {
   const userId = useParams().userId;
   // figure out why loadedPlaces doesn't work
   const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
   return <PlaceList items={DUMMY_PLACES}/>;
//    loadedPlaces
};

export default UserPlaces;