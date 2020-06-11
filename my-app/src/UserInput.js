import React from 'react';


//class UserInput extends Component {
       // render() {

       const userInput = (props) => {
        const style = {
                                backgroundColor: 'grey',
                                font: 'inherit',
                                border: '1px solid blue',
                                padding: '8px',
                                cursor: 'pointer'
                            };
             return (
                    <div>
                  <input type= "text" style = {style} onChange = { props.changed } value = {props.currentName} />
                    </div>
             );
        }


export default userInput;