import React, { Component } from 'react';
import styles from './myApp.module.css';
//import Radium , {StyleRoot} from 'radium';
//import styles from 'styled-components';
import Persons from '../components/Persons/Persons.js';
//import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.js';
import Cockpit from '../components/Cockpit/Cockpit.js';


class App extends Component {
    constructor(props){
        super(props);
        console.log('App.js constructor`');
    }

        state = {
            persons : [
                    {id:'aa1', name:"Duggu", age: 9 },
                    {id:'bb1', name:"Revi", age : 46 },
                    {id:'cc1' ,name:"LAKSHA", age : 27 },
            ],
            otherState : 'some other value',
            showPersons : false
        }


    static getDerivedStateFromProps(props, state){
        console.log('App.js getDerivedStateFromProps - ' ,props);
        return state;
     }

    componentDidMount(){
        console.log('App.js componentDidMount');
    }


    deletePersonHandler = (personIndex) => {
        //const deletedPersons =this.state.persons.slice();
        const deletedPersons =[...this.state.persons];
        deletedPersons.splice( personIndex , 1);
        this.setState({ persons : deletedPersons})
    }

/*switchNameHandler = (newName) => {
            console.log ('This was clicked!');
            this.setState({
                    persons : [
                        {name:"Duggu", age: 9 },
                        {name:"REVATHI", age : 46 },
                        {name:newName, age : 27 },
                    ]
            })
        }*/


        nameChangeHandler = (event, id) => {

            const personIndex = this.state.persons.findIndex(p => {
                return p.id ===id;
            })

            const newPersonsList = {
            ...this.state.persons[personIndex]
            }

        //const updatedPersons = Object.assign({},this.state.persons[personIndex];

            newPersonsList.name = event.target.value;

            const updatedPersons =[...this.state.persons] ;
            updatedPersons[personIndex] = newPersonsList;

            this.setState({ persons : updatedPersons})
         }

         togglePersonsHandler = () => {
            const doesShow = this.state.showPersons;
            this.setState({ showPersons : !doesShow});
         }



    render() {
        console.log('App.js Render...');
    let jsPersons = null;


    if(this.state.showPersons){
        jsPersons  =  <Persons
                                persons= {this.state.persons}
                                clicked = {this.deletePersonHandler}
                                changed = {this.nameChangeHandler}
                       />
        /*style.backgroundColor = 'Red';
        style[':hover'] = {
                backgroundColor : 'salmon',
                color: 'black'
        }*/
    }




        return (
            //<StyleRoot>
                <div className={styles.App}>
                    <Cockpit
                    title = {this.props.appTitle}
                    showPersons = {this.state.showPersons}
                    persons={this.state.persons}
                    toggle ={this.togglePersonsHandler}
                    />
                    {jsPersons}
                </div>
           // </StyleRoot>
        );
    //return React.createElement('div', null, React.createElement('div', { className: "App" }, React.createElement('h1', null, 'Hi, This is a React App')))
    }
}
export default App;

//export default Radium(App);





