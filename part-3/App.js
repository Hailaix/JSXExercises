const App = () => {
    return (
        <div>
            <Person
            name="Alice"
            age={15}
            hobbies={["singing", "skating"]}
            />
            <Person
            name="Bob"
            age={18}
            hobbies={["swimming", "sewing"]}
            />
            <Person
            name="Charlie"
            age={27}
            hobbies={["walking","talking"]}
            />
        </div>
    )
}