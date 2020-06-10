import React from 'react';


//class UserInput extends Component {
       // render() {

       const userInput = (props) => {
             return (
                    <div className = "UserInput">
                    <input type= "text" onChange = { props.changed } value = {props.username} />
                    </div>
             );
        }


export default userInput;