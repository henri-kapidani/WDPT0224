// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { CounterContext, UserContext } from './components/Context';
import Dashboard from './components/Dashboard';
import Display from './components/Display';
import { useState } from 'react';

function App() {
    const [counter, setCounter] = useState(100);
    const [user, setUser] = useState({
        userName: 'Pinco',
        email: 'asdf@asdf.asdf',
    });

    return (
        // CON IL PROPS DRILLING
        // <div>
        //     <Display counter={counter} />
        //     <Dashboard counter={counter} setCounter={setCounter} />
        // </div>

        // CON IL CONTEXT
        <div>
            {/* parte provider del contesto */}
            <CounterContext.Provider value={[counter, setCounter]}>
                <UserContext.Provider value={{ user: user, counter: counter }}>
                    <Display />
                    <Dashboard />
                </UserContext.Provider>
            </CounterContext.Provider>

            {/* <GreetContext.Provider value={[counter, setCounter]}>
                <Main></Main>
                <Footer></Footer>
            </GreetContext.Provider> */}
        </div>
    );
}

export default App;
