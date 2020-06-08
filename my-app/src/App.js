import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
    render() {
    return (
    <div className="App">
        <h1>Hi, This is a React App</h1>
        <Person name = "Duggu" age = "9"/>
        <Person name = "Revi"  age = "46" > Welcome everyone! </Person>
        <Person name = "Laksha" age = "27"/>
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


