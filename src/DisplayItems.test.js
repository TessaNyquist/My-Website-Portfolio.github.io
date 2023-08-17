import React from 'react';
import { render, screen } from '@testing-library/react';
import DisplayItems from './DisplayItems'; // Correct the import name
import { Data } from './Data';

describe('DisplayItems', () => { // Change the test suite name to match
  test('renders correct number of list items', () => {
    render(<ul>{<DisplayItems />}</ul>); // Correct the component usage
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(Data.length);
  });

  test('renders images with correct alt attributes', () => {
    render(<ul>{<DisplayItems />}</ul>); // Correct the component usage
    const images = screen.getAllByRole('img');

    images.forEach((image, index) => {
      expect(image.getAttribute('src')).toBe(Data[index].image.props.src);
      expect(image.getAttribute('alt')).toBe(Data[index].name);
    });
  });
});