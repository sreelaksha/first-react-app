import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
    state = {
        persons : [
                {id:'aa1', name:"Duggu", age: 9 },
                {id:'bb1', name:"Revi", age : 46 },
                {id:'cc1' ,name:"LAKSHA", age : 27 },
        ],
        otherState : 'some other value',
        showPersons : false
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
        const style = {
            backgroundColor: 'green',
            color : 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

    let jsPersons = null;
    if(this.state.showPersons){
        jsPersons= (
                            <div>
                                {this.state.persons.map((personList,index) => {
                                    return <Person
                                                clickMe = {this.deletePersonHandler.bind(this,index)}
                                                name = {personList.name}
                                                age = {personList.age}
                                                key = {personList.id}
                                                changed = {(event) => this.nameChangeHandler(event,personList.id)}
                                            />
                                    })
                                }
                            </div>

                );
        style.backgroundColor = 'Red';
    }

        return (
            <div className="App">
                <h1>Hi, This is a React App</h1>
                <button
                    style = {style}
                    onClick =  {this.togglePersonsHandler}> Toggle Persons List </button>
                {jsPersons}
            </div>
        );
    //return React.createElement('div', null, React.createElement('div', { className: "App" }, React.createElement('h1', null, 'Hi, This is a React App')))
    }
}

export default App;





