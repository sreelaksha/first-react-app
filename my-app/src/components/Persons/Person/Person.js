import React, {Component, Fragment} from 'react';
//import Radium from 'radium';
import styles from './personStyles.module.css';
//import styled from 'styled-components';
import Aux from '../../../hoc/Aux.js' ;

    class Person extends Component {
            render(){
                 console.log('Person.js Rendering...');

                return (
                    <Fragment> 
                        <p  onClick = {this.props.clickMe}> This is {this.props.name} and i am {this.props.age} years old </p>
                        <p >{this.props.children} </p>
                        <input type = "text"  onChange = { this.props.changed } value = {this.props.name}/>
                    </Fragment>
                );
    }

    };
export default Person;

//export default Radium(person);


