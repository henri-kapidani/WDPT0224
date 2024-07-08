import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { CounterContext } from './Context';

// METODO 1
function Controls() {
    // parte consumer del contesto
    const [counter, setCounter] = useContext(CounterContext);

    return (
        <div>
            <Button
                variant="primary"
                onClick={() => {
                    setCounter(counter + 1);
                }}
            >
                Incrementa
            </Button>
            <Button
                variant="secondary"
                onClick={() => {
                    setCounter(counter - 1);
                }}
            >
                Decrementa
            </Button>
        </div>
    );
}

// METODO 2
// function Controls({ increment, decrement }) {
//     return (
//         <div>
//             <Button variant="primary" onClick={increment}>
//                 Incrementa
//             </Button>
//             <Button variant="secondary" onClick={decrement}>
//                 Decrementa
//             </Button>
//         </div>
//     );
// }

// METODO 3
// function Controls({ change }) {
//     return (
//         <div>
//             <Button
//                 variant="primary"
//                 onClick={() => {
//                     change(1);
//                 }}
//             >
//                 Incrementa
//             </Button>
//             <Button
//                 variant="secondary"
//                 onClick={() => {
//                     change(-1);
//                 }}
//             >
//                 Decrementa
//             </Button>
//         </div>
//     );
// }

export default Controls;
