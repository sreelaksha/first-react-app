import React, {Component} from 'react';
//import Radium from 'radium';
import styles from './personStyles.module.css';
//import styled from 'styled-components';

    class Person extends Component {
            render(){
                 console.log('Person.js Rendering...');

                return [

                        <p key = "i1" onClick = {this.props.clickMe}> This is {this.props.name} and i am {this.props.age} years old </p>,
                        <p key = "i2" >{this.props.children} </p>,
                        <input type = "text" key = "i3" onChange = { this.props.changed } value = {this.props.name}/>

                     ];

        }

    };
export default Person;

//export default Radium(person);


