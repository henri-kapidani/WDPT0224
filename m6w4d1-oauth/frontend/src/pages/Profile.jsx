import { useContext } from 'react';
import { UserContext } from '../Context';

function Profile() {
    const [user, setUser] = useContext(UserContext);

    return (
        <div>
            <h1>Profile</h1>
            <ul>
                <li>Firstname: {user.firstName}</li>
                <li>Lastname: {user.lastName}</li>
            </ul>
        </div>
    );
}

export default Profile;
