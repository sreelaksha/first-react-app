import React from 'react';
import Person from './Person/Person.js';

    const persons = (props) => {
        console.log('Persons.js Rendering...');
    return props.persons.map((personList,index) => {
                                       return (
                                            <Person
                                                clickMe = {()=>props.clicked(index)}
                                                name = {personList.name}
                                                age = {personList.age}
                                                changed = {(event)=> props.changed(event, personList.id)}
                                                key ={personList.id}
                                            />
                                        )
                                });
     }

export default persons;
