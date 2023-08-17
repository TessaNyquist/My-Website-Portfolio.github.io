import React from 'react';
import { Data } from './Data';

/**
 * 
 * @returns 
 */
function DisplayItems() {
  return Data.map(skill => (
    <li key={skill.id}>
      <img
        src={skill.image.props.src} // Access the image source properly
        alt={skill.name}
      />
    </li>
  ));
}

export default DisplayItems;