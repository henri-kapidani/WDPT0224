import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Cards from './components/Cards';

function App() {
    return (
        <div className="App">
            <Cards />
            <Counter />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn react
                </a>
            </header>
        </div>
    );
}

export default App;
