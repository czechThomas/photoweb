import React from 'react';
import './EachItem.css';

const EachItem = (props) => {
 return (
    <a className='item-tag' href='./#'>
      <div className='pictureDiv pointer'>
          <img src={`images/${props.picture}`} alt="miminko"/>
          <h1 className='picture-tag'>{props.name}</h1>
      </div>
    </a>  
  );
}

export default EachItem;