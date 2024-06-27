import Button from 'react-bootstrap/Button';
import { useState } from 'react';

// modo alternativo equivalente per dichiarare un componente
// const Counter = () => {
//     return (<>.......</>)
// }

function Counter() {
    // Il componente viene rirenderizzato quando cambiano o lo stato o le props

    // Lo stato è l'insieme delle variabili che se modificate causano un rerendering del componente

    // Modificate lo stato SOLO unsando la funzione fornita da useState e MAI direttamente
    // counter = counter + 5; NOOOOOO
    // setCounter(counter + 5); OOOOOOK adesso si

    const [isLoaded, setIsLoaded] = useState(false);
    const [counter, setCounter] = useState(0); // [valoreAggiornato, funzionePerCambiareIlValore]
    // la sintassi di sopra equivale a scrivere questo:
    // const parts = useState('valoreDiInizializzazione'); // [valoreAggiornato, funzionePerCambiareIlValore]
    // const counter = parts[0];
    // const setCounter = parts[1];

    const increment = () => {
        setCounter(counter + 1); // non usate il ++ perchè modifica il valore della variabile, ma lo stato non deve mai essere modificato direttamente
        console.log(counter);
    };

    return (
        <>
            {/* non si puo' fare perche' in JSX non potete usere statements ma solo expressions (vedi commento sotto) */}
            {/* {if (test) { ........ } else { ........ }}  */}

            <div>{counter}</div>
            <button onClick={increment}>Incrementa</button>
            <Button
                variant="danger"
                onClick={() => {
                    // funzione troppo lunga meglio dichiararla a parte come fatto con increment
                    setIsLoaded(!isLoaded);
                    console.log(isLoaded);
                }}
            >
                {isLoaded ? 'Scarica' : 'Carica'}
            </Button>
        </>
    );
}

export default Counter;

// expressions: ritornano un valore, es.:
// - ternario:     test ? 'ciao' : 'arrivederci'; // ritorna 'ciao'
// - .map():       [1, 2, 3, 4].map(element => element * 2); // ritorna [2, 4, 6, 8]

// statements - NON ritornano un valore, es:
// if, for, while, do while
