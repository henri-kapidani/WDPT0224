// TDD - Test Driven Develpment

import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

test('Il contatore parte da 0', () => {
    // rendering
    render(<Counter />);

    // selezione
    const numElement = screen.getByText('0');

    // interazione (se serve)

    // verifica
    expect(numElement).toBeInTheDocument();
});

test('Il contatore ha lo sfondo rosso', () => {
    // rendering
    render(<Counter />);

    // selezione
    const numElement = screen.getByText('0');

    // interazione (se serve)

    // verifica
    // expect(numElement).toHaveStyle('background-color: red'); // se dato con l'inline style
    expect(numElement.classList.contains('bg-red')).toBe(true); // se dato con la classe
});

test('Cliccando il bottone incrementa di uno', () => {
    // rendering
    render(<Counter />);

    // selezione
    const numElement = screen.getByText('0');
    const incButton = screen.getByText(/incrementa/i);

    // interazione (se serve)
    fireEvent.click(incButton);

    // verifica
    expect(numElement).toHaveTextContent('1');
});
