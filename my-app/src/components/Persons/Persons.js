import React, {Component} from 'react';
import Person from './Person/Person.js';

    class Persons extends Component {

        /*static getDerivedStateFromProps(props,state){
            console.log('Persons.js getDerivedStateFromProps');
            return true;
        }*/

       shouldComponentUpdate(nextProps, nextState){
            console.log('Persons.js shouldComponentUpdate');
            if(nextProps.persons !== this.props.persons){
                return true;
            } else{
                return false;
            }
        }

        getSnapshotBeforeUpdate(prevProps, prevState){
            console.log('Persons.js getSnapshotBeforeUpdate');
            return {message : 'Snapshot! Snapshot!'};
        }

        componentDidUpdate(prevProps, prevState, snapshot) {
            console.log('Persons.js componentDidUpdate');
            console.log(snapshot);
        }

        componentWillUnmount(){
            console.log('Persons.js - Component will unmount');
        }

        render(){
            console.log('Persons.js Rendering...');

                return this.props.persons.map((personList,index) => {
                           return (
                                <Person
                                    clickMe = {()=>this.props.clicked(index)}
                                    name = {personList.name}
                                    age = {personList.age}
                                    changed = {(event)=> this.props.changed(event, personList.id)}
                                    key ={personList.id}
                                />
                            )
                });
        }
    }

export default Persons;
