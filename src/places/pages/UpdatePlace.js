import React from 'react';
import {useParams} from 'react-router-dom';


import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators'
    

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

const UpdatePlace = () => {
    const placeId = useParams().placeId;
  
    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId) 
    

    return <form>
      <Input 
      id="title"
      element="input"
      type="text"
      label="Title"
      validators={[VALIDATOR_REQUIRE()]}
      />
      <Input 
      id="description"
      element="input"
      type="textarea"
      label="Description"
      validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
      />
    </form>;
};

export default UpdatePlace;