import React, { useReducer } from 'react';

import './Input.css';

const inputReducer = (state, action) => {
   switch (action.type) {
       case "CHANGE":
           return {
               ...state,
               value: action.val,
               isValid: true
           };
           default:
               return state;
   }
};

const Input = props => {
   useRuducer(inputReducer);

    const changeHandler = event => {
         
    };

    const element = props.element === 'input' ? ( <input 
        id={props.id} 
        type={props.type} 
        placeholder={props.placeholder}
        onChange={changeHandler}
        />
   ) : (
   <textarea id={props.id} rows={props.rows || 3} onChange={changeHandler}/>
   );


  return <div className={'form-control'}>
    <label htmlFor={props.id}>{props.label}</label>
    {element}
  </div>
  };

export default Input;