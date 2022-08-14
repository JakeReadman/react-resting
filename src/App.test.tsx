import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';

test('button has correct initial colour', () => {
    render(<App />);
    const btn = screen.getByRole('button', { name: 'Change to Midnight Blue' });
    expect(btn).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
    fireEvent.click(btn);
    expect(btn).toHaveStyle({ backgroundColor: 'MidnightBlue' });
    expect(btn).toHaveTextContent('Change to Medium Violet Red');
});

test('initial conditions', () => {
    render(<App />);
    const btn = screen.getByRole('button', { name: 'Change to Midnight Blue' });
    expect(btn).toBeEnabled();
    const checkbox: HTMLInputElement = screen.getByRole('checkbox', {
        name: 'Disable Button',
    });
    expect(checkbox.checked).toEqual(false);
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked;
    expect(btn).toBeDisabled();
    expect(btn).toHaveStyle({ backgroundColor: 'grey' });
});

describe('spaces before camel-case caps', () => {
    test('works for no inner caps', () => {
        expect(replaceCamelWithSpaces('red')).toBe('red');
    });
    test('works for one inner cap', () => {
        expect(replaceCamelWithSpaces('midnightBlue')).toBe('midnight blue');
    });
    test('works for multiple caps', () => {
        expect(replaceCamelWithSpaces('mediumVioletRed')).toBe(
            'medium violet red'
        );
    });
});
