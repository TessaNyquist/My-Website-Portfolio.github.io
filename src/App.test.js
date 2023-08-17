import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

class AppTest {
  static setup() {
    render(<App />);
  }

  static testLearnReactLink() {
    const learnReactLink = screen.getByText(/Learn React/i);
    expect(learnReactLink).toBeInTheDocument();
    expect(learnReactLink).toHaveAttribute('href', 'https://reactjs.org');
  }

  static testExistingLearnReactLink() {
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  }
}

describe('App component', () => {
  beforeEach(() => {
    AppTest.setup();
  });


  it('renders the "Learn React" link', () => {
    AppTest.testLearnReactLink();
  });

  it('renders existing "Learn React" link', () => {
    AppTest.testExistingLearnReactLink();
  });
});