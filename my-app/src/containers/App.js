import React, { Component } from 'react';
import styles from './myApp.module.css';
//import Radium , {StyleRoot} from 'radium';
//import styles from 'styled-components';
import Persons from '../components/Persons/Persons.js';
//import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.js';
import Cockpit from '../components/Cockpit/Cockpit.js';
import withClass from '../hoc/withClass.js';
import Aux from '../hoc/Aux.js';
import AuthContext from '../context/auth-context.js';


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
            showPersons : false,
            showCockpit : true,
            changeCounter : 0,
            isAuthenticated : false,
        }


    static getDerivedStateFromProps(props, state){
        console.log('App.js getDerivedStateFromProps - ' ,props);
        return state;
     }

    componentDidMount(){
        console.log('App.js componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('App.js shouldComponentUpdate');
        return true;
    }

    componentDidUpdate(){
        console.log('App.js componentDidUpdate');
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

            this.setState((prevState, props) => {
                return{
                            persons : updatedPersons,
                            changeCounter : prevState.changeCounter + 1
                     };
            });
         }

         togglePersonsHandler = () => {
            const doesShow = this.state.showPersons;
            this.setState({ showPersons : !doesShow});
         }

        loginHandler = () => {
            this.setState({ isAuthenticated : true});
        }

    render() {
        console.log('App.js Render...');
    let jsPersons = null;


    if(this.state.showPersons){
        jsPersons  =  <Persons
                                persons= {this.state.persons}
                                clicked = {this.deletePersonHandler}
                                changed = {this.nameChangeHandler}
                                isAuth1 = {this.state.isAuthenticated}
                       />
        /*style.backgroundColor = 'Red';
        style[':hover'] = {
                backgroundColor : 'salmon',
                color: 'black'
        }*/
    }




        return (
            //<StyleRoot>
                <Aux>
                        <button onClick = {() => {
                            this.setState({showCockpit : false});
                        }}> Remove Cockpit </button>
                    <AuthContext.Provider
                        value = {{
                            authenticated : this.state.isAuthenticated,
                             login : this.loginHandler}}
                     >
                    {this.state.showCockpit ?
                        <Cockpit
                        title = {this.props.appTitle}
                        showPersons = {this.state.showPersons}
                        personsLength={this.state.persons.length}
                        toggle ={this.togglePersonsHandler}
                        /> : null
                    }
                    {jsPersons}
                    </AuthContext.Provider>
                </Aux>
           // </StyleRoot>
        );
    //return React.createElement('div', null, React.createElement('div', { className: "App" }, React.createElement('h1', null, 'Hi, This is a React App')))
    }
}
export default withClass(App, styles.App);

//export default Radium(App);





