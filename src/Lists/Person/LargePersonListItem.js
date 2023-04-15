export const LargePersonListItem = ({person}) => {
    const { name, age, hariColor, hobbies } = person;

    return (
        <>
            <h4>{name}</h4>
            <p>Age: {age} years</p>
            <p>Hair Color: {hariColor}</p>
            <h5>Hobbies:</h5>
            <ul>
                {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
            </ul>
        </>
        
    )
}