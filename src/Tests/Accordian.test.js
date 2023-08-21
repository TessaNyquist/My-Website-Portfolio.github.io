import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Accordion from '../Components/Accordion';

describe('AccordionItem', () => {
  test('renders with correct title', () => {
    render(<Accordion title="Test Title" items={[]} />);
    const titleElement = screen.getByText('Test Title');
    expect(titleElement).toBeInTheDocument();
  });

  test('expands and collapses on header click', () => {
    render(<Accordion />);
    const educationalBackgroundHeader = screen.getByTestId('accordion-header', { name: 'Educational Background' });
  
    fireEvent.click(educationalBackgroundHeader);
  
    const contentElement = screen.getByTestId('accordion-content');
    expect(contentElement).toBeInTheDocument();
  });
  
  test('displays correct items when expanded', () => {
    render(<Accordion />);
    const educationalBackgroundHeader = screen.getByTestId('accordion-header', { name: 'Educational Background' });
  
    fireEvent.click(educationalBackgroundHeader);
  
    const item1 = screen.getByText('Bachelor of Arts in Political Science');
    const item2 = screen.getByText('Bachelor of Science in Computer Science');
  
    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
  });
  
  test('expands and collapses accordion items', () => {
    render(<Accordion />);
    const educationalBackgroundHeader = screen.getByTestId('accordion-header', { name: 'Educational Background' });
    const certificationsHeader = screen.getByTestId('accordion-header', { name: 'Certifications' });
  
    fireEvent.click(educationalBackgroundHeader);
  
    expect(screen.queryByTestId('accordion-content')).toBeInTheDocument();
  
    fireEvent.click(certificationsHeader);
  
    expect(screen.queryByTestId('accordion-content')).not.toBeInTheDocument();
  });
  
});

describe('Accordion', () => {
  test('renders all items', () => {
    render(<Accordion />);
    const educationalBackground = screen.getByText('Educational Background');
    const certifications = screen.getByText('Certifications');
    expect(educationalBackground).toBeInTheDocument();
    expect(certifications).toBeInTheDocument();
  });

  test('expands and collapses accordion items', () => {
    render(<Accordion />);
    const educationalBackgroundHeader = screen.getByTestId('accordion-header', { name: 'Educational Background' });
    const certificationsHeader = screen.getByTestId('accordion-header', { name: 'Certifications' });

    fireEvent.click(educationalBackgroundHeader);
    const educationalBackgroundContent = screen.getByTestId('accordion-content', { name: 'Educational Background' });
    expect(educationalBackgroundContent).toBeInTheDocument();

    fireEvent.click(certificationsHeader);
    const certificationsContent = screen.getByTestId('accordion-content', { name: 'Certifications' });
    expect(certificationsContent).toBeInTheDocument();

    fireEvent.click(educationalBackgroundHeader);
    expect(educationalBackgroundContent).not.toBeInTheDocument();

    fireEvent.click(certificationsHeader);
    expect(certificationsContent).not.toBeInTheDocument();
  });
});
