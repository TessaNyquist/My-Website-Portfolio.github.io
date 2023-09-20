import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutMe from '../Components/AboutMe';


describe('AboutMe', () => {

    test('renders the bio text and image', () => {
        render(<AboutMe />);
        
        const bioText = screen.getByText(/A native Northern Virginian/i);
        const image = screen.getByAltText('Tessa Banner');
    
        expect(bioText).toBeInTheDocument();
        expect(image).toBeInTheDocument();
      });
  test('renders without errors', () => {
    render(<AboutMe />);
  });

  test('displays the bio text', () => {
    render(<AboutMe />);
    
    const bioText = screen.getByText(/A native Northern Virginian/i);
    expect(bioText).toBeInTheDocument();
  });

  test('displays the image with correct alt text', () => {
    render(<AboutMe />);
    
    const image = screen.getByAltText('Tessa Banner');
    expect(image).toBeInTheDocument();
  });

  test('bio text contains relevant information', () => {
    render(<AboutMe />);
    
    const bioText = screen.getByText(/completed my B\.A\. in political science/i);
    expect(bioText).toBeInTheDocument();
  });

  test('image is displayed correctly', () => {
    render(<AboutMe />);
    
    const image = screen.getByAltText('Tessa Banner');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'Tessa-Banner.png');
  });

  test('bio text and image are within a Figure component', () => {
    render(<AboutMe />);
    
    const figure = screen.getByRole('figure');
    expect(figure).toBeInTheDocument();
  });
});
