import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
 return (
      <div className='About-container'>
          <div className='slova'>
            <h2>Zážitky</h2>
            <h2>Svatby</h2>
            <h2>Vzpomínky</h2>
          </div>
          <div className='holytext'>
            <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. 
            </p>
            <p>
            Integer pellentesque quam vel velit. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
          </div>
      </div>
  );
}

export default AboutMe;