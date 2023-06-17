import { useCurrentUser } from "../CustomHooks/useCurrentUser";
import { useUser } from "../CustomHooks/useUser";

export const UserInfo = ({ userId }) => {
    const user = useUser(userId);

    const {name, age, hairColor, hobbies} = user || {};

    return user ? (
        <>
        <h4>{name}</h4>
        <p>Age: {age} years</p>
        <p>Hair Color: {hairColor}</p>
        <h5>Hobbies:</h5>
        <ul>
            {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
        </ul>
        </>
    ): <p>Loading..</p>;
}