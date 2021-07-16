import React from 'react';
import Person from "./Person";
import MockPersons from "./MockPersons";

function PersonList() {

    const personsList = MockPersons.map( person => <Person key={person.id} personData={person}/> )

    return (
        <div>
            {personsList}
        </div>
    )
}

export default PersonList