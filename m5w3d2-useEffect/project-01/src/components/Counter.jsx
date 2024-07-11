import { useEffect, useState } from 'react';

// mounting
// update
// unmounting

function Counter() {
    const [counter, setCounter] = useState(0);
    const [cron, setCron] = useState(null);

    console.log('Counter RENDERIZZATO');

    // // senza il secondo argomento è pericoloso e poco utile
    // // perchè viene eseguito ad ogni rendering del componente
    // useEffect(
    //     // CICLO INFINITO:
    //     // useEffect cambia lo stato,
    //     // il cambiamento di stato causa il rendering del componente
    //     // useEffect senza secondo argomento viene eseguito ad ogni rendering
    //     // il giro ricomincia
    //     () => setCounter(counter + 1)
    //     // , secondo argomento assente
    // );

    // useEffect(() => {
    //     console.log('useEffect di Counter eseguito');
    //     setCounter(counter + 1);

    //     // function atDestruction() {
    //     //     console.log('Counter DISTRUTTO');
    //     // }
    //     // return atDestruction;

    //     // la funzione ritornata (clean up function)
    //     // verrà eseguita all'unmounting del componente
    //     // (SOLO quando l'array delle dipendenze è vuoto)
    //     return () => console.log('Counter DISTRUTTO');
    // }, []);

    useEffect(() => {
        console.log('Counter MONTATO');
        const intervalId = startCron();

        return () => {
            console.log('Counter DISTRUTTO');
            clearInterval(intervalId);
        };
    }, []);

    function startCron() {
        console.log('start cron');

        const intervalId = setInterval(() => {
            // setInterval è una funzione del browser NON è uno stato
            setCounter((oldCounter) => oldCounter + 1);
            // passando al setter una collback anzichè il nuovo valore di stato
            // React calcola il nuovo stato sempre partendo dal valore attuale
            // e non da quello che lo stato aveva al momento in cui setInterval
            // è stato eseguito
            console.log('sto contando...');
        }, 1000); // setInterval ritorna l'identificatore (un semplice numero) dell'intervallo creato

        setCron(intervalId); // salvo l'identificatore dell'intervallo creato per poterlo bloccare all'unmounting del componente o al click del bottone
        return intervalId;
    }

    function stopCron() {
        console.log('stop cron');
        clearInterval(cron);
        setCron(null);
    }

    function toggleCron() {
        if (cron) {
            stopCron();
        } else {
            startCron();
        }
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => setCounter((oldCounter) => oldCounter + 1)}>
                Incrementa
            </button>

            <button onClick={toggleCron}>
                {cron ? 'Stoppa cronometro' : 'Riparti'}
            </button>
        </div>
    );
}

export default Counter;
