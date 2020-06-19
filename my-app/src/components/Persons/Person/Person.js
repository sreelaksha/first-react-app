import React, {Component} from 'react';
//import Radium from 'radium';
import styles from './personStyles.module.css';
//import styled from 'styled-components';
import Aux from '../../../hoc/Aux.js' ;
import withClass from '../../../hoc/withClass.js' ;

    class Person extends Component {
            render(){
                 console.log('Person.js Rendering...');

                return (
                    <Aux>
                        <p  onClick = {this.props.clickMe}> This is {this.props.name} and i am {this.props.age} years old </p>
                        <p >{this.props.children} </p>
                        <input type = "text"  onChange = { this.props.changed } value = {this.props.name}/>
                    </Aux>
                );
    }

    };
export default withClass(Person, styles.Person) ;

//export default Radium(person);


