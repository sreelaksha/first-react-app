import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import Radium from 'radium';
import styles from './personStyles.module.css';
//import styled from 'styled-components';
import Aux from '../../../hoc/Aux.js' ;
import withClass from '../../../hoc/withClass.js' ;

    class Person extends Component {

        componentDidMount(){
            this.inputElement.focus();
        }

            render(){
                 console.log('Person.js Rendering...');

                return (
                    <Aux>
                        <p  onClick = {this.props.clickMe}> This is {this.props.name} and i am {this.props.age} years old </p>
                        <p >{this.props.children} </p>
                        <input type = "text"
                        ref = { (inputEl) => { this.inputElement = inputEl }}
                        onChange = { this.props.changed }
                        value = {this.props.name}/>
                    </Aux>
                );
            }
    };

Person.propTypes = {
    clickMe : PropTypes.func,
    name : PropTypes.string,
    age : PropTypes.number,
    changed : PropTypes.func
};

export default withClass(Person, styles.Person) ;

//export default Radium(person);


