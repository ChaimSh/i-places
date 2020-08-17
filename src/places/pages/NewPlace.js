import React from 'react';

import "./NewPlace.css"
const NewPlace = () => {
  return <form className="place-form"> 
     <Input type="text"  label="Title" validators={[]} />
  </form>
};

export default NewPlace;