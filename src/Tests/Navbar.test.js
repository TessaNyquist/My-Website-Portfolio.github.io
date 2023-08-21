import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CustomNavbar from '../Components/CustomNavbar';

describe('CustomNavbar', () => {
  test('renders the navbar with correct text', () => {
    render(
      <Router>
        <CustomNavbar />
      </Router>
    );
    
    const navbarHome = screen.getByText('Home');
    const navbarProjects = screen.getByText('Projects');
    const navbarRésumé = screen.getByText('Résumé');
    const navbarBlog = screen.getByText('Blog');
    expect(navbarHome).toBeInTheDocument();
    expect(navbarRésumé ).toBeInTheDocument();
    expect(navbarProjects).toBeInTheDocument();
    expect(navbarBlog).toBeInTheDocument();
  });
  test('renders navigation links', () => {
    render(
      <Router>
        <CustomNavbar />
      </Router>
    );
    
    const homeLink = screen.getByText('Home');
    const projectsLink = screen.getByText('Projects');
    const blogLink = screen.getByText('Blog');
    const résuméLink = screen.getByText('Résumé');
  
    expect(homeLink).toBeInTheDocument();
    expect(projectsLink).toBeInTheDocument();
    expect(blogLink).toBeInTheDocument();
    expect(résuméLink).toBeInTheDocument();
  });
  
  test('navigation links have correct href values', () => {
    render(
      <Router> 
        <CustomNavbar />
      </Router>
    );
    const aboutLink = screen.getByText('Home');
    const projectsLink = screen.getByText('Projects');
    const blogLink = screen.getByText('Blog');
    const RésuméLink = screen.getByText('Résumé');

    expect(aboutLink.getAttribute('href')).toBe('/My-Website-Portfolio.github.io/Home');
    expect(projectsLink.getAttribute('href')).toBe('/My-Website-Portfolio.github.io/Projects');
    expect(blogLink.getAttribute('href')).toBe('/My-Website-Portfolio.github.io/Blog');
    expect(RésuméLink.getAttribute('href')).toBe('/My-Website-Portfolio.github.io/Résumé');
  });
});
