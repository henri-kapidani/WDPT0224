import { render, screen, fireEvent, configure } from '@testing-library/react';
import App from './App';

// configure({
//     getElementError: (message, container) => {
//         const error = new Error(message);
//         error.name = 'TestingLibraryElementError';
//         error.stack = null;
//         return error;
//     },
// });

test('renders learn react link', () => {
    // rendering
    render(<App />);

    // selezione
    const linkElement = screen.getByText(/learn react/i);

    // interazione

    // assertion
    expect(linkElement).toBeInTheDocument();
});
