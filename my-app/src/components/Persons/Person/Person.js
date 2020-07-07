import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import Radium from 'radium';
import styles from './personStyles.module.css';
//import styled from 'styled-components';
import Aux from '../../../hoc/Aux.js' ;
import withClass from '../../../hoc/withClass.js' ;
import AuthContext from '../../../context/auth-context.js';

    class Person extends Component {
        constructor(props){
            super(props);
            this.inputElementRef = React.createRef();
        }

        static contextType = AuthContext;

        componentDidMount(){
            this.inputElementRef.current.focus();
            console.log(this.context.authenticated);
        }

            render(){
                 console.log('Person.js Rendering...');

                return (
                    <Aux>
                      {this.context.authenticated ?
                          <p> Authenticated </p> :
                          <p> Please Login </p> }
                       <p  onClick = {this.props.clickMe}> This is {this.props.name} and i am {this.props.age} years old </p>
                        <p >{this.props.children} </p>
                        <input type = "text"
                        //ref = { (inputEl) => { this.inputElement = inputEl }}
                        ref = { this.inputElementRef }
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

