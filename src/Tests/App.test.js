import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the Router
import CustomNavbar from '../Components/CustomNavbar';

describe('CustomNavbar', () => {
  test('renders navigation links', () => {
    render(
      <Router> {/* Wrap the CustomNavbar with Router */}
        <CustomNavbar />
      </Router>
    );
    
    const homeLink = screen.getByText('Home');
    const projectsLink = screen.getByText('Projects');
    const resumeLink = screen.getByText('Résumé');
    const blogLink = screen.getByText('Blog');

    expect(homeLink).toBeInTheDocument();
    expect(projectsLink).toBeInTheDocument();
    expect(resumeLink).toBeInTheDocument();
    expect(blogLink).toBeInTheDocument();
  });

  test('navigation links have correct href values', () => {
    render(
      <Router> {/* Wrap the CustomNavbar with Router */}
        <CustomNavbar />
      </Router>
    );
    
    const homeLink = screen.getByText('Home');
    const projectsLink = screen.getByText('Projects');
    const resumeLink = screen.getByText('Résumé');
    const blogLink = screen.getByText('Blog');

    expect(homeLink.getAttribute('href')).toBe('/My-Website-Portfolio.github.io/Home');
    expect(projectsLink.getAttribute('href')).toBe('/My-Website-Portfolio.github.io/Projects');
    expect(resumeLink.getAttribute('href')).toBe('/My-Website-Portfolio.github.io/Résumé');
    expect(blogLink.getAttribute('href')).toBe('/My-Website-Portfolio.github.io/Blog');
  });
});
