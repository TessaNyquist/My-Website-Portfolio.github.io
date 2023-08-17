import React from 'react';
import cpic from './Images/c.svg';
import javapic from './Images/java.svg';

export const Data = [
  {
    id: 1,
    image: <img src={cpic} className="c" alt="c" />,
    name: "C",
  },
  {
    id: 2,
    image: <img src={javapic} className="java" alt="java" />,
    name: "Java",
  }
];