import React from 'react';
import Data from '..Data';

/**
 * 
 * @returns 
 */
function DisplayItems() {
  return Data.map(skill => (
    <li key={skill.id}>
      <img
        src={skill.image}
        alt={skill.name}
      />
    </li>
  ));
}

export default DisplayItems;