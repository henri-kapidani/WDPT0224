import { Container } from 'react-bootstrap';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import NavTop from './components/NavTop';
import { TokenContext, UserContext } from './Context';

// pages
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import RecipesList from './pages/RecipesList';
import RecipeCreate from './pages/RecipeCreate';
import RecipeDetails from './pages/RecipeDetails';
import { useEffect, useState } from 'react';

function App() {
    const [token, setToken] = useState('');
    const [user, setUser] = useState(null);

    useEffect(() => {
        const jwtToken = localStorage.getItem('token');
        setToken(jwtToken);

        if (!jwtToken && user) setUser(null);

        if (jwtToken && !user) {
            fetch('http://localhost:5000/api/v1/me', {
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                },
            })
                .then((res) => res.json())
                .then((data) => setUser(data));
        }
    }, [token]);

    return (
        <TokenContext.Provider value={[token, setToken]}>
            <UserContext.Provider value={[user, setUser]}>
                <BrowserRouter>
                    <NavTop />
                    <Container>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/register" element={<Register />} />

                            <Route path="/recipes" element={<RecipesList />} />
                            <Route
                                path="/recipes/new"
                                element={<RecipeCreate />}
                            />
                            <Route
                                path="/recipes/:id"
                                element={<RecipeDetails />}
                            />

                            <Route path="/404" element={<NotFound />} />
                            <Route path="*" element={<Navigate to="/404" />} />
                        </Routes>
                    </Container>
                </BrowserRouter>
            </UserContext.Provider>
        </TokenContext.Provider>
    );
}

export default App;
