import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

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
                    {name:"DUGGU", age: 9 },
                      {name:"REVATHI", age : 46 },
                        {name:newName, age : 27 },
                    ]

                })
        }

 render() {
        return (
            <div className="App">
                <h1>Hi, This is a React App</h1>
                <button onClick = {this.switchNameHandler.bind(this,'Dachu')}> Switch Name </button>
                <Person
                    name = {this.state.persons[0].name}
                    age = {this.state.persons[0].age}/>
                <Person
                    clickMe = {this.switchNameHandler.bind(this,'Lakku')}
                    name = {this.state.persons[1].name}
                    age = {this.state.persons[1].age}>
                    Welcome everyone! </Person>
                <Person
                    name = {this.state.persons[2].name}
                    age = {this.state.persons[2].age}/>
            </div>
        );
    //return React.createElement('div', null, React.createElement('div', { className: "App" }, React.createElement('h1', null, 'Hi, This is a React App')))
    }
}
export default App;





