import React from 'react';
import { render, screen } from '@testing-library/react';
import Data from 'Data';

describe('displayItems', () => {
  test('renders correct number of list items', () => {
    render(<ul>{DisplayItems}</ul>);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(Data.length);
  });

  test('renders images with correct alt attributes', () => {
    render(<ul>{DisplayItems}</ul>);
    const images = screen.getAllByRole('img');
    
    images.forEach((image, index) => {
      expect(image.getAttribute('src')).toBe(Data[index].image);
      expect(image.getAttribute('alt')).toBe(Data[index].name);
    });
  });
});