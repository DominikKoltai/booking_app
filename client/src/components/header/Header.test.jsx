import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

describe('Header component', () => {
  it('renders header items and handles search button click', () => {
    render(<Header />, { wrapper: MemoryRouter });

    // Test whether the Stays header item is rendered
    const staysItem = screen.getByText('Stays');
    expect(staysItem).toBeInTheDocument();

    // ... Continue testing for other header items, input fields, buttons, etc.

    // For example, testing the Search button
    const searchButton = screen.getByText('Search');
    expect(searchButton).toBeInTheDocument();

    // Simulate user interactions, like clicking the Search button
    fireEvent.click(searchButton);
  });
});
