import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Accordion from '../Components/Accordion';

describe('Accordion', () => {
  test('toggles accordion item on click', () => {
    render(<Accordion />);

    // Get the accordion headers
    const accordionHeaders = screen.getAllByTestId('accordion-header');

    // Initially, accordion content should not be visible
    const accordionContent = screen.queryAllByTestId('accordion-content');
    expect(accordionContent).toHaveLength(0);

    // Click on each accordion header to toggle its content
    accordionHeaders.forEach((header) => {
      fireEvent.click(header);

      // Check if the corresponding accordion content becomes visible
      const content = screen.getByTestId('accordion-content');
      expect(content).toBeVisible();

      // Click again to hide the content
      fireEvent.click(header);
      expect(content).not.toBeVisible();
    });
  });
});
