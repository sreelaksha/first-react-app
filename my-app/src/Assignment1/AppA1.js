/*
import React, { Component } from 'react';
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

         /*switchNameHandler = (newName) => {
                     console.log ('This was clicked!');
                     this.setState({
                             persons : [
                                 {name:"Duggu", age: 9 },
                                 {name:"REVATHI", age : 46 },
                                 {name:newName, age : 27 },
                             ]
                     })
                 }*/

/*
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
export default App;
*/

