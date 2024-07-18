import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div style={{ backgroundColor: 'red' }} className="bg-red">
                {count}
            </div>
            <button onClick={() => setCount(count + 1)}>Incrementa</button>
        </div>
    );
}

export default Counter;
