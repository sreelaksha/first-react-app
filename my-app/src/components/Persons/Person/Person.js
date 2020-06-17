import React from 'react';
//import Radium from 'radium';
import styles from './personStyles.module.css';
//import styled from 'styled-components';

/*const StyledDiv = styled.div`
                              width: 60%;
                              margin: 16px auto;
                              border: 1px solid #eee;\box-shadow: 0 2px 3px #ccc;
                              padding: 16px;
                              text-align: center;

                              '@media (min-width: 500px)' : {
                                          width : 450px ;

                                }
                          `;*/

const person = (props) => {
    const random = Math.random();

    if(random > 0.7){
        throw new Error('Something went wrong!');
    }
    return (
    //<div className = "Person" style = {style}>
        <div className = {styles.Person}>
            <p onClick = {props.clickMe}> This is {props.name} and i am {props.age} years old </p>
            <p>{props.children} </p>
            <input type = "text" onChange = { props.changed } value = {props.name}/>
        </div>
   // </div>
    );
};
export default person;

//export default Radium(person);


