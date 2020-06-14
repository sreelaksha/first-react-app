/*
import React, { Component } from 'react';
//import './App.css';
import AppComponent from './AppComponent.js'
import ValidationComponent from './ValidationComponent.js'
import CharComponent from './CharComponent.js'

class AppA2 extends Component {
    state = {text: '' }


      textChangeHandler = (event) => {
                               this.setState({text: event.target.value}
                                             )
                                      }

       deleteCharacterHandler =  (index) => {
                           const deletedChar =  this.state.text.split('');
                            deletedChar.splice(index, 1);
                            const joinedChar = deletedChar.join('');
                            this.setState({ text : joinedChar});
              }


     render() {
               const differentLetters = this.state.text.split('').map((charList,index) => {
                        return <CharComponent
                                    key = {index}
                                     letters = {charList}
                                     clickMe = {()=> this.deleteCharacterHandler(index)}
                         />
                        });

          return (
                    <div className="AppA2">
                        <h1>Hi, this is my React Assignment 2</h1>
                        <AppComponent

                                text={this.state.text}
                                changed = {this.textChangeHandler}
                         />
                         <ValidationComponent
                                    textLength = {this.state.text.length}
                        />
                        {differentLetters}
                    </div>
                );
     }
}
export default AppA2;
*/
