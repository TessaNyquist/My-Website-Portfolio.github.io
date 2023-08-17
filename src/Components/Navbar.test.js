import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomNavbar from './Navbar';

describe('CustomNavbar', () => {
  test('renders the navbar with correct text', () => {
    render(<CustomNavbar />);
    const navbarBrand = screen.getByText('My Portfolio');
    expect(navbarBrand).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(<CustomNavbar />);
    const aboutLink = screen.getByText('About Me');
    const projectsLink = screen.getByText('Projects');
    const blogLink = screen.getByText('Blog');
    const contactLink = screen.getByText('Contact Me');

    expect(aboutLink).toBeInTheDocument();
    expect(projectsLink).toBeInTheDocument();
    expect(blogLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  test('navigation links have correct href values', () => {
    render(<CustomNavbar />);
    const aboutLink = screen.getByText('About Me');
    const projectsLink = screen.getByText('Projects');
    const blogLink = screen.getByText('Blog');
    const contactLink = screen.getByText('Contact Me');

    expect(aboutLink.getAttribute('href')).toBe('#about');
    expect(projectsLink.getAttribute('href')).toBe('#projects');
    expect(blogLink.getAttribute('href')).toBe('#blog');
    expect(contactLink.getAttribute('href')).toBe('#contact');
  });
});