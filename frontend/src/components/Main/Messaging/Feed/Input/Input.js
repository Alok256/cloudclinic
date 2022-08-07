import React from 'react';
import { navigate } from '@reach/router';
import './Input.scss';
import Button from '../../../../Button/Button';



const Input = () => {  
  
  
  const handleSubmit = ()=>{
    
    console.log("Navigating")  
    navigate("/jitsi")
      console.log("Navigated")
  }

  
  return (
    <div className="messaging-input-wrapper">
      <input type="text" placeholder="Type in your message" />
      <Button action="Submit" color="navy" />
      <div className="form-button-wrapper">
          <Button
            action="Join/Create Meet"
            color="pink"
            onClick={() => handleSubmit()}
            icon="video"
          />
        </div>
    </div>

    
  );
};

export default Input;
