import { useContext } from 'react';
import { CounterContext } from './Context';

function Display() {
    // parte consumer del contesto
    const [counter] = useContext(CounterContext);

    return (
        <div>
            <h1>{counter}</h1>
        </div>
    );
}

export default Display;
