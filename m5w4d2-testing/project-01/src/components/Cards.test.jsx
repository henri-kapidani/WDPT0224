import { fireEvent, render, screen } from '@testing-library/react';
import Cards from './Cards';

test('ci sono 3 cards', () => {
    render(<Cards />);

    const cards = screen.getAllByTestId('mieCard');

    // fireEvent.click(cards[0])
    // expect(cards[0]).toBe()
    // fireEvent.click(cards[1])

    expect(cards).toHaveLength(3);
});
