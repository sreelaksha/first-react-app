import React, { Component } from 'react';
//import './App.css';
import AppComponent from './AppComponent.js'
import ValidationComponent from './ValidationComponent.js'

class AppA2 extends Component {
    state = {
                textEntered :{text: "" },
            }

      textChangeHandler = (event) => {
                               this.setState({
                                                textEntered: {text: event.target.value},
                                             })
                                      }

     render() {
        return (
                    <div className="AppA2">
                        <h1>Hi, this is my React Assignment 2</h1>
                        <AppComponent
                                text={this.state.textEntered.text}
                                changed = {this.textChangeHandler}
                        />
                        <ValidationComponent
                                textLength = {this.state.textEntered.text.length}
                        />
                     </div>
                );
     }
}
export default AppA2;