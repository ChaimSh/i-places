import React from 'react';

import Input from "../../shared/components/FormElements/Input";
import Button from '../../shared/components/FormElements/Button';
import {VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH} from '../../shared/util/validators';
import "./PlaceForm.css";
import {useForm} from '../../shared/hooks/form-hook';


const NewPlace = () => {
   const [formState, InputHandler] = useForm({
    title: {
      value: '',
      isValid: false
    },
    description: {
      value: '',
      isValid: false
    },
    address: {
      value: '',
      isValid: false
    }
  }, false);


    
  const placeSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };


  return <form className="place-form" onSubmit={placeSubmitHandler}> 
     <Input 
     id="input"
     element="input" 
     type="text"  
     label="Title" 
     validators={[VALIDATOR_REQUIRE()]}
     errorText="Please enter a valid title."
     onInput={InputHandler}
     />

    <Input 
     id="description"
     element="textarea" 
     type="text"  
     label="Description" 
     validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
     errorText="Please enter a valid description."
     onInput={InputHandler}
     />

    <Input 
     id="address"
     element="input" 
     type="text"  
     label="Address" 
     validators={[VALIDATOR_REQUIRE()]}
     errorText="Please enter a valid address."
     onInput={InputHandler}
     />

     <Button type="submit" disabled={!formState.isValid} >
       ADD PLACE
     </Button>
  </form>
};

export default NewPlace;