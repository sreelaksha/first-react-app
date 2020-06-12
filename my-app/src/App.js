
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
    state = {
        persons : [
                {name:"Duggu", age: 9 },
                {name:"Revi", age : 46 },
                {name:"LAKSHA", age : 27 },
        ],
        otherState : 'some other value',
        showPersons : false
    }

     switchNameHandler = (newName) => {
            console.log ('This was clicked!');
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

         togglePersonsHandler = () => {
            const doesShow = this.state.showPersons;
            this.setState({ showPersons : !doesShow});
         }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

    let jsPersons = null;
    if(this.state.showPersons){
        jsPersons= (
                            <div>
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

                )

    }

        return (
            <div className="App">
                <h1>Hi, This is a React App</h1>
                <button
                    style = {style}
                    onClick =  {this.togglePersonsHandler}> Toggle Persons List </button>
                {jsPersons}
            </div>
        );
    //return React.createElement('div', null, React.createElement('div', { className: "App" }, React.createElement('h1', null, 'Hi, This is a React App')))
    }
}

export default App;

/*
import UserInput from './UserInput.js';
import UserOutput from './UserOutput.js';

class App extends Component {
        state = {
            output: [
                    {username1: "Laks"  },
                    {username2: "Hash"  }
                ]
        }
        inputChangeHandler = (event) => {
                this.setState({
                    output: [
                                { username1: event.target.value},
                                {username2: "Harish"}
                             ]
                            })
             }
    render(){
     return (
                <div className="App">
                        <h1>Hi, this is my React assignment</h1>
                       <UserOutput username = {this.state.output[0].username1}/>
                        <UserOutput username = {this.state.output[1].username2}/>
                       <UserInput
                            changed = {this.inputChangeHandler}
                            currentName = {this.state.output[0].username1}
                       />
                </div>
             );
        }
}
*/









