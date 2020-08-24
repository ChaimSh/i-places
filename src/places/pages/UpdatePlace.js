import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';


import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {useForm} from '../../shared/hooks/form-hooks';
import "./PlaceForm.css";
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
    const [isLoading, setIsLoading] = useState(true);
    
    const placeId = useParams().placeId;

    const [formState, inputHandler, setFormData] = useForm({
         title: {
            value: '',
            isValid: false
         },
         description: {
            value: '',
            isValid: false
         }
       }, true
     );
    
     const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId) 

     useEffect(() => {
         if (identifiedPlace) {
            setFormData({
                title: {
                    value: identifiedPlace.title,
                    isValid: true
                 },
                 description: {
                    value: identifiedPlace.description,
                    isValid: true
                 }
                },  true
               );
         }
           setIsLoading(false);
     }, [setFormData, identifiedPlace]);

    

   const placeUpdateSubmitHandler = event => {
     event.preventDefault();
     console.log(formState.inputs);
   };
    

  if (isLoading) {
      return (
          <div className="center">
              <h2>Loading...</h2>
          </div>
      );
  };

    return ( 
      <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
        <Input 
            id="title"
            element="input"
            type="text"
            label="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter vslid title"
            onInput={inputHandler}
            initialValue={formState.inputs.title.value}
            initialValid={formState.inputs.title.isValid}
        />
        <Input 
            id="description"
            element="textarea"
            label="Description"
            validators={[ VALIDATOR_MINLENGTH(5)]}
            errorText='Please enter valid description, min 5 characters.'
            onInput={inputHandler}
            initialValue={formState.inputs.description.value}
            initialValid={formState.inputs.description.isValid}
            />
        <Button type="submit" disables={!formState.isValid}> UPDATE PLACE</Button>
    </form>
    );
};

export default UpdatePlace;