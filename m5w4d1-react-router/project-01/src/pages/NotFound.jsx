import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div>
            <h1>La pagina non esiste</h1>
            <Link to="/">Vai alla home</Link>
        </div>
    );
}

export default NotFound;
