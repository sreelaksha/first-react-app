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

    switchNameHandler = () => {
        console.log ('This was clicked!');
    }

    render() {
    return (
    <div className="App">
        <h1>Hi, This is a React App</h1>
        <button onClick = {this.switchNameHandler} > Switch Name </button>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age} > Welcome everyone! </Person>
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}/>
    </div>
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/
    //return React.createElement('div', null, React.createElement('div', { className: "App" }, React.createElement('h1', null, 'Hi, This is a React App')))
     );
    }
}

export default App;


