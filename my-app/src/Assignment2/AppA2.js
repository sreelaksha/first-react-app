import React, { Component } from 'react';
//import './App.css';
import AppComponent from './AppComponent.js'

class AppA2 extends Component {
    state = {
                textEntered :{text: " " },
             }

      textChangeHandler = (event) => {
                                        this.setState({textEntered: {text: event.target.value}})
                                      }

     render() {
        return (
                    <div className="AppA2">
                        <h1>Hi, this is my React Assignment 2</h1>
                        <AppComponent
                                text={this.state.textEntered.text}
                                changed = {this.textChangeHandler}
                        />
                     </div>
                );
     }
}
export default AppA2;