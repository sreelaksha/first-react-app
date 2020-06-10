
import React, { Component } from 'react';
import './App.css';
//import Person from './Person/Person.js'

import UserInput from './UserInput.js';
import UserOutput from './UserOutput.js';

class App extends Component {
        state = {
                 output : [
                   { username: "Laksha" },
                   { username: "Harish" }
                 ]
             }

        inputChangeHandler = (event) => {
                    this.setState({
                            output : [
                                         { username: event.target.value},
                                         { username: "Harish" }
                                      ]
                         })
             }


        render(){
            const style = {
                        backgroundColor: 'grey',
                        font: 'inherit',
                        border: '1px solid blue',
                        padding: '8px',
                        cursor: 'pointer'
                    };

             return (
                <div className="App">
                        <h1 style = {style} >Hi, this is my React assignment</h1>
                       <UserOutput username = {this.state.output[0].username}/>
                       <UserOutput username = {this.state.output[1].username}/>
                       <UserInput
                            changed = {this.inputChangeHandler.bind(this)}
                       />
                </div>
             );
        }
}






/*
class App extends Component {
    state = {
        persons : [
        {name:"Duggu", age: 9 },
          {name:"Revi", age : 46 },
            {name:"LAKSHA", age : 27 },
        ]

    }
     switchNameHandler = (newName) => {
            console.log ('This was clicked!');
            //console.log ('This was clicked!');
            this.setState({
                    persons : [
                    {name:"Duggu", age: 9 },
                      {name:"REVATHI", age : 46 },
                        {name:newName, age : 27 },
                    ]

                })
        }

        nameChangeHandler = (event) => {
            this.setState({
                                persons : [
                                {name:"Duggu", age: 9 },
                                  {name: event.target.value, age : 46 },
                                    {name:"Laksha", age : 27 },
                                ]

                            })
     }

 render() {
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

        return (
            <div className="App">
                <h1>Hi, This is a React App</h1>
                <button
                    style = {style}
                    onClick = {() => this.switchNameHandler('Dachu')}> Switch Name </button>
                <Person
                    name = {this.state.persons[0].name}
                    age = {this.state.persons[0].age} />
                <Person
                    clickMe = {this.switchNameHandler.bind(this,'Lakku')}
                    name = {this.state.persons[1].name}
                    age = {this.state.persons[1].age}
                    changed = {this.nameChangeHandler}>
                    Welcome everyone! </Person>
                <Person
                    name = {this.state.persons[2].name}
                    age = {this.state.persons[2].age} />
            </div>
        );
    //return React.createElement('div', null, React.createElement('div', { className: "App" }, React.createElement('h1', null, 'Hi, This is a React App')))
    }
}*/


export default App;







