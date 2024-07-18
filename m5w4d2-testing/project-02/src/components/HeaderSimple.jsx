import { Link } from 'react-router-dom';

function HeaderSimple() {
    return (
        <header>
            <ul>
                <li>
                    {/* <a href="/">Home</a> */}
                    <Link to="/">Home</Link>
                </li>
                <li>
                    {/* <a href="/about">About</a> */}
                    <Link to="/about">About</Link>
                </li>
                <li>
                    {/* <a href="/contacts">Contacts</a> */}
                    <Link to="/contacts">Contacts</Link>
                </li>
                <li>
                    {/* <a href="/contacts">Contacts</a> */}
                    <Link to="/posts">Posts</Link>
                </li>
            </ul>
        </header>
    );
}

export default HeaderSimple;
