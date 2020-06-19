import React, { useEffect } from 'react';
import styles from './cockpit.module.css';

const Cockpit = (props) => {
    useEffect(() => {
        console.log('Cockpit.js - useEffect');

        // Http request...
        setTimeout(()=> {
            alert('This is coming from cloud');
        },2000);
        return () => {
            console.log('Cockpit.js cleanup work on useEffect');
        };
    }, []);

    useEffect(()=> {
        console.log('Cockpit.js cleanup work on useEffect - 2');
        return () => {
                    console.log('Cockpit.js cleanup work on useEffect - 2');
                }
    })


        const classes =[] ;
        let btnClass = '';

            if(props.showPersons){
                btnClass = styles.Red;
            }

            if(props.personsLength <= 2){
                classes.push(styles.green); //classes = ['green']
            }
            if(props.personsLength <= 1){
                classes.push(styles.bold); //classes = ['red', 'bold']
            }
    return(
            <div className = {styles.Cockpit}>
            <h1> {props.title}</h1>
            <p className = {classes.join('')}  >Hi, This is a React App</p>
               <button className = {btnClass}
                    onClick =  {props.toggle}> Toggle Persons List
                </button >
            </div>
    );
}

export default React.memo(Cockpit);