import React, {Component} from 'react';
//import Radium from 'radium';
import styles from './personStyles.module.css';
//import styled from 'styled-components';

    class Person extends Component {
            render(){
                 console.log('Person.js Rendering...');

                return (
                //<div className = "Person" style = {style}>
                    <div className = {styles.Person}>
                        <p onClick = {this.props.clickMe}> This is {this.props.name} and i am {this.props.age} years old </p>
                        <p>{this.props.children} </p>
                        <input type = "text" onChange = { this.props.changed } value = {this.props.name}/>
                    </div>
               // </div>
                );

        }

    };
export default Person;

//export default Radium(person);


