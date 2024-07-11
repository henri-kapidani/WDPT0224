import { useState } from 'react';
import Counter from './components/Counter';

function App() {
    const [isCounterVisible, setIsCounterVisible] = useState(true);

    console.log('Renderizza App');

    return (
        <div className="App">
            {/* questo condizionale permettere di distruggere il componente Couter
            al click del bottone */}
            {isCounterVisible && <Counter />}
            <button onClick={() => setIsCounterVisible(!isCounterVisible)}>
                Toggle contatore
            </button>
        </div>
    );
}

export default App;
