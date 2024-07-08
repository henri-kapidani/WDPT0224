// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Display from './components/Display';
import Controls from './components/Controls';
import { useState } from 'react';

function App() {
    const [counter, setCounter] = useState(0);

    // METODO 2
    // function increment() {
    //     setCounter(counter + 1);
    // }

    // function decrement() {
    //     setCounter(counter - 1);
    // }

    // METODO 3
    function change(delta) {
        setCounter(counter + delta);
    }

    return (
        <div>
            <Display counter={counter} />
            {/* METODO 1 */}
            {/* <Controls counter={counter} setCounter={setCounter} /> */}

            {/* METODO 2 */}
            {/* <Controls increment={increment} decrement={decrement} /> */}

            {/* METODO 3 */}
            <Controls change={change} />
        </div>
    );
}

export default App;
