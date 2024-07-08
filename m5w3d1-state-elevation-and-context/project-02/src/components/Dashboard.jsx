import { useContext } from 'react';
import Controls from './Controls';
import { UserContext } from './Context';

function Dashboard() {
    const { user, counter } = useContext(UserContext); // { user: user, counter: counter }

    return (
        <div className="border border-3">
            <h2>Sono la dashboard di {user.userName}</h2>
            <h3>Lo stato del contatore è: {counter}</h3>
            <Controls />
        </div>
    );
}

export default Dashboard;
