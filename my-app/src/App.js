import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js'

const App = props => {
    const [personState, setPersonState]= useState({
                persons : [
                      {name:"Duggu", age: 9 },
                      {name:"Revi", age : 46 },
                      {name:"Laks", age : 27 },
                ],
                
        });

    const [otherState, setotherState] = useState({otherState: 'some other value'});

    console.log(personState, otherState);
       const switchNameHandler = () => {
               setPersonState({
                        persons : [
                        {name:"DUGGU", age: 9 },
                          {name:"REVATHI", age : 46 },
                            {name:"LAKSHA", age : 27 },
                        ]
                 })
            }

    return (
        <div className="App">
            <h1>Hi, This is a React App</h1>
            <button onClick = {switchNameHandler} > Switch Name </button>
            <Person name = {personState.persons[0].name} age = {personState.persons[0].age}/>
            <Person name = {personState.persons[1].name} age = {personState.persons[1].age} > Welcome everyone! </Person>
            <Person name = {personState.persons[2].name} age = {personState.persons[2].age}/>
        </div>
    );
    //return React.createElement('div', null, React.createElement('div', { className: "App" }, React.createElement('h1', null, 'Hi, This is a React App')))
}
export default App;





