const Person = ({ name, age, hobbies }) => {
    return (
        <div>
            <p>Learn some information about this person</p>
            <p>Name: {name}</p>
            <p>age: {age}</p>
            <p>Hobbies:</p>
            <ul>
                {hobbies.map(hobby => <li>{hobby}</li>)}
            </ul>
            <h3>{age >= 18 ? "please go vote!" : "you must be 18"}</h3>

        </div>
    )
}